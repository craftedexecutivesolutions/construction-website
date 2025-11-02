import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import teamHeroImage from "@assets/generated_images/Team_photo_ocean_background_dcfaa488.png";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Hero
        image={teamHeroImage}
        title="Get in Touch"
        subtitle="Let's discuss your next construction project"
        height="normal"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Office Location</h3>
                        <p className="text-muted-foreground">
                          123 Middle Road, Garapan<br />
                          Saipan, MP 96950
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Phone</h3>
                        <a href="tel:6702345678" className="text-primary hover:underline" data-testid="link-contact-phone">
                          (670) 234-5678
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Email</h3>
                        <a href="mailto:info@pacificstonebuilders.com" className="text-primary hover:underline" data-testid="link-contact-email">
                          info@pacificstonebuilders.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 7:30 AM - 5:00 PM<br />
                          Saturday: 8:00 AM - 12:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="e.g., Commercial, Residential, Government"
                    required
                    data-testid="input-project-type"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    data-testid="input-message"
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary text-primary-foreground" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#E8DCC4]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-8">Find Us</h2>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="font-heading font-bold text-xl mb-2">123 Middle Road, Garapan</p>
                  <p>Saipan, MP 96950</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
