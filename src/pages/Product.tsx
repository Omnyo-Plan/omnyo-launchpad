import { motion } from "framer-motion";
import { Calendar, Users, Bell, Sparkles, ArrowRight, Smartphone, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function Product() {
  const { t, language } = useLanguage();

  const managerFeatures = [
    {
      icon: Calendar,
      title: t("product.managerFeatures.visualBuilder.title"),
      description: t("product.managerFeatures.visualBuilder.description"),
    },
    {
      icon: RefreshCw,
      title: t("product.managerFeatures.smartRegeneration.title"),
      description: t("product.managerFeatures.smartRegeneration.description"),
    },
    {
      icon: Bell,
      title: t("product.managerFeatures.automatedNotifications.title"),
      description: t("product.managerFeatures.automatedNotifications.description"),
    },
  ];

  const employeeFeatures = [
    {
      icon: Smartphone,
      title: t("product.employeeFeatures.mobileAccess.title"),
      description: t("product.employeeFeatures.mobileAccess.description"),
    },
    {
      icon: Bell,
      title: t("product.employeeFeatures.instantUpdates.title"),
      description: t("product.employeeFeatures.instantUpdates.description"),
    },
    {
      icon: Calendar,
      title: t("product.employeeFeatures.submitAvailability.title"),
      description: t("product.employeeFeatures.submitAvailability.description"),
    },
    {
      icon: Users,
      title: t("product.employeeFeatures.teamAnnouncements.title"),
      description: t("product.employeeFeatures.teamAnnouncements.description"),
    },
  ];

  const aiFeatures = [
    {
      title: t("product.aiFeatures.understands.title"),
      description: t("product.aiFeatures.understands.description"),
    },
    {
      title: t("product.aiFeatures.respects.title"),
      description: t("product.aiFeatures.respects.description"),
    },
    {
      title: t("product.aiFeatures.optimizes.title"),
      description: t("product.aiFeatures.optimizes.description"),
    },
    {
      title: t("product.aiFeatures.adapts.title"),
      description: t("product.aiFeatures.adapts.description"),
    },
  ];

  const metaTitle = language === "en"
    ? "Product — How Omnyo Works | Shift Management Features"
    : "Προϊόν — Πώς Λειτουργεί το Omnyo | Χαρακτηριστικά Διαχείρισης Βαρδιών";

  const metaDescription = language === "en"
    ? "Discover how Omnyo simplifies shift scheduling for managers and employees. Visual builder, real-time notifications, and mobile access."
    : "Ανακαλύψτε πώς το Omnyo απλοποιεί τον προγραμματισμό βαρδιών για διευθυντές και εργαζόμενους. Οπτικός δημιουργός, ειδοποιήσεις σε πραγματικό χρόνο και πρόσβαση από κινητό.";

  const days = language === "en" 
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"];

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/product`} />
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
            {t("product.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("product.heroSubtitle")}
          </p>
        </motion.div>
      </Section>

      {/* Manager Experience */}
      <Section>
        <SectionHeader
          title={t("product.forManagers")}
          subtitle={t("product.forManagersSubtitle")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {managerFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>

        {/* Mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-sm text-muted-foreground">{t("product.mockup.scheduleBuilder")}</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {days.map((day) => (
                  <div key={day} className="py-2 font-medium text-muted-foreground">{day}</div>
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="min-h-[120px] rounded-lg border border-border bg-background p-2">
                    <div className="mb-2 text-xs text-muted-foreground">{20 + i}</div>
                    {i < 5 && (
                      <>
                        <div className="mb-1 rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                          {i % 2 === 0 ? "Sarah 9-5" : "Mike 9-5"}
                        </div>
                        <div className="rounded bg-secondary/50 px-2 py-1 text-xs text-secondary-foreground">
                          {i % 2 === 0 ? "Tom 2-10" : "Ana 2-10"}
                        </div>
                      </>
                    )}
                    {i >= 5 && (
                      <div className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                        {i === 5 ? "Team A" : "Team B"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Employee Experience */}
      <Section variant="muted">
        <SectionHeader
          title={t("product.forEmployees")}
          subtitle={t("product.forEmployeesSubtitle")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {employeeFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="w-[280px] rounded-[40px] border-8 border-foreground/10 bg-card p-2 shadow-xl">
            <div className="rounded-[32px] bg-background p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold text-foreground">{t("product.mockup.mySchedule")}</span>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <div className="text-xs text-muted-foreground">{t("product.mockup.today")}</div>
                  <div className="mt-1 font-medium text-foreground">2:00 PM – 10:00 PM</div>
                  <div className="text-sm text-muted-foreground">Main Store • Cashier</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="text-xs text-muted-foreground">{t("product.mockup.tomorrow")}</div>
                  <div className="mt-1 font-medium text-foreground">9:00 AM – 5:00 PM</div>
                  <div className="text-sm text-muted-foreground">Main Store • Floor</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="text-xs text-muted-foreground">{t("product.mockup.wednesday")}</div>
                  <div className="mt-1 font-medium text-foreground">{t("product.mockup.dayOff")}</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-primary/5 p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Bell className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{t("product.mockup.teamMeeting")}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* AI Section */}
      <Section>
        <SectionHeader
          title={t("product.aiTitle")}
          subtitle={t("product.aiSubtitle")}
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 text-center"
          >
            <p className="text-muted-foreground">
              <strong className="text-foreground">{language === "en" ? "Note:" : "Σημείωση:"}</strong> {t("product.aiNote")}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Real-time Section */}
      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <RefreshCw className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("product.realtimeTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("product.realtimeSubtitle")}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("product.ctaTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("product.ctaSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("common.requestEarlyAccess")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="xl">
                {t("common.viewPricing")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
