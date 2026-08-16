export type ProjectCategory = "personal" | "university";

export interface ProjectLink {
  label: string;
  href: string;
  icon: "document" | "github" | "external";
  status?: "todo";
}

export interface ProjectEmbed {
  type: "pdf";
  src: string;
  title: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  badge: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  embed?: ProjectEmbed;
  needsContent?: boolean;
}

export const projects: Project[] = [
  // --- Personal ---
  {
    slug: "cds-spread-svr",
    name: "CDS Spread Modelling with Support Vector Regression",
    category: "personal",
    badge: "Quant Finance",
    description:
      "End-to-end SVR pipeline estimating 5-year Credit Default Swap spread proxies across 34 US companies (2018–2023), with features sourced from the FRED API and Yahoo Finance. Achieved R²=0.849 on a temporally stratified test set. Walk-forward validation across 16 quarterly folds identified a 4.6× performance degradation during COVID-19 stress quarters, quantifying model limits under regime change.",
    tags: ["Python", "scikit-learn", "pandas", "FRED API", "SHAP"],
    links: [
      { label: "Report", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
  },
  {
    slug: "equity-volatility-garch-vs-ml",
    name: "Equity Volatility Forecasting: GARCH vs. ML under Regime Shifts",
    category: "personal",
    badge: "Quant Finance",
    description:
      "1-day-ahead SPY variance forecasting pipeline across 13 years, comparing GARCH(1,1), EGARCH, GJR-GARCH, and GARCH-t against XGBoost and Random Forest via 6-fold walk-forward backtesting. Random Forest achieved 14% lower RMSE than best GARCH (Diebold-Mariano confirmed), but GARCH-t outperformed all ML models on QLIKE loss by 35× during crisis regimes. SHAP analysis identified VIX as the dominant predictive feature.",
    tags: ["Python", "statsmodels", "XGBoost", "SHAP"],
    links: [
      { label: "Report", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
  },
  {
    slug: "european-options-pricing-library",
    name: "European Options Pricing Library",
    category: "personal",
    badge: "Quant Engineering",
    description:
      "C++ library implementing Black-Scholes, binomial trees, and Monte Carlo simulation for pricing European and American options. Computes option Greeks (delta, gamma, vega) with object-oriented design and smart pointers. Validated against analytical benchmarks across a range of strike prices and volatility parameters.",
    tags: ["C++", "CMake", "Monte Carlo", "Black-Scholes"],
    links: [{ label: "Code", href: "#", icon: "github", status: "todo" }],
  },
  {
    slug: "unet-microcontroller-segmentation",
    name: "U-Net for Semantic Segmentation of Microcontroller Images",
    category: "personal",
    badge: "Artificial Intelligence, Computer Vision",
    description:
      "TODO: Describe the U-Net architecture used, the microcontroller image dataset, the segmentation task and label classes, the training setup, and quantitative results (e.g. IoU / Dice score).",
    tags: ["Python", "PyTorch", "Computer Vision"],
    links: [{ label: "Code", href: "#", icon: "github", status: "todo" }],
    needsContent: true,
  },

  // --- University ---
  {
    slug: "convolutional-autoencoder-image-compression",
    name: "Convolutional Autoencoder for Lossy Image Compression",
    category: "university",
    badge: "Deep Learning",
    description:
      "Designed and trained a convolutional autoencoder for lossy image compression, exploring the tradeoff between compression ratio and reconstruction quality. TODO: add architecture details, dataset, PSNR/SSIM results, and codec comparisons.",
    tags: ["Python", "PyTorch", "CNN"],
    links: [{ label: "Code", href: "#", icon: "github", status: "todo" }],
    needsContent: true,
  },
  {
    slug: "bayesian-cnn-diabetic-retinopathy",
    name: "Bayesian CNN for Diabetic Retinopathy Diagnosis",
    category: "university",
    badge: "Research Paper",
    description:
      "Research paper on Bayesian convolutional neural networks for diabetic retinopathy classification from retinal fundus images, with a focus on uncertainty quantification for clinical decision support. TODO: add dataset, architecture, accuracy/AUC results, and calibration analysis.",
    tags: ["Python", "PyTorch", "Bayesian DL", "Medical Imaging"],
    links: [
      { label: "Paper", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
    needsContent: true,
  },
  {
    slug: "forest-fire-spread-regression",
    name: "Forest Fire Spread Modelling with Regression ML",
    category: "university",
    badge: "Research Poster",
    description:
      "Research poster modelling forest fire spread dynamics using regression-based machine learning, analysing environmental and meteorological features as predictors of fire behaviour. TODO: add dataset, models, findings, and evaluation metrics.",
    tags: ["Python", "scikit-learn", "Regression"],
    links: [
      {
        label: "Open full screen",
        href: "/posters/forest-fire-poster.pdf",
        icon: "document",
      },
    ],
    embed: {
      type: "pdf",
      src: "/posters/forest-fire-poster.pdf",
      title: "Forest Fire Spread Modelling Poster",
    },
    needsContent: true,
  },
  {
    slug: "lapgan-laplacian-gan",
    name: "Exploring Laplacian Generative Adversarial Networks (LAPGAN)",
    category: "university",
    badge: "Research Paper",
    description:
      "TODO: Summarize the LAPGAN architecture explored, the Laplacian pyramid generative approach, datasets/experiments run, and key findings.",
    tags: ["Python", "PyTorch", "GAN", "Generative Modelling"],
    links: [
      { label: "Paper", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
    needsContent: true,
  },
];
