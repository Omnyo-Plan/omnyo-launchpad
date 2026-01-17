import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Bell, Clock, Shield, Table2, MessageSquare, Phone, Coffee, ShoppingBag, Package, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, StepCard } from "@/components/ui/feature-card";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Calendar,
      title: t("home.features.visualBuilder.title"),
      description: t("home.features.visualBuilder.description"),
    },
    {
      icon: Bell,
      title: t("home.features.notifications.title"),
      description: t("home.features.notifications.description"),
    },
    {
      icon: Users,
      title: t("home.features.employeeHub.title"),
      description: t("home.features.employeeHub.description"),
    },
    {
      icon: Clock,
      title: t("home.features.realtime.title"),
      description: t("home.features.realtime.description"),
    },
    {
      icon: Shield,
      title: t("home.features.fair.title"),
      description: t("home.features.fair.description"),
    },
  ];

  const steps = [
    {
      title: t("home.steps.step1.title"),
      description: t("home.steps.step1.description"),
    },
    {
      title: t("home.steps.step2.title"),
      description: t("home.steps.step2.description"),
    },
    {
      title: t("home.steps.step3.title"),
      description: t("home.steps.step3.description"),
    },
  ];

  const industries: { name: string; description: string; icon: LucideIcon }[] = [
    {
      name: t("home.industries.hospitality.name"),
      description: t("home.industries.hospitality.description"),
      icon: Coffee,
    },
    {
      name: t("home.industries.retail.name"),
      description: t("home.industries.retail.description"),
      icon: ShoppingBag,
    },
    {
      name: t("home.industries.logistics.name"),
      description: t("home.industries.logistics.description"),
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: t("home.faqs.spreadsheet.question"),
      answer: t("home.faqs.spreadsheet.answer"),
    },
    {
      question: t("home.faqs.aiScheduling.question"),
      answer: t("home.faqs.aiScheduling.answer"),
    },
    {
      question: t("home.faqs.security.question"),
      answer: t("home.faqs.security.answer"),
    },
    {
      question: t("home.faqs.pilot.question"),
      answer: t("home.faqs.pilot.answer"),
    },
  ];

  const painPoints: { icon: LucideIcon; text: string }[] = [
    { icon: Table2, text: t("home.painPoints.spreadsheets") },
    { icon: MessageSquare, text: t("home.painPoints.whatsapp") },
    { icon: Phone, text: t("home.painPoints.phoneCalls") },
  ];

  const metaTitle = language === "en" 
    ? "Omnyo - Modern Shift Management for Growing Teams"
    : "Omnyo - Σύγχρονη Διαχείριση Βαρδιών για Αναπτυσσόμενες Ομάδες";
  
  const metaDescription = language === "en"
    ? "Replace spreadsheets, paper schedules, and WhatsApp chaos with Omnyo. A smart, mobile-first shift management system for hospitality, retail, and logistics."
    : "Αντικαταστήστε υπολογιστικά φύλλα, χάρτινα προγράμματα και χάος WhatsApp με το Omnyo. Ένα έξυπνο σύστημα διαχείρισης βαρδιών για φιλοξενία, λιανική και logistics.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={`${siteConfig.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${siteConfig.url}/og-image.png`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Omnyo",
            description: siteConfig.description,
            url: siteConfig.url,
            sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
            industry: "Software Development",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Section variant="hero" className="relative overflow-hidden pt-12 md:pt-20">
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            {t("home.heroTag")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t("home.heroTitle")}{" "}
            <span className="text-primary">{t("home.heroTitleHighlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {t("home.heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("nav.getEarlyAccess")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="hero-outline" size="xl">
                {t("common.seeHowItWorks")}
              </Button>
            </Link>
          </motion.div>

          {/* Social proof style without fake logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 backdrop-blur-sm"
              >
                <industry.icon className="h-5 w-5 text-primary" />
                <span>{t("home.builtFor")} {industry.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </Section>

      {/* Problem Section */}
      <Section variant="muted">
        <SectionHeader
          title={t("home.soundFamiliar")}
          subtitle={t("home.soundFamiliarSubtitle")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
            >
              <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
              <p className="text-lg text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <SectionHeader
          title={t("home.featuresTitle")}
          subtitle={t("home.featuresSubtitle")}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>
      </Section>

      {/* How it Works Section */}
      <Section variant="muted">
        <SectionHeader title={t("home.stepsTitle")} />
        <div className="mx-auto max-w-xl">
          {steps.map((step, i) => (
            <StepCard key={step.title} number={i + 1} {...step} delay={i * 0.15} />
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <SectionHeader
          title={t("home.industriesTitle")}
          subtitle={t("home.industriesSubtitle")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
            >
              <industry.icon className="mb-4 mx-auto h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <SectionHeader title={t("home.faqTitle")} />
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("home.ctaTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("home.ctaSubtitle")}
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm variant="hero" />
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
