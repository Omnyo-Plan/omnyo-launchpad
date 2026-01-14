import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/ContactForm";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";

const CONTACT_EMAIL = "contact@myomnio.com";

export default function Contact() {
  const { t, language } = useLanguage();

  const metaTitle = language === "en"
    ? "Contact — Get in Touch | Omnyo"
    : "Επικοινωνία — Επικοινωνήστε Μαζί Μας | Omnyo";

  const metaDescription = language === "en"
    ? "Contact Omnyo to learn more about our shift management platform or join our early access waitlist."
    : "Επικοινωνήστε με το Omnyo για να μάθετε περισσότερα για την πλατφόρμα διαχείρισης βαρδιών ή εγγραφείτε στη λίστα αναμονής πρόωρης πρόσβασης.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/contact`} />
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
            {t("contact.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("contact.heroSubtitle")}
          </p>
        </motion.div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">{t("contact.sendMessage")}</h2>
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {t("contact.justWantUpdates")}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {t("contact.joinWaitlistText")}
                  </p>
                  <WaitlistForm />
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {t("contact.otherWays")}
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{CONTACT_EMAIL}</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {t("contact.responseTime")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.responseTimeText")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
