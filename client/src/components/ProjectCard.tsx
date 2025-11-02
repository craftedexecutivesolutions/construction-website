import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
  stats: string;
}

export default function ProjectCard({ image, title, stats }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer transition-all group" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
          <p className="text-sm text-white/90">{stats}</p>
        </div>
      </div>
    </Card>
  );
}
