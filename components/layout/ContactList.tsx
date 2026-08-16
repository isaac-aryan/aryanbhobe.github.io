import { contactLinks } from "@/data/profile";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

const icons = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function ContactList() {
  return (
    <ul className="w-auto list-none mb-7 flex flex-col gap-0.5 sidebar:w-full">
      {contactLinks.map((link) => {
        const Icon = icons[link.icon];
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs text-body overflow-hidden hover:bg-surface-muted hover:text-strong transition-colors"
            >
              <Icon className="w-3.5 h-3.5 shrink-0 text-muted" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {link.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
