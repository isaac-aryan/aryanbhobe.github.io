"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PosterEmbed } from "@/components/ui/PosterEmbed";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mb-13 scroll-mt-24">
      <Reveal>
        <SectionHeader index="02" title="Experience" />
      </Reveal>
      <div className="flex flex-col gap-4">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.1}>
            <Card hover className="p-5 sm:p-6">
              <div className="grid grid-cols-[1fr_auto] max-stack:grid-cols-1 gap-x-4 gap-y-1">
                <div className="font-semibold text-strong text-[15px] tracking-tight">{item.company}</div>
                <div className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 col-start-2 row-start-1 max-stack:col-start-1 max-stack:row-auto">
                  {item.date}
                </div>
                <div className="text-[13px] text-muted col-start-1 row-start-2 mb-2">
                  {item.role}
                </div>
                <ul className="col-span-full flex flex-col gap-1.5 list-disc pl-4.5 marker:text-accent-mid">
                  {item.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="text-[13.5px] text-body leading-relaxed"
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
                  <div className="col-span-full max-w-[37.5rem]">
                    <PosterEmbed image={item.poster} />
                  </div>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
