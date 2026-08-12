import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Spurti",
  description:
    "Systems, models, and tools I've built. Detailed case studies on the engineering decisions, constraints, and results behind each one.",
};

const allProjects = [
  {
    index: "01",
    slug: "ntire",
    title: "NTIRE 2026 — Efficient Low-Light Image Enhancement",
    subtitle: "Building an image enhancement model under a strict computational budget.",
    description: (
      <>
        <p>
          The challenge was not simply to make an image enhancement model perform better. It was to make it small enough to be useful. Working under a <strong>1 MB model-size constraint</strong> forced me to think carefully about architecture, parameter efficiency, and which improvements were actually worth their computational cost.
        </p>
        <p>
          I worked on a lightweight image enhancement architecture designed around efficient feature extraction and residual learning, with approximately <strong>250K parameters</strong> while remaining under <strong>1 MB</strong> in model size.
        </p>
        <p>
          The work ranked <strong>14th among 1,500+ participants</strong> and was included in the <strong>CVPR 2026 Workshop Proceedings</strong>, with me as a co-author.
        </p>
      </>
    ),
    impactLabel: "Results",
    impact: [
      { label: "Model size", value: "<1 MB" },
      { label: "Parameters", value: "~250K" },
      { label: "Rank", value: "14 / 1,500+" },
      { label: "Publication", value: "CVPR 2026 Workshop Proceedings" }
    ],
    tags: ["PyTorch", "Computer Vision", "Efficient ML", "ONNX"],
  },
  {
    index: "02",
    slug: "sih",
    title: "E-Sannidhi",
    subtitle: "An offline-first telemedicine platform designed for low-connectivity environments.",
    description: (
      <>
        <p>
          Built during the <strong>Smart India Internal Hackathon 2025</strong>, E-Sannidhi was designed to connect healthcare workers and patients in rural areas where reliable internet connectivity could not be assumed.
        </p>
        <p>
          The system was built around an offline-first approach: healthcare workers needed to continue capturing patient workflows without a network connection and synchronize their data when connectivity returned. That made local persistence via IndexedDB, synchronization, and conflict handling central design concerns rather than features added after the interface was built.
        </p>
        <p>
          <strong>Our team ranked 31st among 200+ teams.</strong>
        </p>
      </>
    ),
    impactLabel: "Key ideas",
    impact: [
      { label: "", value: "Healthcare worker–patient workflows" },
      { label: "", value: "Offline-first data capture" },
      { label: "", value: "IndexedDB persistence" },
      { label: "", value: "Synchronization when connectivity returns" }
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "IndexedDB", "PostgreSQL"],
  },
  {
    index: "03",
    slug: "emotion-assistant",
    title: "Emotion-Aware Assistant",
    subtitle: "Exploring how emotion recognition and language models can make conversational systems more context-aware.",
    description: (
      <>
        <p>
          This project explored a conversational AI system that uses detected emotional context to influence how responses are generated.
        </p>
        <p>
          The system combined <strong>emotion classification with a language model</strong>, using the detected emotional state as additional context rather than treating conversation generation as an isolated language-model problem.
        </p>
        <p>
          The work involved experimenting with transformer-based emotion modelling, sequence modelling, and conversational response generation, with a focus on understanding how emotional context could be incorporated into an interactive system.
        </p>
      </>
    ),
    impactLabel: "Key ideas",
    impact: [
      { label: "", value: "Emotion-aware conversational responses" },
      { label: "", value: "Transformer-based emotion modelling" },
      { label: "", value: "Sequence modelling" },
      { label: "", value: "Context-aware response generation" }
    ],
    tags: ["Python", "PyTorch", "NLP", "Transformers", "LSTM", "LLMs"],
  },
  {
    index: "04",
    slug: "campkart",
    title: "CampKart",
    subtitle: "A full-stack campground marketplace built around listings, authentication, and transactional web interactions.",
    description: (
      <>
        <p>
          CampKart is a full-stack marketplace for managing campground listings and user interactions. I built the application across the frontend and backend, connecting a responsive React interface to RESTful APIs and a PostgreSQL database.
        </p>
        <p>
          The system supports CRUD operations, user authentication, protected routes, reviews, and listing management, giving me experience working across the complete flow from user interaction to backend API and persistent data.
        </p>
      </>
    ),
    impactLabel: "Key features",
    impact: [
      { label: "Marketplace", value: "Campground listing and management" },
      { label: "Authentication", value: "Secure login and protected routes" },
      { label: "Backend", value: "RESTful APIs with Express.js" },
      { label: "Database", value: "PostgreSQL-backed persistence" },
      { label: "User interactions", value: "Reviews and listing operations" },
      { label: "Frontend", value: "Responsive React interfaces" }
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Authentication"],
  },
];

import { FadeIn } from "@/components/ui/FadeIn";

export default function ProjectsPage() {
  const ntire = allProjects[0];
  const sih = allProjects[1];
  const emotion = allProjects[2];
  const campkart = allProjects[3];

  return (
    <div className="space-y-24 pb-12">
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-3">
        <FadeIn delay={0.1} direction="up">
          <h1
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Projects
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="text-sm leading-[1.8] max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Systems, models, and tools I&apos;ve built. Detailed case studies on the engineering decisions, constraints, and results behind each one.
          </p>
        </FadeIn>
      </section>

      {/* ── Project Layout ──────────────────────────────────────── */}
      <section className="space-y-12">
        {/* NTIRE (Featured) */}
        <FadeIn delay={0.3} direction="up">
          <div
            className="group block card p-8 sm:p-12 space-y-8"
            style={{ border: "1px solid var(--border)", background: "rgba(17, 24, 42, 0.6)" }}
          >
            <div className="space-y-3 border-b pb-6" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="text-sm font-mono shrink-0" style={{ color: "var(--accent)" }}>
                  {ntire.index}
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                >
                  {ntire.title}
                </h2>
              </div>
              <p className="text-base font-mono sm:pl-8" style={{ color: "var(--text-muted)" }}>
                {ntire.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 sm:pl-8">
              <div className="space-y-5 text-sm leading-[1.9]" style={{ color: "var(--text-secondary)" }}>
                {ntire.description}
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  {ntire.impactLabel}
                </h3>
                <ul className="space-y-4 text-sm">
                  {ntire.impact.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-1 border-l-2 pl-3" style={{ borderColor: "var(--border-subtle)" }}>
                      <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                      <span className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Technologies</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ntire.tags.map(tag => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* E-Sannidhi & Emotion-Aware Assistant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[sih, emotion].map((project, i) => (
            <FadeIn key={project.slug} delay={0.2 + i * 0.15} direction="up" className="h-full">
              <div
                className="group flex flex-col card p-6 sm:p-8 space-y-6 h-full"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                <div className="space-y-2 flex-grow">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      {project.index}
                    </span>
                    <h2
                      className="text-lg font-semibold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-sm font-mono pt-1 pb-3" style={{ color: "var(--accent)" }}>
                    {project.subtitle}
                  </p>
                  <div className="space-y-4 text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                  <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {project.impactLabel}
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                        <span>
                          {item.label && <strong style={{ color: "var(--text-primary)" }}>{item.label}</strong>}
                          {item.label && <span className="mx-1" style={{ color: "var(--text-muted)" }}>—</span>}
                          <span style={{ color: "var(--text-primary)" }}>{item.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border-subtle)] px-2 py-0.5 rounded">{tag}</span>
                    ))}
                    {project.tags.length > 4 && <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border-subtle)] px-2 py-0.5 rounded">+{project.tags.length - 4}</span>}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CampKart */}
        <FadeIn delay={0.4} direction="up">
          <div
            className="group flex flex-col md:flex-row gap-6 card p-6 sm:p-8 items-start"
            style={{ border: "1px solid var(--border-subtle)", background: "transparent" }}
          >
            <div className="md:w-1/3 space-y-2">
               <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {campkart.index}
                  </span>
                  <h2
                    className="text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {campkart.title}
                  </h2>
                </div>
                <p className="text-xs font-mono pt-1" style={{ color: "var(--accent)" }}>
                  {campkart.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {campkart.tags.map(tag => (
                    <span key={tag} className="text-[0.65rem] font-mono text-[var(--text-muted)] uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
            </div>
            <div className="md:w-2/3 space-y-4 text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              {campkart.description}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
