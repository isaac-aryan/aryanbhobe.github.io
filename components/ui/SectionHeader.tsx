export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-strong tracking-tight">
        {title}
      </h2>
      <div
        className="mt-5 h-[3px] w-14"
        style={{ background: "var(--gradient-accent)" }}
      />
    </div>
  );
}
