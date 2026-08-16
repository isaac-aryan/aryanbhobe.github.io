const navItems = [
  { href: "#about", label: "About", index: "00" },
  { href: "#education", label: "Education", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#skills", label: "Skills", index: "03" },
  { href: "#projects", label: "Projects", index: "04" },
];

export function SidebarNav() {
  return (
    <nav className="w-auto sidebar:w-full mb-7">
      <ul className="list-none flex flex-col gap-0.5 max-sidebar:flex-row max-sidebar:flex-wrap max-sidebar:justify-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs text-body hover:bg-surface-muted hover:text-strong transition-colors"
            >
              <span className="font-mono text-[10px] text-accent-mid">{item.index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
