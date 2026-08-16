import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section className="mb-13">
      <SectionHeader title="About" />
      <p className="text-[15px] text-body leading-loose max-w-[37.5rem]">{profile.about}</p>
    </section>
  );
}
