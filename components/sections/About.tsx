import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section className="mb-13">
      <SectionHeader title="About" />
      <Card className="p-5 sm:p-6">
        <p className="text-[15px] text-body leading-loose max-w-[37.5rem]">{profile.about}</p>
      </Card>
    </section>
  );
}
