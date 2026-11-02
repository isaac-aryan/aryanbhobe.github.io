import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectTabs } from "@/components/projects/ProjectTabs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <SectionGlow lead="accent" />
      <div className="max-w-[1400px] w-full mx-auto">
        <Reveal>
          <SectionHeader title="Projects" />
        </Reveal>
        <ProjectTabs projects={projects} />
      </div>
    </section>
  );
}
