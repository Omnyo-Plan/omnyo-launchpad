import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTop } from "@/components/ui/BackToTop";
import { Analytics } from "@/seo/Analytics";
import { ROUTES } from "@/seo/seo.config";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("prerender-ready"));
      });
    }
  }, []);

  const rawBase = import.meta.env.BASE_URL || "/";
  const basename = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "");

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter basename={basename}>
            <LanguageProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <Analytics />
                <ScrollToTop />
                <Routes>
                  <Route path={ROUTES.home.en} element={<Index />} />
                  <Route path={ROUTES.product.en} element={<Product />} />
                  <Route path={ROUTES.pricing.en} element={<Pricing />} />
                  <Route path={ROUTES.contact.en} element={<Contact />} />
                  <Route path={ROUTES.about.en} element={<About />} />
                  <Route path={ROUTES.home.gr} element={<Index />} />
                  <Route path={ROUTES.product.gr} element={<Product />} />
                  <Route path={ROUTES.pricing.gr} element={<Pricing />} />
                  <Route path={ROUTES.contact.gr} element={<Contact />} />
                  <Route path={ROUTES.about.gr} element={<About />} />
                  <Route path={ROUTES.notFound.en} element={<NotFound />} />
                  <Route path={ROUTES.notFound.gr} element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <BackToTop />
              </TooltipProvider>
            </LanguageProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
