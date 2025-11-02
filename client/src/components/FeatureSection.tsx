import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  emoji: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  features: Feature[];
  backgroundImage?: string;
}

export default function FeatureSection({ title, features, backgroundImage }: FeatureSectionProps) {
  return (
    <div className="relative py-16 md:py-24">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-primary/85" />
        </>
      )}
      <div className={`container mx-auto px-4 relative z-10 ${backgroundImage ? 'text-white' : ''}`}>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center" data-testid={`feature-${index}`}>
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
              <p className={`leading-relaxed ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
