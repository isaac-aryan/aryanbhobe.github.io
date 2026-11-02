"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "motion/react";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { PosterEmbed } from "@/components/ui/PosterEmbed";
import { DocumentIcon, GitHubIcon, ExternalLinkIcon } from "@/components/ui/icons";

const linkIcons = {
  document: DocumentIcon,
  github: GitHubIcon,
  external: ExternalLinkIcon,
};

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 30 });
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${spotX}px ${spotY}px, rgba(76,106,146,0.14), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotX.set(x);
    spotY.set(y);
    rawRotateY.set((x / rect.width - 0.5) * 6);
    rawRotateX.set((y / rect.height - 0.5) * -6);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative py-8 sm:py-10"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative">
        <div className="flex justify-between items-start gap-3 mb-2">
          <div className="font-serif text-xl sm:text-2xl font-medium text-strong leading-snug tracking-tight">
            {project.name}
          </div>
          <span className="font-sans text-[10px] font-medium text-accent-mid bg-accent-subtle border border-accent-border px-2 py-1 rounded-sm whitespace-nowrap shrink-0">
            {project.badge}
          </span>
        </div>

        {project.bullets ? (
          <ul className="mb-4 flex flex-col gap-2 list-disc pl-4.5 marker:text-accent-mid">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="text-[15px] text-body leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[15px] text-body leading-relaxed mb-4">{project.description}</p>
        )}

        {project.image && <PosterEmbed image={project.image} />}

        <div className="flex justify-between items-center flex-wrap gap-3 mt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => {
              const Icon = linkIcons[link.icon];
              if (link.status === "todo") {
                return (
                  <span
                    key={link.label}
                    className="font-sans text-[11px] font-medium text-muted bg-surface-muted border border-rule px-2.5 py-1.5 rounded-sm flex items-center gap-1.5 cursor-not-allowed opacity-60"
                    title="Coming soon"
                  >
                    <Icon className="w-3 h-3" />
                    {link.label}
                  </span>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="font-sans text-[11px] font-medium text-accent-mid bg-accent-subtle border border-accent-border px-2.5 py-1.5 rounded-sm flex items-center gap-1.5 hover:bg-accent-subtle/70 hover:text-accent transition-colors"
                >
                  <Icon className="w-3 h-3" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
