import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Education() {
  return (
    <section className="mb-13">
      <SectionHeader index="02" title="Education" />
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={item.school} hover className="p-5 sm:p-6">
            <div className="font-semibold text-strong text-[15px] tracking-tight mb-0.5">{item.school}</div>
            <div className="text-[13.5px] text-body mb-1">{item.degree}</div>
            <div className="text-xs text-muted leading-relaxed">{item.meta}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
