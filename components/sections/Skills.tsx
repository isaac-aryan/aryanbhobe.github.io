"use client";

import { motion } from "motion/react";
import { skills } from "@/data/skills";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <SectionGlow lead="gold" />
      <div className="max-w-[1400px] w-full mx-auto">
        <Reveal>
          <SectionHeader title="Skills" />
        </Reveal>

        <div className="flex flex-col">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.08}>
              <div
                className={`py-7 sm:py-9 grid grid-cols-[180px_1fr] max-stack:grid-cols-1 gap-x-8 gap-y-3 ${
                  groupIndex !== 0 ? "border-t border-rule" : ""
                }`}
              >
                <div className="font-sans text-xs font-medium text-muted uppercase tracking-wide pt-1.5">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="inline-block"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.08 + i * 0.03 }}
                    >
                      <Tag>{skill}</Tag>
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
