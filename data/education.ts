export interface EducationEntry {
  school: string;
  date: string;
  degree: string;
  meta?: string;
  bullets?: string[];
}

export const education: EducationEntry[] = [
  {
    school: "University of Bath",
    date: "Oct 2023 – Jul 2027",
    degree: "B.Sc (Hons) Computer Science & Artificial Intelligence",
    meta: "First Class Honours (1:1)",
    bullets: [
      "Finance & Risk Management",
      "Bayesian Machine Learning",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Algorithms & Data Structures",
      "Probability",
      "Statistics",
      "Linear Algebra",
      "Software Engineering",
      "Databases",
      "Business Strategy",
    ],
  },
  {
    school: "Sharada Mandir School",
    date: "Jun 2021 – May 2023",
    degree: "Indian School Certificate (ISC)",
    meta: "Science Stream (Overall 95%)",
    bullets: ["English - 94%", "Physics - 94%", "Chemistry - 94%", "Mathematics - 93%", "Computer Science - 100%"],
  },
];
