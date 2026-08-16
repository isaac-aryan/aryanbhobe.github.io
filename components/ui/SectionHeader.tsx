export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-6">
      <h2 className="font-serif text-xl font-semibold text-strong whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
