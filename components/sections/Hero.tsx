"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile, contactLinks } from "@/data/profile";
import { DocumentActions } from "@/components/documents/DocumentActions";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionGlow } from "@/components/ui/SectionGlow";

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const nameWords = profile.name.split(" ");

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-20 sm:pb-28"
    >
      <SectionGlow lead="accent" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-rule-strong) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative w-full max-w-[180px] sm:max-w-[220px] lg:max-w-none mx-auto lg:mx-0 aspect-[3/4] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 1024px) 260px, 220px"
            className="object-cover"
          />
        </motion.div>

        <div>
          <h1 className="font-serif font-semibold text-strong tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[0.98] mb-6">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: easeOut }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[3px] w-16 mb-6 origin-left"
            style={{ background: "var(--gradient-accent)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-serif text-xl sm:text-2xl text-strong max-w-xl mb-5 leading-snug"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-body text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="max-w-sm mb-8"
          >
            <DocumentActions />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-2"
          >
            {contactLinks.map((link) => {
              const Icon = contactIcons[link.icon];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener" : undefined}
                  className="flex items-center gap-2 px-3 py-2 rounded-sm border border-rule bg-surface font-sans text-xs text-body hover:border-accent-border hover:text-accent-mid transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#education"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-mid transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
