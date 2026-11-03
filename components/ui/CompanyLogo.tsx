import Image from "next/image";

export function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-sm border border-rule bg-[#faf6ee] p-1.5 flex items-center justify-center shrink-0">
      <Image src={src} alt={alt} fill className="object-contain p-1.5" sizes="48px" />
    </div>
  );
}
