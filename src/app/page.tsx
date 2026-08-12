import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spurti | Software Engineer",
  description:
    "Computer Science undergraduate building software at the intersection of backend engineering, distributed systems, and intelligent applications.",
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT RULE — NON-NEGOTIABLE
// All copy is final and approved. Do NOT rewrite, paraphrase, embellish,
// reorder, or "improve" any wording. Do NOT invent metrics, technologies,
// rankings, or outcomes. Do NOT add or remove sections.
// Any change to content requires explicit user approval.
// ─────────────────────────────────────────────────────────────────────────────

interface SelectedProject {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  result: string | null;
  tags: string[];
}

const selectedWork: SelectedProject[] = [
  {
    index: "01",
    slug: "ntire",
    title: "NTIRE 2026",
    subtitle: "Building an image enhancement model under a strict computational budget.",
    description:
      "The challenge was not simply to make an image enhancement model perform better. It was to make it small enough to be useful. Working under a 1 MB model constraint forced me to think much more carefully about architecture, parameter efficiency, and which improvements were actually worth their computational cost.",
    result: "~250K parameters · <1 MB model · Rank 14 / 1,500+ · CVPR 2026 Workshop",
    tags: ["PyTorch", "Computer Vision", "Efficient ML", "ONNX"],
  },
  {
    index: "02",
    slug: "sih",
    title: "E-Sannidhi",
    subtitle:
      "An offline-first telemedicine platform designed for low-connectivity environments.",
    description:
      "Built during the Smart India Internal Hackathon 2025, E-Sannidhi was designed to connect healthcare workers and patients in places where reliable connectivity couldn't be assumed. The system had to let users continue working offline and reconcile data when connectivity returned, making synchronization and conflict handling central to the design rather than something added after the UI was built.",
    result: "Rank 31 / 200+ teams · Offline-first data capture",
    tags: ["React", "Node.js", "PostgreSQL", "IndexedDB"],
  },
  {
    index: "03",
    slug: "emotion-assistant",
    title: "Emotion-Aware Assistant",
    subtitle:
      "Exploring how emotion recognition and language models can make conversational systems more context-aware.",
    description:
      "The system combined emotion classification with a language model, using the detected emotional state as additional context rather than treating conversation generation as an isolated language-model problem.",
    result: "Transformer-based emotion modelling",
    tags: ["Python", "PyTorch", "NLP", "Transformers", "LLMs"],
  },
];

const experience = [
  { org: "CDPI",     role: "Backend Engineering",          period: "2026–Present" },
  { org: "CEVI",     role: "Research & Computer Vision",   period: "2025–Present" },
  { org: "Knitspace",role: "Software Engineering",         period: "2025" },
];

const featuredNotes = [
  {
    title: "On Reading Other People's Code",
    description:
      "What understanding an existing system taught me about making changes without breaking things.",
    href: "/field-notes",
  },
  {
    title: "What Offline-First Development Taught Me",
    description:
      "Why unreliable connectivity changes assumptions about state, synchronization, and consistency.",
    href: "/field-notes",
  },
];

