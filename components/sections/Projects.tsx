import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectTabs } from "@/components/projects/ProjectTabs";

export function Projects() {
  return (
    <section id="projects" className="mb-13 scroll-mt-8">
      <SectionHeader index="04" title="Projects" />
      <ProjectTabs projects={projects} />
    </section>
  );
}
