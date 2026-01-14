import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/ContactForm";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Contact — Get in Touch | Omnyo</title>
        <meta
          name="description"
          content="Contact Omnyo to learn more about our shift management platform or join our early access waitlist."
        />
      </Helmet>

      {/* Hero */}
      <Section variant="hero" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Let's talk
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Whether you want to join our pilot program or just have questions, we'd love to hear from you.
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
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a message</h2>
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
                    Just want updates?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Join our waitlist for early access and product updates.
                  </p>
                  <WaitlistForm />
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Other ways to reach us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@omnyo.com"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-5 w-5" />
                      <span>hello@omnyo.com</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Response time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours on business days.
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
