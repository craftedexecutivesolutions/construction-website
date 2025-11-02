import { MemoryRouter } from "wouter/memory";
import ServiceCard from "../ServiceCard";
import { Building } from "lucide-react";
import commercialImage from "@assets/generated_images/Commercial_building_tropical_palms_7d7d8ac8.png";

export default function ServiceCardExample() {
  return (
    <MemoryRouter>
      <div className="p-8 max-w-sm">
        <ServiceCard
          icon={Building}
          image={commercialImage}
          title="Commercial Construction"
          description="Hotels, resorts, retail spaces, and office buildings built to withstand island weather"
          link="/services"
        />
      </div>
    </MemoryRouter>
  );
}
