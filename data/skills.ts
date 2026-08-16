export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "ADK",
      "XGBoost",
      "JAX",
      "CNNs",
      "Unsupervised Learning",
      "LangGraph",
      "MCP",
      "Claude",
      "OpenCV",
    ],
  },
  {
    label: "Quantitative & Statistical",
    skills: [
      "statsmodels",
      "SciPy",
      "NumPy",
      "Pandas",
      "SHAP",
      "Matplotlib",
      "Seaborn",
      "Hypothesis Testing",
      "Time Series",
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "GCP",
      "AWS",
      "FastAPI",
      "Cloud Run",
      "Apigee",
      "Git",
      "GitHub",
      "MySQL",
      "Redshift",
      "MongoDB",
      "Tableau",
      "Excel",
      "Supabase",
    ],
  },
];
