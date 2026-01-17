import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const teamSizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const roles = [
  "Owner / Founder",
  "Operations Manager",
  "HR Manager",
  "Store / Location Manager",
  "Other",
];

export function ContactForm() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name) {
      toast.error(t("contact.form.error"));
      return;
    }

    if (!hcaptchaToken) {
      toast.error("Please complete the captcha verification");
      return;
    }

    setIsLoading(true);

    try {
      // Send email notification via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          "h-captcha-response": hcaptchaToken,
          from_name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          role: formData.role || "Not provided",
          team_size: formData.teamSize || "Not provided",
          message: formData.message || "No message",
          subject: `Νέα επικοινωνία από ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message);

      setIsSuccess(true);
      toast.success(t("contact.form.success"));
      // Reset hCaptcha after successful submission
      hcaptchaRef.current?.resetCaptcha();
      setHcaptchaToken(null);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(t("contact.form.error"));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-foreground">{t("contact.form.success")}</h3>
        <p className="text-muted-foreground">
          {t("contact.responseTimeText")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            {t("contact.form.name")} <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            placeholder={t("contact.form.namePlaceholder")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            {t("contact.form.email")} <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">{t("contact.form.company")}</Label>
          <Input
            id="company"
            placeholder={t("contact.form.companyPlaceholder")}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">{t("contact.form.role")}</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => setFormData({ ...formData, role: value })}
          >
            <SelectTrigger id="role" aria-label={t("contact.form.rolePlaceholder")}>
              <SelectValue placeholder={t("contact.form.rolePlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="teamSize">{t("contact.form.teamSize")}</Label>
        <Select
          value={formData.teamSize}
          onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
        >
          <SelectTrigger id="teamSize" aria-label={t("contact.form.teamSizePlaceholder")}>
            <SelectValue placeholder={t("contact.form.teamSizePlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            {teamSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          placeholder={t("contact.form.messagePlaceholder")}
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="resize-none"
        />
      </div>

      <div className="flex justify-center">
        <HCaptcha
          ref={hcaptchaRef}
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={(token) => setHcaptchaToken(token)}
          onExpire={() => setHcaptchaToken(null)}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" disabled={isLoading} className="w-full">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {t("contact.form.submit")}
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
