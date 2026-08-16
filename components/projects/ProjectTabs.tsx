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
        className="inline-flex bg-surface-muted border border-rule rounded-lg p-1 mb-6 gap-0.5"
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
                  ? "bg-surface text-strong shadow-sm"
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
          className="flex flex-col"
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
