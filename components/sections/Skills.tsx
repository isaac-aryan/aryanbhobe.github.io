import { skills } from "@/data/skills";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Skills() {
  return (
    <section className="mb-13">
      <SectionHeader index="03" title="Skills" />
      <div className="grid grid-cols-2 max-sidebar:grid-cols-1 gap-4">
        {skills.map((group) => (
          <Card key={group.label} hover className="p-5">
            <div className="font-mono text-[11px] font-medium text-muted uppercase tracking-wide mb-3">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
