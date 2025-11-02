interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">{value}</div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
}
