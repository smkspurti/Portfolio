import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Talk | Spurti",
  description: "Open to conversations about engineering, research, and interesting problems worth solving.",
};

export default function LetsTalkPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* ── Header & Intro ──────────────────────────────────── */}
      <section className="max-w-xl space-y-6">
        <div className="space-y-3 pb-2">
          <h1
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Let&apos;s Talk
          </h1>
          <p className="text-sm font-medium leading-[1.8]" style={{ color: "var(--text-primary)" }}>
            Open to conversations about engineering, research, and interesting problems worth solving.
          </p>
        </div>
        
        <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
          I&apos;m particularly interested in opportunities where I can work on backend systems, distributed software, and intelligent applications, especially where the problem sits somewhere between strong engineering and applied machine learning.
        </p>
        <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
          If you&apos;re building something interesting, working on a problem you&apos;d like to discuss, or think there might be a good fit, I&apos;d be happy to hear from you.
        </p>
      </section>

      {/* ── Find me ─────────────────────────────────────────── */}
      <section className="max-w-xl space-y-6 pt-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Find me
        </h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-[100px_1fr] items-baseline gap-4">
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>GitHub</span>
            <a href="https://github.com/smkspurti" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--accent)] hover:underline">
              github.com/smkspurti
            </a>
          </div>
          
          <div className="grid grid-cols-[100px_1fr] items-baseline gap-4">
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>LinkedIn</span>
            <a href="https://www.linkedin.com/in/smkspurti/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--accent)] hover:underline">
              linkedin.com/in/smkspurti/
            </a>
          </div>

          <div className="grid grid-cols-[100px_1fr] items-baseline gap-4">
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Email</span>
            <a href="mailto:smkspurti@gmail.com" className="text-sm font-mono text-[var(--accent)] hover:underline">
              smkspurti@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-[100px_1fr] items-baseline gap-4">
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Resume</span>
            <a href="/Spurti_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--accent)] hover:underline">
              Download Resume →
            </a>
          </div>
        </div>
      </section>

      {/* ── Currently Exploring ──────────────────────────────── */}
      <section className="max-w-xl space-y-5 pt-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Currently Exploring
        </h2>
        
        <div className="text-sm font-mono leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Distributed Systems <span style={{ color: "var(--border-subtle)" }}>·</span> Go &amp; Runtime Behaviour <span style={{ color: "var(--border-subtle)" }}>·</span> Efficient Machine Learning <span style={{ color: "var(--border-subtle)" }}>·</span> Search &amp; Retrieval Systems <span style={{ color: "var(--border-subtle)" }}>·</span> System Design <span style={{ color: "var(--border-subtle)" }}>·</span> Reinforcement Learning
        </div>
        
        <p className="text-sm leading-[1.8] italic" style={{ color: "var(--text-secondary)" }}>
          I&apos;m especially interested in the problems that appear when a good idea has to become a system that actually works.
        </p>
      </section>

      {/* ── Publication ──────────────────────────────────────── */}
      <section className="max-w-xl space-y-4 pt-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Publication
        </h2>
        
        <div className="space-y-1">
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            NTIRE 2026 — Efficient Low-Light Image Enhancement
          </h3>
          <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
            CVPR 2026 Workshop Proceedings · Co-author
          </p>
        </div>
        
        <div>
          <a 
            href="https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Yan_NTIRE_2026_Challenge_on_Efficient_Low_Light_Image_Enhancement_Methods_CVPRW_2026_paper.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-mono text-[var(--accent)] hover:underline"
          >
            Read the paper →
          </a>
        </div>
      </section>

      {/* ── Availability ─────────────────────────────────────── */}
      <section className="max-w-xl space-y-3 pt-10 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Availability
        </h2>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-[1.8]" style={{ color: "var(--text-primary)" }}>
            Open to 2027 new-grad software engineering opportunities, particularly in backend systems, distributed systems, and applied machine learning.
          </p>
        </div>
      </section>

    </div>
  );
}
