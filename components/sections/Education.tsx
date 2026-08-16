import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Education() {
  return (
    <section className="mb-13">
      <SectionHeader title="Education" />
      {education.map((item) => (
        <div key={item.school} className="py-4 border-b border-rule first:border-t">
          <div className="font-semibold text-strong text-[15px] mb-0.5">{item.school}</div>
          <div className="text-[13.5px] text-body mb-1">{item.degree}</div>
          <div className="text-xs text-muted">{item.meta}</div>
        </div>
      ))}
    </section>
  );
}
