import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <SectionGlow lead="gold" flip />
      <div className="max-w-[1400px] w-full mx-auto">
        <Reveal>
          <SectionHeader title="Education" />
        </Reveal>

        <div className="flex flex-col">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.1}>
              <div
                className={`py-8 sm:py-10 grid grid-cols-[1fr_auto] max-stack:grid-cols-1 gap-x-6 gap-y-2 ${
                  index !== 0 ? "border-t border-rule" : ""
                }`}
              >
                <div className="font-serif text-2xl sm:text-3xl font-medium text-strong tracking-tight">
                  {item.school}
                </div>
                <div className="font-sans text-xs uppercase tracking-wide text-muted tabular-nums whitespace-nowrap pt-2 col-start-2 row-start-1 max-stack:col-start-1 max-stack:row-auto">
                  {item.date}
                </div>
                <div className="col-span-full text-base sm:text-lg text-body mt-1">{item.degree}</div>
                {item.meta && (
                  <div className="col-span-full text-sm text-muted mt-1">{item.meta}</div>
                )}

                {item.years && (
                  <ul className="col-span-full flex flex-col gap-4 list-disc pl-5 marker:text-accent-mid mt-5">
                    {item.years.map((y) => (
                      <li key={y.year} className="text-[15px] leading-relaxed">
                        <span className="text-strong font-medium">
                          {y.year}
                          {y.grade && ` — ${y.grade}`}
                        </span>
                        <div className="text-body text-sm mt-0.5">{y.subjects.join(", ")}</div>
                      </li>
                    ))}
                  </ul>
                )}

                {item.bullets && (
                  <ul className="col-span-full flex flex-col gap-2 list-disc pl-5 marker:text-accent-mid mt-5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="text-[15px] text-body leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
