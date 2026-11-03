export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "phone" | "github" | "linkedin";
  external?: boolean;
}

export const profile = {
  name: "Aryan Isaac Bhobe",
  avatar: "/images/headshot2026.jpeg",
  footer: "",
  tagline: "Applied AI and machine learning for complex industry problems.",
  about:
    "Final-year Computer Science & Artificial Intelligence student at the University of Bath. I build machine learning and AI systems on complex, real-world data, from defence and supply chains to biomedical and financial data, working directly with the teams who own the problem. Recent work includes agentic AI pipelines for enterprise clients at Accenture and patient stratification research on clinical data at MSD.",
};

export const contactLinks: ContactLink[] = [
  {
    label: "bhobe.ai@gmail.com",
    href: "mailto:bhobe.ai@gmail.com",
    icon: "mail",
  },
  {
    label: "+44 7473 967442",
    href: "tel:+447473967442",
    icon: "phone",
  },
  {
    label: "isaac-aryan",
    href: "https://github.com/isaac-aryan",
    icon: "github",
    external: true,
  },
  {
    label: "aryanisaacbhobe",
    href: "https://www.linkedin.com/in/aryanisaacbhobe/",
    icon: "linkedin",
    external: true,
  },
];
