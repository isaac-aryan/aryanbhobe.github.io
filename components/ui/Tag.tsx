export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] text-body bg-surface-muted border border-rule px-2 py-1 rounded-md">
      {children}
    </span>
  );
}
