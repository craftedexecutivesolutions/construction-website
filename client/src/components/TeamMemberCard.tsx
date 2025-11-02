import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  bio: string;
}

export default function TeamMemberCard({ image, name, title, bio }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all h-full flex flex-col" data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-xl mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{bio}</p>
        <button className="self-start hover-elevate p-2 rounded-md" data-testid={`button-linkedin-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <Linkedin className="h-5 w-5 text-primary" />
        </button>
      </CardContent>
    </Card>
  );
}
