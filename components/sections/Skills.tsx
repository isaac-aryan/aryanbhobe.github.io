import { skills } from "@/data/skills";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section className="mb-13">
      <SectionHeader title="Skills" />
      <div className="grid grid-cols-2 max-sidebar:grid-cols-1 gap-x-8 gap-y-5">
        {skills.map((group) => (
          <div key={group.label}>
            <div className="text-[11px] font-semibold text-muted uppercase tracking-wide mb-2.5">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
