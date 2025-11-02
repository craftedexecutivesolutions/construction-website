import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileCheck, Shield, CheckCircle2, Building } from "lucide-react";
import teamHeroImage from "@assets/generated_images/Team_photo_ocean_background_dcfaa488.png";

export default function Certifications() {
  const certifications = [
    {
      icon: Building,
      title: "CNMI General Contractor License",
      number: "#12345",
      description: "Licensed to perform all types of construction work in the Commonwealth of the Northern Mariana Islands",
      issued: "CNMI Department of Commerce",
    },
    {
      icon: FileCheck,
      title: "Federal Contractor Registration",
      number: "SAM.gov Active",
      description: "Registered and qualified to bid on federal construction contracts",
      issued: "U.S. General Services Administration",
    },
    {
      icon: Shield,
      title: "OSHA Safety Certification",
      number: "Current",
      description: "All team members trained in OSHA construction safety standards and protocols",
      issued: "Occupational Safety & Health Administration",
    },
    {
      icon: Award,
      title: "Bonded & Insured",
      number: "$5M Coverage",
      description: "Comprehensive general liability and workers' compensation insurance",
      issued: "Pacific Insurance Group",
    },
    {
      icon: CheckCircle2,
      title: "Saipan Chamber of Commerce",
      number: "Member Since 1998",
      description: "Active member contributing to CNMI's business community development",
      issued: "Saipan Chamber of Commerce",
    },
    {
      icon: Award,
      title: "Better Business Bureau",
      number: "A+ Rating",
      description: "Accredited business with excellent customer satisfaction record",
      issued: "Better Business Bureau",
    },
  ];

  return (
    <>
      <Hero
        image={teamHeroImage}
        title="Certifications & Licenses"
        subtitle="Qualified, certified, and committed to excellence in construction"
        height="normal"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Licensed & Qualified
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pacific Stone Builders maintains all necessary licenses, certifications, and insurance coverage to ensure your project is completed safely, legally, and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`cert-${index}`}>
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{cert.title}</h3>
                  <div className="text-primary font-bold mb-3">{cert.number}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Issued by: {cert.issued}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#E8DCC4]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Safety & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Safety Standards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">OSHA 30-hour certified supervisors on every job site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Regular safety training and equipment inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Zero-tolerance safety violation policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comprehensive job site safety protocols</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-primary" />
                  Compliance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Full compliance with CNMI building codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Davis-Bacon wage compliance for federal projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Environmental protection standards adherence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Regular license and certification renewals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work With a Certified Professional"
        description="Our certifications and licenses ensure your project is in capable, qualified hands"
        primaryButtonText="Get a Free Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (670) 234-5678"
        secondaryButtonLink="tel:6702345678"
      />
    </>
  );
}
