import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Volunteering } from "@/components/sections/Volunteering";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <main>
        <Education />
        <Experience />
        <Volunteering />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
