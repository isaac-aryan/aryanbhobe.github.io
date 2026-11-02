"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "personal", label: "Personal" },
  { id: "university", label: "University" },
];

export function ProjectTabs({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory>("personal");
  const activeProjects = projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        role="tablist"
        className="inline-flex bg-surface-muted border border-rule rounded-sm p-1 mb-6 gap-0.5"
      >
        {categories.map((category) => {
          const isActive = active === category.id;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category.id)}
              className={`relative font-sans text-[13px] font-medium px-4.5 py-1.5 rounded-sm transition-colors ${
                isActive ? "text-strong" : "text-muted hover:text-body"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-pill"
                  className="absolute inset-0 -z-10 rounded-sm"
                  style={{
                    background: "var(--gradient-accent)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-pan 10s ease-in-out infinite alternate",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {category.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col divide-y divide-rule"
        >
          {activeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
