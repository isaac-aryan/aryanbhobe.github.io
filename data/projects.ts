export type ProjectCategory = "personal" | "university";

export interface ProjectLink {
  label: string;
  href: string;
  icon: "document" | "github" | "external";
  status?: "todo";
}

export interface ProjectImage {
  type: "image";
  src: string;
  alt: string;
  linkHref?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  badge: string;
  description?: string;
  bullets?: string[];
  tags: string[];
  links: ProjectLink[];
  image?: ProjectImage;
  needsContent?: boolean;
}

export const projects: Project[] = [
  // --- Personal ---
  {
    slug: "glencore-quant-research-multi-agent-platform",
    name: "Glencore Quant Research & Multi-Agent Platform",
    category: "personal",
    badge: "Quant Research, Agentic AI",
    bullets: [
      "Conducted quantitative analysis of Glencore (GLEN.L), demonstrating that the apparent annual price cycle was attributable to semi-annual dividend adjustments rather than market seasonality, via stationarity tests, spectral analysis, and calendar decomposition.",
      "Developed GJR-GARCH volatility models and commodity market analyses, confirming persistent volatility clustering and leverage effects while identifying copper prices as a statistically significant indicator of Glencore returns through Granger causality testing.",
      "Built an interactive quantitative research platform integrating walk-forward ML forecasting with an OpenAI multi-agent architecture (Agents SDK + FastMCP), enabling natural-language exploration of financial models through deployed analytical tools on Streamlit.",
    ],
    tags: ["Python", "OpenAI Agents SDK", "FastMCP"],
    links: [
      { label: "Report", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
      { label: "Demo", href: "#", icon: "external", status: "todo" },
    ],
  },
  {
    slug: "blacksite-ontology-agent-defence-supply-chain",
    name: "Blacksite: Ontology-Driven Agent for Defence Supply Chain Risk",
    category: "personal",
    badge: "Agentic AI, Systems Engineering",
    bullets: [
      "Designed a strict layered architecture where a formal domain ontology is the single source of truth for all application layers — REST API, graph store, LLM agent, and UI — with no upward imports permitted.",
      "Implemented a multi-turn agentic loop from scratch using the Anthropic tool use API. The loop dispatches typed tool calls to a NetworkX graph engine, injects results back into context, and terminates on a natural stop or iteration cap.",
      "Exposed the action layer via a FastAPI REST interface and Streamlit UI with live graph traversal, disruption simulation, and a structured audit trail of every agent action.",
    ],
    tags: ["Python", "FastAPI", "NetworkX", "Pydantic V2"],
    links: [
      { label: "Report", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
  },
  {
    slug: "cibs-competitive-intelligence-briefing-pipeline",
    name: "CIBS — Multi-Agent Competitive Intelligence Briefing Pipeline",
    category: "personal",
    badge: "Agentic AI, Data Pipelines",
    bullets: [
      "Built a 3-stage multi-agent pipeline (ParallelAgent → synthesis → formatting) using Google ADK, orchestrating concurrent web, news, and financial data collectors to cut end-to-end latency by ~66% versus sequential execution.",
      "Deployed as a production FastAPI service using a fire-and-forget job model (202 Accepted + polling) with Supabase-backed persistence and 24-hour result caching; containerised with Docker.",
      "Implemented an alternative MCP server (FastMCP, stdio transport) as an interchangeable tool-calling backend for the financial data agent, demonstrating MCP as a transport-layer abstraction rather than a fixed dependency.",
    ],
    tags: ["Python", "Google ADK", "FastAPI", "MCP", "Supabase"],
    links: [{ label: "Code", href: "#", icon: "github", status: "todo" }],
  },
  {
    slug: "equity-volatility-garch-vs-ml",
    name: "Equity Volatility Forecasting: GARCH vs. ML under Regime Shifts",
    category: "personal",
    badge: "Quant Finance",
    bullets: [
      "Benchmarked econometric (GARCH family) and machine learning models for 1-day-ahead SPY volatility forecasting over a 13-year period, motivated by applications in options pricing and Value-at-Risk estimation.",
      "Random Forest reduced forecasting RMSE by 14%, while GARCH-t achieved the lowest QLIKE loss during crisis regimes, demonstrating the robustness of heavy-tailed volatility models for tail-risk estimation.",
      "Identified a regime inversion in model performance: machine learning models deteriorated by 33–58% during COVID-19 stress periods while GARCH models became more reliable; SHAP analysis identified VIX as the dominant predictive feature.",
    ],
    tags: ["Python", "statsmodels", "XGBoost", "SHAP"],
    links: [
      { label: "Report", href: "#", icon: "document", status: "todo" },
      { label: "Code", href: "#", icon: "github", status: "todo" },
    ],
  },
  {
    slug: "cds-spread-svr",
    name: "CDS Spread Modelling with Support Vector Regression",
    category: "personal",
    badge: "Quant Finance",
    bullets: [
      "Developed an end-to-end Support Vector Regression framework for estimating 5-year CDS spread proxies for unrated firms using macroeconomic and equity market features, achieving R²=0.849 and RMSE=33.3 bps on a temporally held-out test set.",
      "Optimised an RBF SVR model through 5-fold cross-validation across 625 hyperparameter combinations, implementing leakage-free preprocessing and target transformation to ensure robust out-of-sample evaluation.",
      "Demonstrated a 4.6× degradation in forecasting accuracy during COVID-19 stress periods using expanding-window validation, highlighting regime dependence and model risk in production credit modelling.",
    ],
    tags: ["Python", "scikit-learn", "pandas", "FRED API", "SHAP"],
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
    bullets: [
      "Designed a custom CNN autoencoder (73M params, 4-block encoder/decoder with BatchNorm and LeakyReLU) achieving a 45:1 compression ratio on 150×225 RGB images, reducing 101,250 pixel values to a 2,250-dimensional bottleneck.",
      "Ran a systematic latent-space sweep across 5 compression ratios (12:1–50:1) and a 20-trial Optuna hyperparameter search (TPE sampler with pruning) to jointly optimise batch size, learning rate, weight decay, and optimiser choice against validation MSE.",
      "Diagnosed overfitting via train/validation divergence and resolved it through an LR scheduler and early stopping, improving test SSIM from 0.527 to 0.567 and PSNR from 19.6dB to 20.75dB; identified and empirically confirmed that data augmentation was mathematically incompatible with the reconstruction objective.",
    ],
    tags: ["Python", "PyTorch", "Optuna", "scikit-image"],
    links: [{ label: "Code", href: "#", icon: "github", status: "todo" }],
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
    image: {
      type: "image",
      src: "/posters/forest-fire-poster-preview.png",
      alt: "Forest Fire Spread Modelling Poster",
      linkHref: "/posters/forest-fire-poster.pdf",
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
