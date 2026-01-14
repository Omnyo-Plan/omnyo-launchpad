import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface WaitlistFormProps {
  variant?: "default" | "hero";
}

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error(t("waitlist.invalidEmail"));
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        email: email.trim(),
        source: "waitlist",
      });

      if (error) throw error;

      setIsSuccess(true);
      setEmail("");
      toast.success(t("waitlist.success"));
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast.error(t("waitlist.error"));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 rounded-lg bg-primary/10 p-4"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-4 w-4" />
        </div>
        <p className="font-medium text-foreground">{t("waitlist.onWaitlist")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
      <Input
        type="email"
        placeholder={t("common.emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 flex-1 bg-background"
        aria-label="Email address"
        required
      />
      <Button
        type="submit"
        variant={variant === "hero" ? "hero" : "default"}
        size="lg"
        disabled={isLoading}
        className="shrink-0"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {t("common.joinWaitlist")}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
