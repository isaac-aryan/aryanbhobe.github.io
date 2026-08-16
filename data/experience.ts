export interface ExperienceEntry {
  company: string;
  date: string;
  role: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Accenture",
    date: "Jun 2026 – Sep 2026",
    role: "AI & Data Summer Analyst · London",
    bullets: [
      "Building production agentic AI pipelines on GCP using Google ADK with agentic RAG over a Supabase vector store; developed and configured MCP servers to expose enterprise tools and data sources to agent runtimes, with services built in FastAPI deployed via Cloud Run with Apigee governance, supporting a major UK telecommunications client.",
      "Architected a network-isolated enterprise RAG system on Azure for a major energy client: Azure AI Foundry and AI Search over confidential SharePoint data, Cosmos DB for memory persistence, React/FastAPI on App Service; all inter-service traffic enforced via VNet integration and private endpoints; researched productionisation pathway from prototype to secure enterprise deployment.",
    ],
  },
  {
    company: "Merck Sharp & Dohme (MSD)",
    date: "Jun 2025 – Jun 2026",
    role: "Machine Learning Scientist · London",
    bullets: [
      "Led independent ML research on a 550k-sample dataset across 18 relational tables; applied unsupervised learning (K-Means, GMM, HDBSCAN) with MCA dimensionality reduction to uncover clinically meaningful patient subtypes on GPU-accelerated HPC.",
      "Designed a systematic model selection framework using ARI agreement between K-Means and GMM, k-sweep and hyperparameter optimisation via BIC and silhouette scoring; validated cluster stability via bootstrap resampling and cross-referenced against HDBSCAN density-based clustering.",
      "Engineered reproducible ML pipelines with versioned configs and modular code; produced clinical spider plots and enrichment heatmaps, presenting findings to senior leadership in the Neuroscience AI team.",
      "Deployed end-to-end proteomics QC pipelines adopted as the departmental standard: PCA-based outlier detection and KNN/Random Forest imputation on high-dimensional biological data, documented as a reproducible framework for biomedical agent training.",
      "Conducted longitudinal modelling across cohorts via regression, hierarchical clustering, and Jaccard similarity; applied hypothesis testing (t-test, chi-squared), contributing to a poster at the Boston neuroscience symposium.",
    ],
  },
  {
    company: "Spookfish Innovations",
    date: "Jul 2024 – Sep 2024",
    role: "Deep Learning Engineer Intern · Bengaluru, India",
    bullets: [
      "Led model selection across instance segmentation architectures (YOLOv9, RTMDet, Mask R-CNN) for a real-time ad-insertion system, configuring custom data loaders and augmentation strategies in PyTorch.",
      "Deployed real-time inference engine integrating OpenCV with PyTorch, implementing image warping and dynamic mask composition via bitwise operations for frame-accurate ad insertion.",
    ],
  },
];
