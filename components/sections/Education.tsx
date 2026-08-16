import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Education() {
  return (
    <section id="education" className="mb-13 scroll-mt-8">
      <SectionHeader index="01" title="Education" />
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={item.school} hover className="p-5 sm:p-6">
            <div className="grid grid-cols-[1fr_auto] max-sidebar:grid-cols-1 gap-x-4 gap-y-1">
              <div className="font-semibold text-strong text-[15px] tracking-tight">{item.school}</div>
              <div className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 col-start-2 row-start-1 max-sidebar:col-start-1 max-sidebar:row-auto">
                {item.date}
              </div>
              <div className="text-[13px] text-muted col-start-1 row-start-2 mb-2">
                {item.degree}
                {item.meta && <span> · {item.meta}</span>}
              </div>
              {item.bullets && (
                <ul className="col-span-full flex flex-col gap-1.5 list-disc pl-4.5 marker:text-accent-mid">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-[13.5px] text-body leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
