export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "phone" | "github" | "linkedin";
  external?: boolean;
}

export const profile = {
  name: "Aryan Isaac Bhobe",
  roleLine:
    "CS + AI @ Bath",
  roleSubline: "Recent: AI & Data Summer Analyst @ Accenture",
  avatar: "/images/headshot.jpg",
  footer: "",
  about:
    "Final-year Computer Science & Artificial Intelligence student at the University of Bath, building at the intersection of quantitative finance and machine learning. I have industry experience in ML research, deep learning engineering, and applied data science across pharmaceutical research and financial services. I am targeting roles in financial data science, quantitative analytics, and risk technology.",
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
