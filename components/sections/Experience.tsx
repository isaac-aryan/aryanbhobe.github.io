"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PosterEmbed } from "@/components/ui/PosterEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <SectionGlow lead="accent" flip />
      <div className="max-w-[1400px] w-full mx-auto">
        <Reveal>
          <SectionHeader title="Experience" />
        </Reveal>

        <div className="flex flex-col">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.1}>
              <div
                className={`py-8 sm:py-10 grid grid-cols-[1fr_auto] max-stack:grid-cols-1 gap-x-6 gap-y-2 ${
                  index !== 0 ? "border-t border-rule" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.logo && <CompanyLogo src={item.logo} alt={`${item.company} logo`} />}
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-strong tracking-tight">
                    {item.company}
                  </span>
                </div>
                <div className="font-sans text-xs uppercase tracking-wide text-muted tabular-nums whitespace-nowrap pt-2 col-start-2 row-start-1 max-stack:col-start-1 max-stack:row-auto">
                  {item.date}
                </div>
                <div className="text-base sm:text-lg text-muted col-start-1 row-start-2 mb-2">
                  {item.role}
                </div>
                <ul className="col-span-full flex flex-col gap-2 list-disc pl-5 marker:text-accent-mid mt-3">
                  {item.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="text-[15px] text-body leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
                {item.poster && (
                  <div className="col-span-full max-w-[37.5rem] mt-4">
                    <PosterEmbed image={item.poster} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
