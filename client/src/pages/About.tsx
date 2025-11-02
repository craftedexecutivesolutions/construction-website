import Hero from "@/components/Hero";
import TeamMemberCard from "@/components/TeamMemberCard";
import StatCard from "@/components/StatCard";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Star, Award, FileCheck, Shield } from "lucide-react";
import teamHeroImage from "@assets/generated_images/Team_photo_ocean_background_dcfaa488.png";
import constructionSiteImage from "@assets/generated_images/Construction_site_overview_tropical_2ba6d7f9.png";
import teamMember1 from "@assets/generated_images/Asian_male_contractor_headshot_63ae8f21.png";
import teamMember2 from "@assets/generated_images/Chamorro_female_professional_headshot_40c4b00b.png";
import communityImage from "@assets/generated_images/Beach_cleanup_volunteers_tropical_e4ef4ae2.png";

export default function About() {
  return (
    <>
      <Hero
        image={teamHeroImage}
        title="Building CNMI's Future, Together"
        subtitle="Meet the team behind the Northern Marianas' most trusted construction company"
        height="normal"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pacific Stone Builders was founded in 1998 by Juan Tenorio, a third-generation Saipan resident who saw the need for a locally-owned construction company that truly understood the unique challenges of building in the Northern Marianas.
                </p>
                <p>
                  From our humble beginnings with a crew of five, we've grown into one of CNMI's premier general contractors, completing over 200 projects across Saipan, Tinian, and Rota. But we've never forgotten our roots.
                </p>
                <p>
                  Today, our 40+ person team is 100% local, with deep ties to the communities we serve. We're not just building structures - we're building the future of our islands, one project at a time.
                </p>
              </div>
            </div>
            <div>
              <img
                src={constructionSiteImage}
                alt="Construction site"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#E8DCC4]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional construction services that exceed client expectations while contributing to CNMI's economic growth and community development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the Northern Marianas' most respected construction company, known for quality, integrity, and commitment to our island home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Our Values</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Integrity in every project</li>
                  <li>• Safety first, always</li>
                  <li>• Community commitment</li>
                  <li>• Excellence in execution</li>
                  <li>• Environmental responsibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TeamMemberCard
              image={teamMember1}
              name="Juan T. Cabrera"
              title="President & General Contractor"
              bio="Juan has over 30 years of construction experience in CNMI and holds a General Contractor License. He's passionate about mentoring the next generation of island builders."
            />
            <TeamMemberCard
              image={teamMember2}
              name="Maria S. Santos"
              title="Operations Director"
              bio="Maria brings 20 years of project management expertise and ensures every project runs smoothly from start to finish. She oversees all commercial and residential operations."
            />
            <TeamMemberCard
              image={teamMember1}
              name="Roberto M. Cruz"
              title="Chief Engineer"
              bio="Roberto specializes in typhoon-resistant design and has led engineering teams on major government projects across the Northern Marianas for over 15 years."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Certified & Qualified
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">CNMI General Contractor</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Federal Contractor</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Shield className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">OSHA Safety Certified</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Bonded & Insured</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Chamber Member</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Shield className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm font-medium">BBB Accredited</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Pacific Stone Builders in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12">
            <StatCard value="25+" label="Years Serving CNMI" />
            <StatCard value="200+" label="Completed Projects" />
            <StatCard value="40+" label="Local Employees" />
            <StatCard value="$50M+" label="Projects Completed" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Giving Back to Our Community
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src={communityImage}
                alt="Community involvement"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Pacific Stone Builders, we believe in giving back to the islands that have given us so much.
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground font-medium">Our team regularly volunteers for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Beach cleanups across Saipan</li>
                  <li>• Habitat for Humanity builds</li>
                  <li>• Public school improvement projects</li>
                  <li>• Youth mentorship programs</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  We're proud to sponsor local sports teams, cultural events, and educational initiatives that strengthen our CNMI community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        description="Join our team or start your next construction project with CNMI's most trusted builder"
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Join Our Team"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
