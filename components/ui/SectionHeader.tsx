export function SectionHeader({ index, title }: { index?: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      {index && (
        <span className="font-mono text-xs text-accent-mid tracking-wider shrink-0">
          {index}
        </span>
      )}
      <h2 className="text-xl font-semibold text-strong tracking-tight whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
