"use client";

import { motion, useScroll, useTransform } from "motion/react";

const navItems = [
  { href: "#about", label: "About", index: "00" },
  { href: "#education", label: "Education", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#skills", label: "Skills", index: "03" },
  { href: "#projects", label: "Projects", index: "04" },
];

export function TopNav() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0)", "rgba(12,12,14,0.75)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]);
  const backdropBlur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(16px)"]);

  return (
    <motion.header
      style={{
        backgroundColor: background,
        borderColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className="fixed top-0 inset-x-0 z-50 border-b"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm font-semibold text-strong tracking-tight">
          AB
        </a>
        <nav>
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-md font-mono text-xs text-body hover:text-strong hover:bg-surface-muted transition-colors"
                >
                  <span className="text-accent-mid">{item.index}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
