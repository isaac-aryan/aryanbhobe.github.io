export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs text-body bg-surface-muted backdrop-blur-sm border border-rule px-2.5 py-1 rounded">
      {children}
    </span>
  );
}
