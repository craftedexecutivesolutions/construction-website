import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundColor?: "coral" | "primary" | "muted";
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundColor = "coral",
}: CTASectionProps) {
  const bgClass = backgroundColor === "coral" 
    ? "bg-gradient-to-r from-[#FF6B4A] to-[#FF8566]" 
    : backgroundColor === "primary"
    ? "bg-primary"
    : "bg-muted";

  const textClass = backgroundColor === "muted" ? "text-foreground" : "text-white";

  return (
    <div className={`${bgClass} py-16 md:py-20`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${textClass}`}>
          {title}
        </h2>
        <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${backgroundColor === "muted" ? "text-muted-foreground" : "text-white/90"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonLink} data-testid="button-cta-primary">
            <Button
              size="lg"
              className={backgroundColor === "muted" ? "bg-primary hover:bg-primary text-primary-foreground" : "bg-white text-[#FF6B4A] hover:bg-white/90"}
            >
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link href={secondaryButtonLink} data-testid="button-cta-secondary">
              <Button
                size="lg"
                variant="outline"
                className={backgroundColor === "muted" ? "border-border hover:bg-accent" : "border-white/30 text-white hover:bg-white/20 hover:text-white"}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
