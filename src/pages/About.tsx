import { motion } from "framer-motion";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      title: t("about.values.simplicity.title"),
      description: t("about.values.simplicity.description"),
    },
    {
      title: t("about.values.fairness.title"),
      description: t("about.values.fairness.description"),
    },
    {
      title: t("about.values.flexibility.title"),
      description: t("about.values.flexibility.description"),
    },
  ];

  const metaTitle = language === "en"
    ? "About — Our Mission | Omnyo"
    : "Σχετικά — Η Αποστολή Μας | Omnyo";

  const metaDescription = language === "en"
    ? "Learn about Omnyo's mission to modernize shift scheduling for businesses that run on shifts. Our values: simplicity, fairness, and flexibility."
    : "Μάθετε για την αποστολή του Omnyo να εκσυγχρονίσει τον προγραμματισμό βαρδιών για επιχειρήσεις που λειτουργούν με βάρδιες. Οι αξίες μας: απλότητα, δικαιοσύνη και ευελιξία.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/about`} />
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("about.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("about.heroSubtitle")}
          </p>
        </motion.div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t("about.ourStory")}</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>{t("about.storyParagraphs.p1")}</p>
              <p>{t("about.storyParagraphs.p2")}</p>
              <p>{t("about.storyParagraphs.p3")}</p>
              <p>{t("about.storyParagraphs.p4")}</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <SectionHeader
          title={t("about.whatWeBelieve")}
          subtitle={t("about.whatWeBelieveSubtitle")}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t("about.followJourney")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("about.followJourneySubtitle")}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Button>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
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
            {t("about.ctaTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("about.ctaSubtitle")}
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("common.joinEarlyAccess")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
