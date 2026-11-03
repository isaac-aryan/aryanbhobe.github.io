import type { PosterImage } from "@/components/ui/PosterEmbed";

export interface ExperienceEntry {
  company: string;
  date: string;
  role: string;
  bullets: string[];
  logo?: string;
  poster?: PosterImage;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Accenture",
    date: "Jun 2026 – Sep 2026",
    role: "AI & Data Summer Analyst · London, United Kingdom",
    logo: "/logos/accenture.png",
    bullets: [
      "Building production agentic AI pipelines on GCP using Google ADK with agentic RAG over a Supabase vector store; developed and configured MCP servers to expose enterprise tools and data sources to agent runtimes, with services built in FastAPI deployed via Cloud Run with Apigee governance, supporting a major UK telecommunications client.",
      "Architected a network-isolated enterprise RAG system on Azure for a major energy client: Azure AI Foundry and AI Search over confidential SharePoint data, Cosmos DB for memory persistence, React/FastAPI on App Service; all inter-service traffic enforced via VNet integration and private endpoints; researched productionisation pathway from prototype to secure enterprise deployment.",
      "Led design of C-suite thought leadership on digital transformation and AI for the Aerospace & Defence practice, recognised by the Global Lead for Maritime and presented to 35+ global leadership members, with the material slated for reuse in conferences and marketing; synthesised 15+ RFI responses, credentials and leadership articles into a commercial view of the industry's digital and AI priorities.",
      "Engineered a multi-agent AI codebase documentation system (LangGraph) used by 4 engineers, accelerating the project by ~1.5 weeks; orchestrated specialist agents in sequential and parallel workflows, with Pydantic schemas and prompt engineering resulting in 0 schema failures across 50 test runs.",
    ],
  },
  {
    company: "Merck Sharp & Dohme (MSD)",
    date: "Jun 2025 – Jun 2026",
    role: "Machine Learning Scientist · London, United Kingdom",
    logo: "/logos/msd.png",
    bullets: [
      "Led independent ML research on a 550k-sample dataset across 18 relational tables; applied unsupervised learning (K-Means, GMM, HDBSCAN) with MCA dimensionality reduction to uncover clinically meaningful patient subtypes on GPU-accelerated HPC.",
      "Evaluated 20+ bioinformatics and ML research papers to shortlist candidate methods, then designed a systematic model selection framework using ARI agreement between K-Means and GMM, k-sweep and hyperparameter optimisation via BIC and silhouette scoring; validated cluster stability via bootstrap resampling and cross-referenced against HDBSCAN density-based clustering.",
      "Engineered reproducible ML pipelines with versioned configs and modular code; produced clinical spider plots and enrichment heatmaps, presenting findings to senior leadership and wet-lab biologists in the Neuroscience AI team, prompting follow-up requests, and presenting methodology directly to the VP in Epidemiology.",
      "Deployed end-to-end proteomics QC pipelines adopted as the departmental standard: PCA-based outlier detection and KNN/Random Forest imputation on high-dimensional biological data, documented as a reproducible framework for biomedical agent training.",
      "Conducted longitudinal modelling across cohorts via regression, hierarchical clustering, and Jaccard similarity; applied hypothesis testing (t-test, chi-squared), earning a co-author credit for data analysis and visualisation on a poster at the Boston neuroscience symposium.",
    ],
    poster: {
      type: "image",
      src: "/posters/msd-placement-poster-preview.png",
      alt: "MSD Machine Learning & Computational Biology Industrial Placement poster",
      linkHref: "/posters/msd-placement-poster.pdf",
    },
  },
  {
    company: "Spookfish Innovations",
    date: "Jul 2024 – Sep 2024",
    role: "Deep Learning Engineer Intern · Bengaluru, India",
    logo: "/logos/spookfish.jpg",
    bullets: [
      "In an agile ML team, led model selection across instance segmentation architectures (YOLOv9, RTMDet, Mask R-CNN) for a real-time ad-insertion system, configuring custom data loaders, transfer learning and augmentation strategies in PyTorch to improve accuracy across IoU 0.5 to 0.95; tracked experiments in Weights & Biases and handed over a documented PoC to engineers.",
      "Deployed real-time inference engine integrating OpenCV with PyTorch, implementing image warping and dynamic mask composition via bitwise operations, with temporal consistency enforced through object tracking for frame-accurate ad insertion.",
    ],
  },
];
