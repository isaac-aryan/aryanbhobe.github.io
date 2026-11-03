export interface VolunteeringEntry {
  organization: string;
  date: string;
  role: string;
  bullets: string[];
  logo?: string;
}

export const volunteering: VolunteeringEntry[] = [
  {
    organization: "180 Degrees Consulting Bath",
    date: "Oct 2026 – Present",
    role: "Consultant",
    logo: "/logos/180dc.png",
    bullets: [
      "Supporting a time-critical digital migration for a youth charity client as part of the digital transfer workstream: evaluating replacement platforms and planning the transfer of its web presence against a fixed deadline.",
      "Designing an impact reporting framework with defined KPIs and tailored reporting templates, and recommending governance processes so management, funders and other stakeholders receive consistent data.",
    ],
  },
  {
    organization: "University of Bath, Department of Computer Science",
    date: "Sep 2024 – Jul 2025",
    role: "Undergraduate Peer Mentor",
    logo: "/logos/bath.png",
    bullets: [
      "Mentored 10 first-year computer science students through regular check-ins, proactive contact ahead of key deadlines and signposting to relevant university services where needed. Received 100% mentee satisfaction.",
      "Created study resources, ran group sessions and set up a peer support channel matching students on similar modules.",
    ],
  },
];
