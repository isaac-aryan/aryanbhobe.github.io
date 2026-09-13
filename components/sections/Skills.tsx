"use client";

import { motion } from "motion/react";
import { skills } from "@/data/skills";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="mb-13 scroll-mt-24">
      <Reveal>
        <SectionHeader index="03" title="Skills" />
      </Reveal>
      <div className="grid grid-cols-2 max-stack:grid-cols-1 gap-4">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 0.08}>
            <Card hover className="p-5">
              <div className="font-mono text-[11px] font-medium text-muted uppercase tracking-wide mb-3">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
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
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
