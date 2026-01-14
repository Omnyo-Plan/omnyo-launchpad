import { motion } from "framer-motion";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const values = [
  {
    title: "Simplicity First",
    description: "We believe great software should feel effortless. Every feature we build starts with the question: 'Is there a simpler way?'",
  },
  {
    title: "Fairness Built In",
    description: "Scheduling affects people's lives. Our tools are designed to balance business needs with employee wellbeing and preferences.",
  },
  {
    title: "Mobile-Native",
    description: "Work happens everywhere. Omnyo is built from the ground up for mobile—not adapted from desktop as an afterthought.",
  },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About — Our Mission | Omnyo</title>
        <meta
          name="description"
          content="Learn about Omnyo's mission to modernize shift scheduling for businesses that run on shifts. Our values: simplicity, fairness, and mobile-first design."
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
            Building the future of shift work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We're on a mission to replace the spreadsheet-and-WhatsApp chaos with software that actually works for everyone.
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
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                We've seen it firsthand: managers spending hours every week updating Excel spreadsheets, 
                taking photos of paper schedules, and fielding endless phone calls about shift changes. 
                Meanwhile, employees scroll through chaotic group chats trying to figure out when they work.
              </p>
              <p>
                There had to be a better way.
              </p>
              <p>
                Omnyo started with a simple idea: what if scheduling was as easy as it should be? 
                What if managers could create schedules in minutes instead of hours? What if employees 
                always knew exactly when and where they work, without having to ask?
              </p>
              <p>
                We're building Omnyo to answer those questions. A modern, mobile-first platform that 
                brings clarity to the chaos of shift-based work.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <SectionHeader
          title="What we believe"
          subtitle="The principles that guide everything we build."
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
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Follow our journey</h2>
            <p className="mt-4 text-muted-foreground">
              Stay up to date with product updates, company news, and insights about the future of work.
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
            Want to be part of the journey?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're looking for early adopters who want to help shape the future of shift scheduling.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Join Early Access
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
