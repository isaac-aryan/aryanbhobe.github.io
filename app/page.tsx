import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="grid grid-cols-[260px_1fr] max-sidebar:grid-cols-1 min-h-screen">
      <Sidebar />
      <main className="px-15 pt-14 pb-20 max-w-[47.5rem] max-sidebar:px-5 max-sidebar:pt-8 max-sidebar:pb-15">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
