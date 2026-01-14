import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function Pricing() {
  const { t, language } = useLanguage();

  const pilotIncludes = [
    t("pricing.includes.scheduleBuilder"),
    t("pricing.includes.mobileApp"),
    t("pricing.includes.notifications"),
    t("pricing.includes.onboarding"),
    t("pricing.includes.multiLocation"),
    t("pricing.includes.availability"),
    t("pricing.includes.announcements"),
  ];

  const whoItsFor = [
    t("pricing.whoItsFor.hospitality"),
    t("pricing.whoItsFor.retail"),
    t("pricing.whoItsFor.logistics"),
    t("pricing.whoItsFor.shiftBased"),
  ];

  const metaTitle = language === "en"
    ? "Pricing — Early Access Program | Omnyo"
    : "Τιμολόγηση — Πρόγραμμα Πρόωρης Πρόσβασης | Omnyo";

  const metaDescription = language === "en"
    ? "Join Omnyo's early access pilot program. Full features, dedicated support for early adopters."
    : "Εγγραφείτε στο πιλοτικό πρόγραμμα πρόωρης πρόσβασης του Omnyo. Πλήρη χαρακτηριστικά, αφοσιωμένη υποστήριξη για πρώτους χρήστες.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/pricing`} />
        <meta property="og:image" content={`${siteConfig.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${siteConfig.url}/og-image.png`} />
      </Helmet>

      {/* Hero */}
      <Section variant="hero" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            {t("pricing.tag")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("pricing.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("pricing.heroSubtitle")}
          </p>
        </motion.div>
      </Section>

      {/* Pricing Card */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
          >
            <div className="border-b border-border bg-primary/5 p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground">{t("pricing.pilotProgram")}</h2>
              <p className="mt-2 text-muted-foreground">{t("pricing.fullAccess")}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">{t("common.contactUs")}</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="mb-4 font-semibold text-foreground">{t("pricing.whatsIncluded")}</h3>
              <ul className="space-y-3">
                {pilotIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 block">
                <Button variant="hero" size="xl" className="w-full">
                  {t("common.applyForEarlyAccess")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section variant="muted">
        <SectionHeader
          title={t("pricing.whoIsItFor")}
          subtitle={t("pricing.whoIsItForSubtitle")}
        />
        <div className="mx-auto max-w-2xl">
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {whoItsFor.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* FAQ style */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground">
              {t("pricing.whyEarlyAccess")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("pricing.whyEarlyAccessText")}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("pricing.ctaTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("pricing.ctaSubtitle")}
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("common.contactUs")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
