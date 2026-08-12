interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[0.7rem] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
