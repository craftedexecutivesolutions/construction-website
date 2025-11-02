import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, image, title, description, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer transition-all h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="h-6 w-6 text-primary" />
          <h3 className="font-heading font-bold text-xl">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group">
            <span className="text-primary font-medium">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
