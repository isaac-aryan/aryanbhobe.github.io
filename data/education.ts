export interface EducationYear {
  year: string;
  grade?: string;
  subjects: string[];
}

export interface EducationEntry {
  school: string;
  date: string;
  degree: string;
  meta?: string;
  years?: EducationYear[];
  bullets?: string[];
}

export const education: EducationEntry[] = [
  {
    school: "University of Bath",
    date: "Oct 2023 – Jul 2027",
    degree: "B.Sc (Hons) Computer Science & Artificial Intelligence",
    meta: "Classification: First Class Honours (1:1)",
    years: [
      {
        year: "Year 1",
        grade: "77.67% (1:1)",
        subjects: ["Artificial Intelligence, Computer Systems Architecture, Functional Programming with Haskell, Programming with Python, Discrete Mathematics, Linear Algebra, Cryptography, Databases with SQL"],
      },
      {
        year: "Year 2",
        grade: "74.50% (1:1)",
        subjects: ["Advanced Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Visual Computing, Software Engineering, Probability & Statistics"],
      },
      {
        year: "Year 3",
        grade: "Industrial Placement Year - Merck Sharp & Dohme (MSD)",
        subjects: ["Machine Learning & Computational Biology Scientist"],
      },
      {
        year: "Year 4",
        grade: "Predicted: First Class Honours (1:1)",
        subjects: ["Bayesian Machine Learning, Reinforcement Learning, Natural Language Processing, Finance & Risk Management, Business Strategy, Dissertation in AI"],
      },
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
