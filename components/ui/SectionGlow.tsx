const leadVar: Record<"accent" | "gold", string> = {
  accent: "var(--color-accent)",
  gold: "var(--color-gold)",
};

export function SectionGlow({
  lead = "accent",
  flip = false,
}: {
  lead?: "accent" | "gold";
  flip?: boolean;
}) {
  const other = lead === "accent" ? "gold" : "accent";

  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${leadVar[lead]} var(--wash-strength), var(--color-bg)) 0%, var(--color-bg) 70%)`,
        }}
      />
      <div
        className={`absolute -top-[10%] ${flip ? "-right-[15%]" : "-left-[15%]"} w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] rounded-full blur-[110px]`}
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${leadVar[lead]} var(--glow-strong), transparent), transparent 70%)`,
          animation: "drift-a 28s ease-in-out infinite",
        }}
      />
      <div
        className={`absolute -bottom-[15%] ${flip ? "-left-[10%]" : "-right-[10%]"} w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full blur-[110px]`}
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${leadVar[other]} var(--glow-soft), transparent), transparent 70%)`,
          animation: "drift-b 32s ease-in-out infinite",
        }}
      />
    </div>
  );
}
