import FeatureSection from "../FeatureSection";
import { Palmtree, Users, FileCheck, Handshake } from "lucide-react";

export default function FeatureSectionExample() {
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

  return <FeatureSection title="Why Pacific Stone Builders?" features={features} />;
}
