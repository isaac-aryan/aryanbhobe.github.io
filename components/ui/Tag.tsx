export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[11px] font-medium text-body bg-surface-muted border border-rule px-2.5 py-1 rounded-sm">
      {children}
    </span>
  );
}
