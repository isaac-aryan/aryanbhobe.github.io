import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section className="mb-13">
      <SectionHeader title="Experience" />
      <div className="flex flex-col">
        {experience.map((item) => (
          <div
            key={item.company}
            className="grid grid-cols-[1fr_auto] max-sidebar:grid-cols-1 gap-x-4 gap-y-1 py-5 border-b border-rule first:border-t"
          >
            <div className="font-semibold text-strong text-[15px]">{item.company}</div>
            <div className="text-xs text-muted whitespace-nowrap pt-0.5 col-start-2 row-start-1 max-sidebar:col-start-1 max-sidebar:row-auto">
              {item.date}
            </div>
            <div className="text-[13px] text-muted col-start-1 row-start-2 mb-2">
              {item.role}
            </div>
            <p className="text-[13.5px] text-body leading-relaxed col-span-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
