import { profile, contactLinks } from "@/data/profile";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-rule mt-8">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-strong font-semibold tracking-tight">{profile.name}</div>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener" : undefined}
                aria-label={link.label}
                className="flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-accent-mid hover:bg-surface-muted transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <a
          href="#hero"
          className="font-mono text-xs text-muted hover:text-accent-mid transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
