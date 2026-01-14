import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Bell, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard, StepCard } from "@/components/ui/feature-card";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Calendar,
    title: "Visual Schedule Builder",
    description: "Create weekly or monthly schedules per location and role in minutes. Drag, drop, and done.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Sick leave, time off, shift swaps—employees are notified immediately. No more phone calls.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Scheduling",
    description: "Smart suggestions based on business needs, employee preferences, and availability.",
  },
  {
    icon: Users,
    title: "Employee Hub",
    description: "One place for schedules, updates, and announcements. Always accessible on mobile.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Last-minute changes? The system regenerates optimized schedules automatically.",
  },
  {
    icon: Shield,
    title: "Fair & Transparent",
    description: "Balance workloads fairly. Employees submit preferences, managers stay in control.",
  },
];

const steps = [
  {
    title: "Set up your locations and roles",
    description: "Add your business locations, define roles, and invite your team. Takes about 5 minutes.",
  },
  {
    title: "Create your first schedule",
    description: "Use our visual builder or let AI generate a schedule based on your requirements.",
  },
  {
    title: "Your team stays in sync",
    description: "Everyone sees the latest schedule on their phone. Changes push instantly.",
  },
];

const industries = [
  {
    name: "Hospitality",
    description: "Cafés, restaurants, hotels, and bars",
    icon: "☕",
  },
  {
    name: "Retail",
    description: "Shops, boutiques, and chain stores",
    icon: "🛍️",
  },
  {
    name: "Logistics",
    description: "Warehouses, delivery, and distribution",
    icon: "📦",
  },
];

const faqs = [
  {
    question: "How is Omnyo different from a spreadsheet?",
    answer: "Spreadsheets require manual updates, endless back-and-forth messages, and don't notify anyone when things change. Omnyo automates notifications, suggests optimal schedules, and gives everyone a single source of truth on their phone.",
  },
  {
    question: "Do employees need to download an app?",
    answer: "Omnyo works as a mobile web app, so employees can access it from any smartphone browser. We also offer native apps for the best experience.",
  },
  {
    question: "How does AI-assisted scheduling work?",
    answer: "Our AI considers your business needs (opening hours, expected traffic, required roles) and employee preferences (availability, max hours) to suggest balanced, efficient schedules. You always have final approval.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and follow best practices for data protection. Your schedule and employee data is never shared or sold.",
  },
  {
    question: "What's included in the pilot program?",
    answer: "Early access includes all core features: schedule builder, notifications, employee app, and AI suggestions. We'll also provide dedicated onboarding support.",
  },
];

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Omnyo — Modern Shift Management for Growing Teams</title>
        <meta
          name="description"
          content="Replace spreadsheets, paper schedules, and WhatsApp chaos with Omnyo. A smart, mobile-first shift management system for hospitality, retail, and logistics."
        />
        <meta property="og:title" content="Omnyo — Modern Shift Management" />
        <meta property="og:description" content={siteConfig.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
            Now accepting early access applications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Stop scheduling chaos.{" "}
            <span className="text-primary">Start running shifts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {siteConfig.tagline}. Replace spreadsheets, paper schedules, and WhatsApp groups with one smart system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Early Access
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="hero-outline" size="xl">
                See How It Works
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
                <span className="text-lg">{industry.icon}</span>
                <span>Built for {industry.name}</span>
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
          title="Sound familiar?"
          subtitle="If you're still using Excel, paper schedules, or group chats to manage shifts, you know the pain."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { emoji: "📊", text: "Hours spent updating spreadsheets every week" },
            { emoji: "📱", text: "Endless WhatsApp messages about schedule changes" },
            { emoji: "📞", text: "Phone calls for every sick day and swap request" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
            >
              <span className="text-3xl">{item.emoji}</span>
              <p className="text-lg text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <SectionHeader
          title="Everything you need to run shifts smoothly"
          subtitle="One platform for scheduling, communication, and team coordination."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>
      </Section>

      {/* How it Works Section */}
      <Section variant="muted">
        <SectionHeader title="Up and running in 3 steps" />
        <div className="mx-auto max-w-xl">
          {steps.map((step, i) => (
            <StepCard key={step.title} number={i + 1} {...step} delay={i * 0.15} />
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <SectionHeader
          title="Built for teams that work in shifts"
          subtitle="From a single café to a multi-location retail chain."
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
              <span className="mb-4 block text-5xl">{industry.icon}</span>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <SectionHeader title="Frequently asked questions" />
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
            Ready to simplify your scheduling?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our early access program and be among the first to experience stress-free shift management.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm variant="hero" />
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
