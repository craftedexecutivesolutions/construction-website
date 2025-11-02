import { MemoryRouter } from "wouter/memory";
import Hero from "../Hero";
import heroImage from "@assets/generated_images/Hero_construction_workers_tropical_0c4b0f45.png";

export default function HeroExample() {
  return (
    <MemoryRouter>
      <Hero
        image={heroImage}
        title="CNMI's Trusted General Contractor Since 1998"
        subtitle="From Saipan to Tinian to Rota - Building Excellence Across the Northern Marianas"
        showCTA={true}
      />
    </MemoryRouter>
  );
}
