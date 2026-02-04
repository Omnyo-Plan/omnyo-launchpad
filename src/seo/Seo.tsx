import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import { SEO_CONFIG, ROUTES, RouteId } from "@/seo/seo.config";
import { buildAbsoluteUrl, LANGUAGE_TAGS, OG_LOCALES } from "@/seo/seo.utils";

const THEME_COLOR = "#F88B24";
const LOGO_PATH = "/brand/omnyo-logo.png";

type SeoProps = {
  routeId: RouteId;
};

export function Seo({ routeId }: SeoProps) {
  const { language } = useLanguage();
  const entry = SEO_CONFIG[routeId][language];
  const canonicalUrl = buildAbsoluteUrl(entry.canonicalPath);
  const ogImageUrl = buildAbsoluteUrl(entry.ogImage);
  const twitterImageUrl = buildAbsoluteUrl(entry.twitterImage);
  const siteUrl = buildAbsoluteUrl("/");
  const logoUrl = buildAbsoluteUrl(LOGO_PATH);
  const isIndexable = entry.robots?.index !== false;

  const robotsDirectives = buildRobotsDirectives(entry.robots);
  const hreflangLinks = buildHreflangLinks(routeId);
  const structuredData = buildStructuredData(
    routeId,
    language,
    canonicalUrl,
    siteUrl,
    logoUrl,
    entry.description,
  );

  const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
  const bingVerification = import.meta.env.VITE_BING_SITE_VERIFICATION;

  const alternateLocale = language === "en" ? "el_GR" : "en_US";

  return (
    <Helmet htmlAttributes={{ lang: LANGUAGE_TAGS[language] }}>
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={canonicalUrl} />

      {isIndexable &&
        hreflangLinks.map((link) => (
          <link
            key={link.hrefLang}
            rel="alternate"
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}

      <meta name="robots" content={robotsDirectives} />
      <meta name="googlebot" content={robotsDirectives} />
      <meta name="bingbot" content={robotsDirectives} />
      <meta
        name="theme-color"
        content={THEME_COLOR}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={THEME_COLOR}
        media="(prefers-color-scheme: dark)"
      />

      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
      {bingVerification && (
        <meta name="msvalidate.01" content={bingVerification} />
      )}

      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={entry.ogTitle} />
      <meta property="og:description" content={entry.ogDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={entry.ogImageAlt} />
      <meta property="og:image:width" content={String(entry.ogImageWidth)} />
      <meta property="og:image:height" content={String(entry.ogImageHeight)} />
      <meta property="og:locale" content={OG_LOCALES[language]} />
      {isIndexable && (
        <meta property="og:locale:alternate" content={alternateLocale} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={entry.twitterTitle} />
      <meta name="twitter:description" content={entry.twitterDescription} />
      <meta name="twitter:image" content={twitterImageUrl} />

      {structuredData.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

function buildRobotsDirectives(directives?: {
  index?: boolean;
  follow?: boolean;
  maxImagePreview?: "large" | "standard" | "none";
  maxSnippet?: number;
  maxVideoPreview?: number;
}) {
  const index = directives?.index !== false;
  const follow = directives?.follow !== false;
  const parts = [index ? "index" : "noindex", follow ? "follow" : "nofollow"];

  if (index) {
    parts.push(`max-image-preview:${directives?.maxImagePreview ?? "large"}`);
    parts.push(`max-snippet:${directives?.maxSnippet ?? -1}`);
    parts.push(`max-video-preview:${directives?.maxVideoPreview ?? -1}`);
  }

  return parts.join(", ");
}

function buildHreflangLinks(routeId: RouteId) {
  const route = ROUTES[routeId];
  return [
    { hrefLang: "en", href: buildAbsoluteUrl(route.en) },
    { hrefLang: "el", href: buildAbsoluteUrl(route.gr) },
    { hrefLang: "x-default", href: buildAbsoluteUrl(route.en) },
  ];
}

function buildStructuredData(
  routeId: RouteId,
  language: "en" | "gr",
  canonicalUrl: string,
  siteUrl: string,
  logoUrl: string,
  description: string,
) {
  const schemas: Record<string, unknown>[] = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    logo: logoUrl,
    description: siteConfig.description,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: LANGUAGE_TAGS[language],
  });

  const entry = SEO_CONFIG[routeId][language];
  const structuredData = entry.structuredData ?? [];

  if (structuredData.includes("breadcrumbs") && routeId !== "home") {
    const homeLabel = SEO_CONFIG.home[language].breadcrumbs ?? "Home";
    const currentLabel = entry.breadcrumbs ?? entry.title;
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: buildAbsoluteUrl(ROUTES.home[language]),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: currentLabel,
          item: canonicalUrl,
        },
      ],
    });
  }

  if (structuredData.includes("softwareApplication") && routeId === "product") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      url: canonicalUrl,
    });
  }

  return schemas;
}