import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="space-y-28">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-8">
        <FadeIn delay={0.1}>
          <h1
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.08]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Building systems that work before making them clever.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4 max-w-xl">
            <p className="text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              I&apos;m Spurti — a Computer Science undergraduate building software at the
              intersection of backend engineering, distributed systems, and intelligent
              applications.
            </p>
            <p className="text-base leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              I like understanding how things work beneath the abstraction — whether that
              means tracing a request through a distributed service, understanding what a
              model actually learned, or discovering that the obvious solution isn&apos;t
              always the right one.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-5">
            <Link href="/projects" className="btn-primary">
              View my work →
            </Link>
            <a href="/Spurti_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Download resume
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            KLE Technological University · Computer Science · 2027
          </p>
        </FadeIn>
      </section>

      {/* ── At a glance ───────────────────────────────────────── */}
      <section className="space-y-4">
        <FadeIn delay={0.1}>
          <h2
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            At a glance
          </h2>
        </FadeIn>
        <div
          className="grid sm:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border-subtle)", background: "var(--border-subtle)" }}
        >
        {[
          {
            label: "CVPR 2026 Workshop",
            value: "NTIRE 2026 · Published in the Workshop Proceedings",
          },
          {
            label: "Amazon ML Summer School 2026",
            value: "Selected among ~3,000 from 134,000+ applicants",
          },
          {
            label: "Backend Engineering",
            value: "CDPI · DIGIT 3.0 · Go · Kafka · PostgreSQL",
          },
        ].map((item, index) => (
          <FadeIn key={item.label} delay={0.2 + index * 0.1}>
            <div
              className="px-5 py-4 space-y-1 h-full"
              style={{ background: "var(--bg-secondary)" }}
            >
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                {item.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.value}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────── */}
      <section className="space-y-8">
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Selected Work
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Three projects I keep coming back to.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">

          {selectedWork.map((project, index) => (
            <FadeIn key={project.slug} delay={0.2 + index * 0.1} direction="up">
              <div
                className="block card p-6 sm:p-8 space-y-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-muted)" }}>
                    {project.index}
                  </span>
                  <h3
                    className="text-base font-semibold tracking-tight"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-mono" style={{ color: "var(--accent)" }}>
                  {project.subtitle}
                </p>

                <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {project.result && (
                  <p className="text-sm font-mono" style={{ color: "var(--text-primary)", opacity: 0.65 }}>
                    {project.result}
                  </p>
                )}

                <div className="flex items-center pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <Link href="/projects" className="btn-ghost">
            Explore all projects →
          </Link>
        </FadeIn>
      </section>

      {/* ── Experience snapshot ───────────────────────────────── */}
      <section className="space-y-6">
        <FadeIn delay={0.1}>
          <h2
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Experience
          </h2>

          <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
            I&apos;ve spent the last couple of years moving between production software, backend
            systems, and computer vision research.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {experience.map((e, index) => (
            <FadeIn key={e.org} delay={0.2 + index * 0.1}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium w-20 shrink-0" style={{ color: "var(--text-primary)" }}>
                  {e.org}
                </span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {e.role}
                </span>
                <span className="text-xs font-mono ml-auto shrink-0" style={{ color: "var(--text-muted)" }}>
                  {e.period}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <Link href="/experience" className="btn-ghost">
            View full experience →
          </Link>
        </FadeIn>
      </section>

      {/* ── Field Notes ───────────────────────────────────────── */}
      <section className="space-y-5">
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Field Notes
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Short reflections on things I&apos;ve learned while building.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {featuredNotes.map((note, index) => (
            <FadeIn key={note.title} delay={0.2 + index * 0.1}>
              <Link
                href={note.href}
                className="block p-5 rounded-lg group transition-colors"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p
                      className="text-sm font-medium transition-colors group-hover:text-[var(--text-primary)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {note.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {note.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <Link href="/field-notes" className="btn-ghost">
            Read all field notes →
          </Link>
        </FadeIn>
      </section>

      {/* ── Let's talk ────────────────────────────────────────── */}
      <FadeIn delay={0.1}>
        <section
          className="rounded-xl p-8 sm:p-10 space-y-4"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        >
          <h2
            className="text-xl sm:text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.015em" }}
          >
            Let&apos;s talk.
          </h2>
          <p className="text-base max-w-lg leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
            I&apos;m always interested in good engineering problems, interesting research
            questions, and conversations that make me rethink something.
          </p>
          <div className="flex items-center gap-5 flex-wrap pt-1">
            <a href="https://www.linkedin.com/in/smkspurti/" target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn →</a>
            <a href="https://github.com/smkspurti" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub →</a>
            <a href="/Spurti_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Resume →</a>
            <a href="mailto:smkspurti@gmail.com" className="btn-ghost">Email →</a>
          </div>
        </section>
      </FadeIn>

    </div>
  );
}
