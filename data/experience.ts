export interface ExperienceEntry {
  company: string;
  date: string;
  role: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Accenture",
    date: "Jun 2026 – Sep 2026",
    role: "AI & Data Summer Analyst · London",
    description:
      "Deploying ML and agentic AI solutions for a financial services client, developing data pipelines and predictive models in Python and SQL, and contributing to AI and data strategy for a global banking client.",
  },
  {
    company: "Merck Sharp & Dohme (MSD)",
    date: "Jun 2025 – Jun 2026",
    role: "Machine Learning Scientist · London",
    description:
      "Led independent ML research on a 550k-sample clinical dataset, applying unsupervised learning with MCA dimensionality reduction on HPC/GPU infrastructure. Designed model selection frameworks using ARI cross-agreement, BIC, silhouette scoring, and bootstrap resampling. Engineered reproducible ML and proteomics QC pipelines adopted as the departmental standard. Contributed findings to a poster at an international neuroscience symposium in Boston.",
  },
  {
    company: "Spookfish Innovations",
    date: "Jul 2024 – Sep 2024",
    role: "Deep Learning Engineer Intern · Bengaluru, India",
    description:
      "Led model selection across instance segmentation architectures (YOLOv9, RTMDet, Mask R-CNN) for a real-time ad insertion system. Deployed a real-time inference engine integrating OpenCV with PyTorch for frame-accurate ad composition.",
  },
];
