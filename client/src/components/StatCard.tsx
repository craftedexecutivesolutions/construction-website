interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">{value}</div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
}
