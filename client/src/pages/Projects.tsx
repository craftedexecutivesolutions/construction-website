import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import resortImage from "@assets/generated_images/Completed_resort_hotel_tropical_e8ee713a.png";
import schoolImage from "@assets/generated_images/School_building_playground_tropical_a27fae50.png";
import commercialImage from "@assets/generated_images/Commercial_building_tropical_palms_7d7d8ac8.png";
import residentialImage from "@assets/generated_images/Modern_island_home_ocean_ed434fed.png";
import constructionSiteImage from "@assets/generated_images/Construction_site_overview_tropical_2ba6d7f9.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    { image: resortImage, title: "Coral Bay Resort Renovation - Saipan", stats: "$2.3M | 8 Months | 2024", category: "commercial" },
    { image: schoolImage, title: "Kagman Elementary Expansion - Saipan", stats: "$1.8M | 12 Months | 2023", category: "government" },
    { image: commercialImage, title: "Pacific Trade Center - Garapan", stats: "$3.1M | 14 Months | 2023", category: "commercial" },
    { image: residentialImage, title: "Sunset Villas Residential Complex - Saipan", stats: "$1.5M | 10 Months | 2024", category: "residential" },
    { image: schoolImage, title: "Tinian Community Center Renovation", stats: "$890K | 6 Months | 2023", category: "government" },
    { image: resortImage, title: "Beach Resort Hotel - Rota", stats: "$4.2M | 18 Months | 2022", category: "commercial" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Hero
        image={constructionSiteImage}
        title="Our Portfolio of Excellence"
        subtitle="Showcasing quality construction projects across the Northern Marianas"
        height="normal"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Building CNMI's Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over 200 completed projects across Saipan, Tinian, and Rota. From luxury resorts to public schools, we've built the infrastructure that powers the Northern Marianas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              data-testid="filter-all"
              className={activeFilter === "all" ? "bg-primary hover:bg-primary text-primary-foreground" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === "commercial" ? "default" : "outline"}
              onClick={() => setActiveFilter("commercial")}
              data-testid="filter-commercial"
              className={activeFilter === "commercial" ? "bg-primary hover:bg-primary text-primary-foreground" : ""}
            >
              Commercial
            </Button>
            <Button
              variant={activeFilter === "residential" ? "default" : "outline"}
              onClick={() => setActiveFilter("residential")}
              data-testid="filter-residential"
              className={activeFilter === "residential" ? "bg-primary hover:bg-primary text-primary-foreground" : ""}
            >
              Residential
            </Button>
            <Button
              variant={activeFilter === "government" ? "default" : "outline"}
              onClick={() => setActiveFilter("government")}
              data-testid="filter-government"
              className={activeFilter === "government" ? "bg-primary hover:bg-primary text-primary-foreground" : ""}
            >
              Government
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                stats={project.stats}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Amazing Together"
        description="Ready to start your next construction project? Get in touch for a free consultation."
        primaryButtonText="Get a Free Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (670) 234-5678"
        secondaryButtonLink="tel:6702345678"
      />
    </>
  );
}
