import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { PosterEmbed } from "@/components/projects/PosterEmbed";
import { DocumentIcon, GitHubIcon, ExternalLinkIcon } from "@/components/ui/icons";

const linkIcons = {
  document: DocumentIcon,
  github: GitHubIcon,
  external: ExternalLinkIcon,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card hover className="p-5 sm:p-6">
      <div className="flex justify-between items-start gap-3 mb-2">
        <div className="font-semibold text-strong text-[15px] leading-snug tracking-tight">
          {project.name}
        </div>
        <span className="font-mono text-[10px] font-medium text-accent-mid bg-accent-subtle border border-accent-border px-2 py-1 rounded-md whitespace-nowrap shrink-0">
          {project.badge}
        </span>
      </div>

      {project.bullets ? (
        <ul className="mb-4 flex flex-col gap-1.5 list-disc pl-4.5 marker:text-accent-mid">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="text-[13.5px] text-body leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13.5px] text-body leading-relaxed mb-4">{project.description}</p>
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
                  className="font-mono text-[11px] font-medium text-muted bg-surface-muted border border-rule px-2.5 py-1.5 rounded-md flex items-center gap-1.5 cursor-not-allowed opacity-60"
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
                className="font-mono text-[11px] font-medium text-accent-mid bg-accent-subtle border border-accent-border px-2.5 py-1.5 rounded-md flex items-center gap-1.5 hover:bg-accent-subtle/70 hover:text-accent transition-colors"
              >
                <Icon className="w-3 h-3" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
