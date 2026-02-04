import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/seo/seo.config";
import logoLight from "@/assets/omnyo-logo-light.png";
import logoDark from "@/assets/omnyo-logo-dark.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const { t, language } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: ROUTES.home[language], label: t("nav.home") },
    { href: ROUTES.product[language], label: t("nav.product") },
    { href: ROUTES.pricing[language], label: t("nav.pricing") },
    { href: ROUTES.about[language], label: t("nav.about") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8 lg:py-6"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link to={ROUTES.home[language]} className="flex items-center">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Omnyo"
            className="brand-logo shrink-0"
            width={327}
            height={108}
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Button
                variant="nav"
                className={cn(
                  "relative",
                  location.pathname === link.href && "text-foreground",
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:flex" />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Link to={ROUTES.contact[language]} className="hidden md:block">
            <Button variant="hero" size="default">
              {t("nav.getEarlyAccess")}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              <div className="mb-2 flex justify-center">
                <LanguageToggle />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={ROUTES.contact[language]}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button variant="hero" className="w-full">
                  {t("nav.getEarlyAccess")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
