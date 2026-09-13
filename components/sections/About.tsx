import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="mb-13 scroll-mt-24">
      <Reveal>
        <SectionHeader index="00" title="About" />
      </Reveal>
      <Reveal delay={0.1}>
        <Card className="p-5 sm:p-6">
          <p className="text-[15px] text-body leading-loose">{profile.about}</p>
        </Card>
      </Reveal>
    </section>
  );
}
