"use client";

import { motion } from "motion/react";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="mb-13 scroll-mt-24">
      <Reveal>
        <SectionHeader index="01" title="Education" />
      </Reveal>

      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-b from-accent to-accent/10 origin-top"
            variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.12}>
              <div className="grid grid-cols-[24px_1fr] sm:grid-cols-[32px_1fr] gap-x-3 sm:gap-x-5">
                <motion.div
                  className="flex justify-center items-center pt-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg"
                    variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                    transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
                  />
                </motion.div>

                <Card hover className="p-5 sm:p-6">
                  <div className="grid grid-cols-[1fr_auto] max-stack:grid-cols-1 gap-x-4 gap-y-1">
                    <div className="font-semibold text-strong text-[15px] tracking-tight">{item.school}</div>
                    <div className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 col-start-2 row-start-1 max-stack:col-start-1 max-stack:row-auto">
                      {item.date}
                    </div>
                    <div className="col-span-full text-[13px] text-body mt-1">{item.degree}</div>
                    {item.meta && (
                      <div className="col-span-full text-xs text-muted mt-0.5">{item.meta}</div>
                    )}

                    {item.years && (
                      <ul className="col-span-full flex flex-col gap-3 list-disc pl-4.5 marker:text-accent-mid mt-3">
                        {item.years.map((y) => (
                          <li key={y.year} className="text-[13.5px] leading-relaxed">
                            <span className="text-strong font-medium">
                              {y.year}
                              {y.grade && ` — ${y.grade}`}
                            </span>
                            <div className="text-body text-[13px] mt-0.5">{y.subjects.join(", ")}</div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.bullets && (
                      <ul className="col-span-full flex flex-col gap-1.5 list-disc pl-4.5 marker:text-accent-mid mt-3">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="text-[13.5px] text-body leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
