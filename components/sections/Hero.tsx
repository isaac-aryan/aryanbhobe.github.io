"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile, contactLinks } from "@/data/profile";
import { DocumentActions } from "@/components/documents/DocumentActions";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-28 pb-20"
    >
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-accent/20 blur-[120px]"
          style={{ animation: "drift-a 22s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/10 blur-[120px]"
          style={{ animation: "drift-b 26s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={72}
            height={72}
            priority
            className="rounded-2xl object-cover border border-rule shrink-0"
          />
          <div className="font-mono text-xs text-accent-mid tracking-wide">
            {profile.roleLine}
            <span className="text-muted"> · {profile.roleSubline}</span>
          </div>
        </motion.div>

        <h1 className="font-semibold text-strong tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8">
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-body text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-sm mb-10"
        >
          <DocumentActions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-rule bg-surface font-mono text-xs text-body hover:border-accent-border hover:text-accent-mid transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-mid transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
