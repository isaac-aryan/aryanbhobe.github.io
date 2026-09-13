import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <main className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
