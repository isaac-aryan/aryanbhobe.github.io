"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(10,10,9,0.18)", "rgba(8,8,7,0.4)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.04)", "rgba(255,255,255,0.08)"]);
  const backdropBlur = useTransform(scrollY, [0, 120], ["blur(8px)", "blur(16px)"]);

  return (
    <motion.header
      style={{
        backgroundColor: background,
        borderColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className="fixed top-0 inset-x-0 z-50 border-b text-[#f3efe5]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a href="#hero" className="font-serif text-base font-medium tracking-tight">
          AIB
        </a>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3.5 py-2 rounded-sm font-sans text-[13px] font-medium uppercase tracking-wide text-[#f3efe5]/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-0.5">
          <ThemeToggle className="text-[#f3efe5]/80 hover:text-white hover:bg-white/10" />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-sm text-[#f3efe5]/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden border-t border-white/10 bg-[rgba(8,8,7,0.92)] backdrop-blur-xl"
          >
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-2.5 font-sans text-sm font-medium uppercase tracking-wide text-[#f3efe5]/85 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
