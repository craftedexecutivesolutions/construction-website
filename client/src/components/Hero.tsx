import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
  height?: "normal" | "tall";
}

export default function Hero({ image, title, subtitle, showCTA = false, height = "tall" }: HeroProps) {
  const heightClass = height === "tall" ? "min-h-[600px] md:min-h-[700px]" : "min-h-[400px] md:min-h-[500px]";
  
  return (
    <div className={`relative ${heightClass} flex items-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="button-hero-quote">
                <Button
                  size="lg"
                  className="bg-[#FF6B4A] hover:bg-[#FF6B4A] text-white border border-[#E85539] text-base px-8"
                >
                  Request a Quote
                </Button>
              </Link>
              <Link href="/projects" data-testid="button-hero-projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white text-base px-8"
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
