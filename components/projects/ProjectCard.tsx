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
        <div className="font-semibold text-strong text-[15px] leading-snug">
          {project.name}
        </div>
        <span className="text-[11px] font-medium text-accent-mid bg-accent-subtle border border-accent-border px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 backdrop-blur-sm">
          {project.badge}
        </span>
      </div>

      {project.bullets ? (
        <ul className="mb-3 max-w-[37.5rem] flex flex-col gap-1.5 list-disc pl-4.5 marker:text-rule">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="text-[13.5px] text-body leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13.5px] text-body leading-relaxed mb-3 max-w-[37.5rem]">
          {project.description}
        </p>
      )}

      {project.image && <PosterEmbed image={project.image} />}

      <div className="flex justify-between items-center flex-wrap gap-2.5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex gap-4">
          {project.links.map((link) => {
            const Icon = linkIcons[link.icon];
            if (link.status === "todo") {
              return (
                <span
                  key={link.label}
                  className="text-xs font-medium text-muted flex items-center gap-1 cursor-not-allowed"
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
                className="text-xs font-medium text-accent-mid flex items-center gap-1 hover:text-accent transition-colors"
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
