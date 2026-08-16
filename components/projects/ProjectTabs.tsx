"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "personal", label: "Personal" },
  { id: "university", label: "University" },
];

export function ProjectTabs({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory>("personal");

  return (
    <div>
      <div
        role="tablist"
        className="inline-flex bg-surface-muted backdrop-blur-xl border border-rule rounded-lg p-1 mb-6 gap-0.5"
      >
        {categories.map((category) => {
          const isActive = active === category.id;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category.id)}
              className={`text-[13px] font-medium px-4.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? "bg-accent text-white shadow-[0_2px_10px_-2px_rgba(91,157,240,0.5)]"
                  : "text-muted hover:text-body"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {categories.map((category) => (
        <div
          key={category.id}
          role="tabpanel"
          hidden={active !== category.id}
          className="flex flex-col gap-4"
        >
          {projects
            .filter((project) => project.category === category.id)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      ))}
    </div>
  );
}
