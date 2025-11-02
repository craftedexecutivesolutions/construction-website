import { CheckCircle2, Award, Building, Users } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    { icon: CheckCircle2, text: "25+ Years Serving CNMI" },
    { icon: Award, text: "Licensed & Bonded Contractor" },
    { icon: Building, text: "Federal & Government Projects" },
    { icon: Users, text: "100% Local Team" },
  ];

  return (
    <div className="bg-[#E8DCC4]/30 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center"
              data-testid={`trust-item-${index}`}
            >
              <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium text-sm md:text-base text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
