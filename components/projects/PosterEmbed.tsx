import type { ProjectEmbed } from "@/data/projects";

export function PosterEmbed({ embed }: { embed: ProjectEmbed }) {
  return (
    <div className="my-3 border border-rule rounded-md overflow-hidden">
      <iframe src={embed.src} title={embed.title} className="w-full h-[640px] border-none block" />
    </div>
  );
}
