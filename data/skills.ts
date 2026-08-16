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
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "OpenCV", "JAX"],
  },
  {
    label: "Quantitative & Statistical",
    skills: ["statsmodels", "SciPy", "NumPy", "Pandas", "SHAP", "Matplotlib"],
  },
  {
    label: "Tools & Platforms",
    skills: ["AWS", "GCP", "Git", "MySQL", "MongoDB", "Tableau"],
  },
];
