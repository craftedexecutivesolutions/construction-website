import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { CheckCircle2, Building, Home, Landmark } from "lucide-react";
import { Link } from "wouter";
import constructionSiteImage from "@assets/generated_images/Construction_site_overview_tropical_2ba6d7f9.png";
import commercialImage from "@assets/generated_images/Commercial_building_tropical_palms_7d7d8ac8.png";
import residentialImage from "@assets/generated_images/Modern_island_home_ocean_ed434fed.png";
import schoolImage from "@assets/generated_images/School_building_playground_tropical_a27fae50.png";

export default function Services() {
  return (
    <>
      <Hero
        image={constructionSiteImage}
        title="Comprehensive Construction Services"
        subtitle="From concept to completion, we handle every phase of your project"
        height="normal"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Full-Service Construction for the Northern Marianas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're planning a commercial development, residential project, or government facility, Pacific Stone Builders has the expertise, equipment, and local knowledge to bring your vision to life. We handle projects of all sizes across Saipan, Tinian, and Rota.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Building className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold text-primary">Commercial Construction</span>
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4">
                Built for Island Business
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in building hotels, resorts, retail centers, office buildings, and restaurants that can withstand CNMI's tropical climate and typhoon conditions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Hotels & resorts</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Retail spaces & shopping centers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Office buildings</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Restaurants & entertainment venues</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Warehouses & industrial facilities</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand the unique requirements of commercial projects in the islands - from typhoon-resistant design to working with imported materials and managing maritime shipping logistics.
              </p>
              <Link href="/contact" data-testid="button-commercial-quote">
                <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground">
                  Request Commercial Quote
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={commercialImage}
                alt="Commercial construction"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#E8DCC4]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={residentialImage}
                alt="Residential construction"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Home className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold text-primary">Residential Construction</span>
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4">
                Island Living Perfected
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From custom single-family homes to multi-family developments, we build island residences designed for comfort, durability, and tropical living.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom home design-build</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Multi-family housing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Townhomes & condominiums</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Home additions & expansions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Kitchen & bathroom renovations</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every home we build features typhoon-resistant construction, premium island-appropriate materials, and designs that maximize natural ventilation and ocean views.
              </p>
              <Link href="/contact" data-testid="button-residential-quote">
                <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground">
                  Request Residential Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Landmark className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold text-primary">Government Contracts</span>
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4">
                Serving the Public Good
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a federally registered contractor, we're qualified to bid on and execute government projects at the federal, CNMI, and municipal levels.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Public schools & educational facilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Government office buildings</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Community centers & public facilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Infrastructure projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Federal facility construction & renovation</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have extensive experience navigating federal procurement processes, Davis-Bacon wage requirements, and government project compliance standards.
              </p>
              <Link href="/contact" data-testid="button-government-quote">
                <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground">
                  Request Government Quote
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={schoolImage}
                alt="Government construction"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation and quote. We're ready to bring your vision to life."
        primaryButtonText="Get a Free Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (670) 234-5678"
        secondaryButtonLink="tel:6702345678"
      />
    </>
  );
}
