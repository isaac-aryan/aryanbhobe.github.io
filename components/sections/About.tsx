import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section id="about" className="mb-13 scroll-mt-8">
      <SectionHeader index="00" title="About" />
      <Card className="p-5 sm:p-6">
        <p className="text-[15px] text-body leading-loose">{profile.about}</p>
      </Card>
    </section>
  );
}
