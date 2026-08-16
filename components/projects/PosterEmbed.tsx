import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export function PosterEmbed({ image }: { image: ProjectImage }) {
  const content = (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 800px) 600px, 100vw"
        className="object-cover object-top"
      />
    </div>
  );

  return (
    <div className="my-3 border border-rule rounded-lg overflow-hidden">
      {image.linkHref ? (
        <a
          href={image.linkHref}
          target="_blank"
          rel="noopener"
          className="block group relative"
        >
          {content}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
              Open full screen
            </span>
          </div>
        </a>
      ) : (
        content
      )}
    </div>
  );
}
