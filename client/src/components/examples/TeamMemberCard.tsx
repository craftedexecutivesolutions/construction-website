import TeamMemberCard from "../TeamMemberCard";
import teamImage from "@assets/generated_images/Asian_male_contractor_headshot_63ae8f21.png";

export default function TeamMemberCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <TeamMemberCard
        image={teamImage}
        name="Juan T. Cabrera"
        title="President & General Contractor"
        bio="Juan has over 30 years of construction experience in CNMI and holds a General Contractor License. He's passionate about mentoring the next generation of island builders."
      />
    </div>
  );
}
