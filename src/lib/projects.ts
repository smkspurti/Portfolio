export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  narrative: string;
  insight: string;
  problem: string;
  metrics: Metric[];
  tags: string[];
  tier: 1 | 2;
}

export const projects: Project[] = [
  {
    slug: "ntire",
    title: "NTIRE 2026 — Efficient Low-Light Image Enhancement",
    narrative:
      "The challenge was not simply to make an image enhancement model perform better. It was to make it small enough to be useful. Working under a 1 MB model constraint forced me to think much more carefully about architecture, parameter efficiency, and which improvements were actually worth their computational cost.",
    insight:
      "Constraints don't limit creativity. They eliminate the luxury of choosing badly.",
    problem:
      "Designed a lightweight computer vision model constrained under 1 MB for the CVPR 2026 NTIRE workshop challenge.",
    metrics: [
      { label: "Parameters", value: "~250K" },
      { label: "Model Size", value: "<1 MB" },
      { label: "Rank", value: "14 / 1,500+" },
      { label: "Venue", value: "CVPR 2026 Workshop" },
    ],
    tags: ["PyTorch", "Computer Vision", "Efficient ML", "ONNX"],
    tier: 1,
  },
  {
    slug: "sih",
    title: "E-Sannidhi",
    narrative:
      "Built during the Smart India Hackathon, E-Sannidhi was designed to connect healthcare workers and patients in places where reliable connectivity couldn't be assumed. The system had to let users continue working offline and reconcile data when connectivity returned, making synchronization and conflict handling central to the design rather than something added after the UI was built.",
    insight:
      "When you can't assume a network connection, you stop taking consistency for granted.",
    problem:
      "Built an offline-first telemedicine platform for rural healthcare workers with local persistence via IndexedDB and synchronization on reconnect.",
    metrics: [
      { label: "Rank", value: "31 / 200+ teams" },
    ],
    tags: ["React", "Vite", "Node.js", "Express", "IndexedDB", "PostgreSQL"],
    tier: 1,
  },
  {
    slug: "emotion-assistant",
    title: "Emotion-Aware Assistant",
    narrative:
      "This project explored a conversational AI system that uses detected emotional context to influence how responses are generated. The system combined emotion classification with a language model, using the detected emotional state as additional context rather than treating conversation generation as an isolated language-model problem.",
    insight:
      "A plausible response and a useful response are not the same thing.",
    problem:
      "Built a conversational AI system combining transformer-based emotion classification with a language model to explore context-aware response generation.",
    metrics: [],
    tags: ["Python", "PyTorch", "NLP", "Transformers", "LLMs"],
    tier: 1,
  },
  {
    slug: "campkart",
    title: "CampKart",
    narrative:
      "CampKart is a full-stack marketplace for managing campground listings and user interactions. I built the application across the frontend and backend, connecting a responsive React interface to RESTful APIs and a PostgreSQL database.",
    insight:
      "Before you add a cache, make sure you've actually optimized the query.",
    problem:
      "Full-stack campground marketplace with listings, authentication, and transactional web interactions.",
    metrics: [],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Authentication"],
    tier: 2,
  },
];
