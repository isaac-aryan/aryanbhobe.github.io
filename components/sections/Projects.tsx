import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectTabs } from "@/components/projects/ProjectTabs";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="mb-13 scroll-mt-24">
      <Reveal>
        <SectionHeader index="04" title="Projects" />
      </Reveal>
      <ProjectTabs projects={projects} />
    </section>
  );
}
