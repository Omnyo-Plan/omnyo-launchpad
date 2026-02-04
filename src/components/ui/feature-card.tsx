import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover md:p-8",
        className,
      )}
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({
  number,
  title,
  description,
  delay = 0,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
          {number}
        </div>
        {number < 3 && <div className="mt-4 h-full w-px bg-border" />}
      </div>
      <div className="pb-12">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
