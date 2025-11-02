import { MemoryRouter } from "wouter/memory";
import CTASection from "../CTASection";

export default function CTASectionExample() {
  return (
    <MemoryRouter>
      <CTASection
        title="Ready to Start Your Project?"
        description="Whether it's a custom home, commercial building, or government contract, Pacific Stone Builders delivers quality construction across the CNMI."
        primaryButtonText="Get a Free Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Call (670) 234-5678"
        secondaryButtonLink="tel:6702345678"
      />
    </MemoryRouter>
  );
}
