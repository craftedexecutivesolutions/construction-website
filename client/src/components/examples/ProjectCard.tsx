import ProjectCard from "../ProjectCard";
import projectImage from "@assets/generated_images/Completed_resort_hotel_tropical_e8ee713a.png";

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        image={projectImage}
        title="Coral Bay Resort Renovation - Saipan"
        stats="$2.3M | 8 Months | 2024"
      />
    </div>
  );
}
