import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const pilotIncludes = [
  "Full access to schedule builder",
  "Employee mobile app",
  "Real-time notifications",
  "AI-assisted scheduling suggestions",
  "Dedicated onboarding support",
  "Multi-location support",
  "Availability management",
  "Team announcements",
];

const whoItsFor = [
  "Hospitality businesses (cafés, restaurants, hotels)",
  "Retail operations (stores, boutiques, chains)",
  "Logistics and warehousing teams",
  "Any business with 5+ shift-based employees",
];

export default function Pricing() {
  return (
    <Layout>
      <Helmet>
        <title>Pricing — Early Access Program | Omnyo</title>
        <meta
          name="description"
          content="Join Omnyo's early access pilot program. Full features, dedicated support, and preferential pricing for early adopters."
        />
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
            Early Access Program
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Join our pilot program
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We're working closely with early adopters to build the best shift management platform. Join us and help shape the future of Omnyo.
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
              <h2 className="text-2xl font-bold text-foreground">Pilot Program</h2>
              <p className="mt-2 text-muted-foreground">Full access for early adopters</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">Contact Us</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Preferential pricing for pilot participants
                </p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="mb-4 font-semibold text-foreground">What's included:</h3>
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
                  Apply for Early Access
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
          title="Who is the pilot program for?"
          subtitle="We're looking for forward-thinking teams ready to modernize their scheduling."
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
              Why early access?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe the best products are built alongside real users. As an early adopter, you'll get direct input into feature development, priority support, and pricing that reflects your partnership in building Omnyo.
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
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's talk about how Omnyo can work for your team.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
