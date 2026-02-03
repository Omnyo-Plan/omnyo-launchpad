import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { ROUTES } from "@/seo/seo.config";
import logoLight from "@/assets/omnyo-logo-light.png";
import logoDark from "@/assets/omnyo-logo-dark.png";

export function Footer() {
  const { t, language } = useLanguage();
  const { theme } = useThemeContext();

  const footerLinks = {
    product: [
      { label: t("footer.features"), href: ROUTES.product[language] },
      { label: t("nav.pricing"), href: ROUTES.pricing[language] },
      { label: t("footer.useCases"), href: `${ROUTES.product[language]}#use-cases` },
    ],
    company: [
      { label: t("nav.about"), href: ROUTES.about[language] },
      { label: t("nav.contact"), href: ROUTES.contact[language] },
    ],
  };

  return (
    <footer className="border-t border-border bg-surface-subtle">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={ROUTES.home[language]} className="inline-block">
              <img
                src={theme === "dark" ? logoDark : logoLight}
                alt="Omnyo"
                className="brand-logo shrink-0"
                width={327}
                height={108}
                decoding="async"
              />
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.productLinks")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.companyLinks")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {t("common.copyrightNotice")}
          </p>
        </div>
      </div>
    </footer>
  );
}
