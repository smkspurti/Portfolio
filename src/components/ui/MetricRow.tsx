interface MetricRowProps {
  label: string;
  value: string;
}

export function MetricRow({ label, value }: MetricRowProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-1.5 border-b border-[var(--border)] last:border-0">
      <span className="metric-label shrink-0">{label}</span>
      <span className="metric-value text-right">{value}</span>
    </div>
  );
}
