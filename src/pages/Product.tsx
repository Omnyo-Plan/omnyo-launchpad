import { motion } from "framer-motion";
import { Calendar, Users, Bell, Sparkles, ArrowRight, Smartphone, RefreshCw, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";

const managerFeatures = [
  {
    icon: Calendar,
    title: "Visual Schedule Builder",
    description: "Create weekly or monthly schedules per location and role. Drag-and-drop interface makes planning intuitive.",
  },
  {
    icon: RefreshCw,
    title: "Smart Regeneration",
    description: "Last-minute sick call? The system suggests alternatives and regenerates optimized schedules automatically.",
  },
  {
    icon: BarChart3,
    title: "Coverage Insights",
    description: "See at a glance if you have gaps or overstaffing. Catch issues before they become problems.",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Schedule changes, shift reminders, and approvals are sent automatically. No more manual follow-ups.",
  },
];

const employeeFeatures = [
  {
    icon: Smartphone,
    title: "Always-On Mobile Access",
    description: "See your schedule anytime, anywhere. No more checking photos of paper schedules in WhatsApp.",
  },
  {
    icon: Bell,
    title: "Instant Updates",
    description: "Get notified immediately when your schedule changes. Never miss a shift or show up on the wrong day.",
  },
  {
    icon: Calendar,
    title: "Submit Availability",
    description: "Share your preferences and availability. Managers can factor in your needs when creating schedules.",
  },
  {
    icon: Users,
    title: "Team Announcements",
    description: "Important updates, meetings, and company news—all in one place. No more scattered group chats.",
  },
];

const aiFeatures = [
  {
    title: "Understands Your Business",
    description: "Our AI considers opening hours, expected customer traffic, and required roles for each shift.",
  },
  {
    title: "Respects Employee Preferences",
    description: "Availability windows, maximum hours, and time-off requests are automatically factored in.",
  },
  {
    title: "Optimizes for Fairness",
    description: "Balances workloads so no one is overworked or underutilized. Transparent and equitable.",
  },
  {
    title: "Adapts to Changes",
    description: "When things change, AI suggests new arrangements without starting from scratch.",
  },
];

export default function Product() {
  return (
    <Layout>
      <Helmet>
        <title>Product — How Omnyo Works | Shift Management Features</title>
        <meta
          name="description"
          content="Discover how Omnyo simplifies shift scheduling for managers and employees. Visual builder, AI suggestions, real-time notifications, and mobile access."
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
            Built for the way you actually work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Omnyo combines intuitive scheduling tools with smart automation. Managers save time, employees stay informed, and everyone stays in sync.
          </p>
        </motion.div>
      </Section>

      {/* Manager Experience */}
      <Section>
        <SectionHeader
          title="For Managers"
          subtitle="Create, adjust, and communicate schedules in minutes—not hours."
        />
        <div className="grid gap-6 md:grid-cols-2">
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
              <span className="ml-4 text-sm text-muted-foreground">Schedule Builder — Week of Jan 20</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
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
          title="For Employees"
          subtitle="Your personal hub for schedules, updates, and team communication."
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
                <span className="font-semibold text-foreground">My Schedule</span>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <div className="text-xs text-muted-foreground">Today</div>
                  <div className="mt-1 font-medium text-foreground">2:00 PM – 10:00 PM</div>
                  <div className="text-sm text-muted-foreground">Main Store • Cashier</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="text-xs text-muted-foreground">Tomorrow</div>
                  <div className="mt-1 font-medium text-foreground">9:00 AM – 5:00 PM</div>
                  <div className="text-sm text-muted-foreground">Main Store • Floor</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="text-xs text-muted-foreground">Wednesday</div>
                  <div className="mt-1 font-medium text-foreground">Day Off</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-primary/5 p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Bell className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Team meeting Thursday 9 AM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* AI Section */}
      <Section>
        <SectionHeader
          title="AI-Assisted Scheduling"
          subtitle="Let smart automation handle the complexity while you stay in control."
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
              <strong className="text-foreground">Note:</strong> AI suggestions are always optional. You review and approve every schedule before it's published to your team.
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
              Real-Time Everything
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              When schedules change, everyone knows immediately. No more phone trees, no more "did you see my message?" Follow-up calls become a thing of the past.
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
            See Omnyo in action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get early access and discover how simple scheduling can be.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request Early Access
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="xl">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
