import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border bg-muted/50 p-0.5",
        className,
      )}
      role="radiogroup"
      aria-label="Select language"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={cn(
          "h-7 px-2.5 text-xs font-medium transition-all",
          language === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent",
        )}
        role="radio"
        aria-checked={language === "en"}
        aria-label="English"
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("gr")}
        className={cn(
          "h-7 px-2.5 text-xs font-medium transition-all",
          language === "gr"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent",
        )}
        role="radio"
        aria-checked={language === "gr"}
        aria-label="Greek"
      >
        GR
      </Button>
    </div>
  );
}
