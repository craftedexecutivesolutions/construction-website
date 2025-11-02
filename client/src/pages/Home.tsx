import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import { Building, Home as HomeIcon, Landmark, Palmtree, Users, FileCheck, Handshake } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_construction_workers_tropical_0c4b0f45.png";
import commercialImage from "@assets/generated_images/Commercial_building_tropical_palms_7d7d8ac8.png";
import residentialImage from "@assets/generated_images/Modern_island_home_ocean_ed434fed.png";
import schoolImage from "@assets/generated_images/School_building_playground_tropical_a27fae50.png";
import resortImage from "@assets/generated_images/Completed_resort_hotel_tropical_e8ee713a.png";
import constructionSiteImage from "@assets/generated_images/Construction_site_overview_tropical_2ba6d7f9.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      icon: Palmtree,
      emoji: "🏝️",
      title: "Island Expertise",
      description: "We understand CNMI's unique climate, building codes, and typhoon requirements"
    },
    {
      icon: Users,
      emoji: "👷",
      title: "Local Team",
      description: "100% locally-based crew who understand island culture and community"
    },
    {
      icon: FileCheck,
      emoji: "📋",
      title: "Fully Licensed",
      description: "CNMI General Contractor License, Federal contractor registration, bonded & insured"
    },
    {
      icon: Handshake,
      emoji: "🤝",
      title: "On Time, On Budget",
      description: "Track record of completing projects on schedule and within budget"
    }
  ];

  return (
    <>
      <Hero
        image={heroImage}
        title="CNMI's Trusted General Contractor Since 1998"
        subtitle="From Saipan to Tinian to Rota - Building Excellence Across the Northern Marianas"
        showCTA={true}
      />
      
      <TrustBar />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Complete Construction Solutions for the Northern Marianas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={Building}
              image={commercialImage}
              title="Commercial Construction"
              description="Hotels, resorts, retail spaces, and office buildings built to withstand island weather"
              link="/services"
            />
            <ServiceCard
              icon={HomeIcon}
              image={residentialImage}
              title="Residential Construction"
              description="Custom homes and multi-family housing designed for island living"
              link="/services"
            />
            <ServiceCard
              icon={Landmark}
              image={schoolImage}
              title="Government Contracts"
              description="Qualified contractor for federal, CNMI, and municipal projects"
              link="/services"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Recent Projects Across CNMI
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              image={resortImage}
              title="Coral Bay Resort Renovation - Saipan"
              stats="$2.3M | 8 Months | 2024"
            />
            <ProjectCard
              image={schoolImage}
              title="Kagman Elementary Expansion - Saipan"
              stats="$1.8M | 12 Months | 2023"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" data-testid="button-view-all-projects">
              <Button size="lg" className="bg-primary hover:bg-primary text-primary-foreground">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Why Pacific Stone Builders?" 
        features={features}
        backgroundImage={constructionSiteImage}
      />

      <CTASection
        title="Ready to Start Your Project?"
        description="Whether it's a custom home, commercial building, or government contract, Pacific Stone Builders delivers quality construction across the CNMI."
        primaryButtonText="Get a Free Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (670) 234-5678"
        secondaryButtonLink="tel:6702345678"
      />
    </>
  );
}
