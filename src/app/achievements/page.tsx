import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Spurti",
  description:
    "Recognition, publications, and milestones that have shaped my work so far.",
};

export default function AchievementsPage() {
  return (
    <div className="space-y-24">
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-3">
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Achievements
        </h1>
        <p className="text-sm leading-[1.8] max-w-lg" style={{ color: "var(--text-secondary)" }}>
          Recognition, publications, and milestones that have shaped my work so far.
        </p>
      </section>

      {/* ── Recognition ─────────────────────────────────────────── */}
      <section className="space-y-12 max-w-3xl pt-8 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Recognition
        </h2>
        
        <div className="space-y-16">
          
          <article className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Amazon ML Summer School 2026</h3>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Selected among approximately <strong>3,000 students from 134,000+ applicants nationwide</strong> for Amazon&apos;s Machine Learning Summer School 2026.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>NTIRE 2026 — CVPR Workshop</h3>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ranked <strong>14 / 1,500+ · Top 0.9%</strong> in the NTIRE 2026 Efficient Low-Light Image Enhancement challenge.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Our work on lightweight image enhancement was included in the <strong>CVPR 2026 Workshop Proceedings</strong>, with the model designed under a strict <strong>1 MB model-size constraint</strong> and approximately <strong>250K parameters</strong>.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Amazon ML Challenge 2025</h3>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ranked <strong>AIR 241 / 82,000+ · Top 0.3%</strong> in the Amazon ML Challenge 2025 for <strong>Multimodal Price Prediction</strong>.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Final SMAPE: <strong>45.47%</strong>.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>WiDS Datathon 2025</h3>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ranked <strong>186th among 2,000+ participants</strong> in the WiDS Datathon 2025.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Smart India Internal Hackathon 2025</h3>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Ranked <strong>31st among 200+ teams</strong> in the Smart India Internal Hackathon 2025.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Worked on <strong>E-Sannidhi</strong>, an offline-first telemedicine platform designed to connect healthcare workers and patients in environments where reliable internet connectivity could not be assumed.
            </p>
          </article>
        </div>
      </section>

      {/* ── Publications & Research ─────────────────────────────── */}
      <section className="space-y-12 max-w-3xl pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Publications & Research
        </h2>
        
        <div className="space-y-16">
          <article className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                <Link href="/projects/ntire" className="hover:underline hover:text-[var(--text-primary)] transition-colors">
                  NTIRE 2026 — Efficient Low-Light Image Enhancement
                </Link>
              </h3>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                CVPR 2026 Workshop Proceedings
              </p>
            </div>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Co-authored work on efficient low-light image enhancement, focusing on achieving competitive enhancement quality under strict computational and model-size constraints.
            </p>
            
            <div className="flex flex-col gap-1 text-sm font-mono mt-4 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Rank:</strong> <span style={{ color: "var(--text-secondary)" }}>14 / 1,500+ · Top 0.9%</span>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Model:</strong> <span style={{ color: "var(--text-secondary)" }}>~250K parameters · &lt;1 MB</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Leadership & Involvement ────────────────────────────── */}
      <section className="space-y-8 max-w-3xl pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Leadership & Involvement
        </h2>
        
        <article className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Research & Documentation Lead
            </h3>
            <p className="text-sm font-mono text-[var(--text-secondary)]">
              <strong style={{ color: "var(--text-primary)" }}>Word&apos;s Worth Club · KLE Technological University</strong>
              <br />
              <em className="italic">2023 – Present</em>
            </p>
          </div>
          
          <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
            Led research and documentation across <strong>14 workshops and 8 competitions</strong>, while also representing KLE Technological University at <strong>2 intercollegiate events</strong>.
          </p>
          <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
            The role has involved maintaining institutional knowledge, preparing event documentation, coordinating information across teams, and making research and documentation useful beyond the immediate event.
          </p>
        </article>
      </section>

      {/* ── What's next ────────────────────────────────────────── */}
      <section className="space-y-6 max-w-2xl pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          What&apos;s next
        </h2>
        <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
          Recognition is only one part of the story. The projects and experiences behind it are where most of the learning happened.
        </p>
        
        <div className="flex flex-col gap-4 pt-4">
          <Link href="/projects" className="btn-ghost w-fit">
            Explore my projects →
          </Link>
          <Link href="/experience" className="btn-ghost w-fit">
            View my experience →
          </Link>
          <Link href="/field-notes" className="btn-ghost w-fit">
            Read my field notes →
          </Link>
        </div>
      </section>

    </div>
  );
}
