import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Experience | Spurti",
  description:
    "What I built, what I learned, and how working on real systems changed the way I approach engineering.",
};



export default function ExperiencePage() {
  return (
    <div className="space-y-24">

      {/* ── Header ──────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-3">
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Experience
        </h1>
        <p className="text-sm leading-[1.8] max-w-lg" style={{ color: "var(--text-secondary)" }}>
          What I built, what I learned, and how working on real systems changed the way I
          approach engineering.
        </p>
      </section>

      {/* ── Entries (Timeline Layout) ─────────────────────────── */}
      <div className="relative border-l border-[var(--border)] ml-3 md:ml-4 space-y-20 pb-12 mt-12">
        
        {/* ── 01 CDPI ───────────────────────────────────────── */}
        <FadeIn delay={0.2} direction="up">
          <article className="relative pl-8 md:pl-12 max-w-3xl space-y-8">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)]" />
            
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono shrink-0" style={{ color: "var(--accent)" }}>01</span>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Student Developer · Backend Engineering
                </h2>
              </div>
              <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                Centre for Digital Public Infrastructure (CDPI)
              </p>
              <p className="text-sm font-mono text-[var(--text-secondary)]">
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>eGovernments Foundation & Infosys</span> · Mar 2026 – Present
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
              {["Go", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "Distributed Systems"].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-2">
                  {tag}
                  {i < arr.length - 1 && <span style={{ color: "var(--border-subtle)" }}>·</span>}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                At CDPI, I work as part of a 4-member backend team on the migration of DIGIT 3.0&apos;s municipal services from Spring Boot to Go. The challenge is not simply rewriting services in another language — it is understanding an existing distributed system well enough to change its implementation without changing the behaviour that other services depend on.
              </p>
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I spearheaded the migration of <strong>two Spring Boot microservices</strong> to idiomatic Go, taking major ownership of the implementation. This work reduced container memory from <strong>~600 MB to &lt;100 MB per pod</strong> and cold-start time from <strong>15 s to &lt;100 ms</strong>. I also designed goroutine-based Kafka consumers using bounded channel semaphores, increasing event throughput by <strong>&gt;200% over the Java thread-pool baseline</strong>.
              </p>
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                On the data layer, I replaced JPA/Hibernate ORM with optimized <code className="text-[var(--accent)] font-mono text-xs bg-[var(--bg-secondary)] px-1 rounded">sqlx</code> executions and custom struct mappers, achieving an <strong>~50% reduction in query latency</strong>. I also worked with PostgreSQL schema design and targeted indexing for workflow state management, alongside Docker-based containerization and Kubernetes deployment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4 p-5 rounded-lg" style={{ background: "rgba(17, 24, 42, 0.4)", border: "1px solid var(--border-subtle)" }}>
                <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>What I worked on</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Service migration", value: "— Spring Boot → Go · 2 microservices" },
                    { label: "Messaging", value: "— Kafka · goroutines · bounded concurrency · >200% throughput" },
                    { label: "Data layer", value: "— PostgreSQL · sqlx · custom mappers · targeted indexing" },
                    { label: "Infrastructure", value: "— Docker · Kubernetes · distributed service deployment" },
                  ].map((h) => (
                    <li key={h.label} className="text-sm leading-relaxed">
                      <strong className="font-medium" style={{ color: "var(--text-primary)" }}>{h.label}</strong>
                      <span style={{ color: "var(--text-secondary)" }}> {h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4 p-5 rounded-lg" style={{ background: "rgba(17, 24, 42, 0.4)", border: "1px solid var(--border-subtle)" }}>
                <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Engineering impact</h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Container memory</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>~600 MB → &lt;100 MB per pod</span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Cold start</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>15 s → &lt;100 ms</span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Query latency</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>~50% reduction</span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Event throughput</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>&gt;200% over Java thread-pool baseline</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* ── 02 CEVI ───────────────────────────────────────── */}
        <FadeIn delay={0.3} direction="up">
          <article className="relative pl-8 md:pl-12 max-w-2xl space-y-8 pt-4">
            <div className="absolute -left-[4px] top-4 w-2 h-2 rounded-full bg-[var(--text-muted)] border-[1px] border-[var(--bg-primary)]" />
            
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-muted)" }}>02</span>
                <h2 className="text-xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Project Intern · Kalpith Project
                </h2>
              </div>
              <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                Centre for Visual Information Technology (CEVI)
              </p>
              <p className="text-sm font-mono text-[var(--text-secondary)]">
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Kalpith Project</span> · Oct 2025 – Present
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
              {["PyTorch", "Stable Diffusion", "NeRF", "Point Clouds", "Computer Vision", "Generative AI"].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-2">
                  {tag}
                  {i < arr.length - 1 && <span style={{ color: "var(--border-subtle)" }}>·</span>}
                </span>
              ))}
            </div>

            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              My work at CEVI spans two related problems: generating usable 3D assets from text-driven imagery and reconstructing missing structure in degraded heritage data. Working with incomplete geometry has made me think beyond whether a model produces a plausible output — a reconstruction can look convincing numerically while still being structurally wrong.
            </p>

            <div className="space-y-6 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
              <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>Text-to-3D Generative Pipeline</h3>
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I am building a multi-stage pipeline that moves from <strong>text prompt → Stable Diffusion image synthesis → NeRF-based 3D reconstruction → mesh generation → motion synthesis</strong>, with the goal of producing animatable 3D assets for heritage and architectural content.
              </p>
              
              <div className="p-5 rounded-lg space-y-4" style={{ background: "rgba(17, 24, 42, 0.4)", border: "1px solid var(--border-subtle)" }}>
                <h4 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Pipeline</h4>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] font-mono font-medium">
                  <div className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>Text Prompt</div>
                  <div className="text-[var(--text-muted)] rotate-90 sm:rotate-0 scale-75">→</div>
                  <div className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>Stable Diffusion</div>
                  <div className="text-[var(--text-muted)] rotate-90 sm:rotate-0 scale-75">→</div>
                  <div className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>Generated Image</div>
                  <div className="text-[var(--text-muted)] rotate-90 sm:rotate-0 scale-75">→</div>
                  <div className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>NeRF</div>
                  <div className="text-[var(--text-muted)] rotate-90 sm:rotate-0 scale-75">→</div>
                  <div className="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>Mesh</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
              <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>Heritage Monument Reconstruction</h3>
              
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                In parallel, I have worked on restoring structural details in degraded heritage monuments from incomplete LiDAR scans. I worked with transformer-based point-cloud completion models including <strong>PoinTr and AdaPoinTr</strong>, along with preprocessing pipelines for sparse point-cloud inputs.
              </p>
              
              <p className="text-sm leading-[1.8]">
                <strong style={{ color: "var(--text-primary)" }}>Research status:</strong> <em className="italic" style={{ color: "var(--text-secondary)" }}>Manuscript in preparation</em>
              </p>

              <div className="p-5 rounded-lg space-y-4" style={{ background: "rgba(17, 24, 42, 0.4)", border: "1px solid var(--border-subtle)" }}>
                <h4 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Evaluation</h4>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Chamfer Distance</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>0.0142</span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>F-score</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>78.4%</span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                    <strong style={{ color: "var(--text-primary)" }}>Normal Consistency</strong>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>0.74</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* ── 03 Knitspace ───────────────────────────────────────── */}
        <FadeIn delay={0.4} direction="up">
          <article className="relative pl-8 md:pl-12 max-w-xl space-y-6 pt-4 opacity-90">
            <div className="absolute -left-[4px] top-4 w-2 h-2 rounded-full bg-[var(--border)] border-[1px] border-[var(--bg-primary)]" />
            
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-muted)" }}>03</span>
                <h2 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Software Development Intern
                </h2>
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Knitspace
              </p>
              <div className="flex items-center gap-2 text-sm font-mono flex-wrap">
                <span style={{ color: "var(--text-secondary)" }}>Jul 2025 – Sep 2025</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
              {["Python", "Web Development", "Search Systems", "Data Processing"].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-2">
                  {tag}
                  {i < arr.length - 1 && <span style={{ color: "var(--border-subtle)" }}>·</span>}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                At Knitspace, I worked on an <strong>internship project focused on building a web-based search experience over 21,000+ product records</strong>. The project combined product-data search and processing with a themed web interface designed around the search experience.
              </p>
              <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I worked on the search and processing side of the application while also shaping how the search experience was presented through the website. The project used an <strong>Animal Farm-inspired theme</strong>, turning the search interface into a more experimental and engaging way of interacting with the underlying product data.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>What I worked on</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong style={{ color: "var(--text-primary)" }}>Search application</strong> <span style={{ color: "var(--text-secondary)" }}>— Search over 21,000+ records</span></li>
                  <li><strong style={{ color: "var(--text-primary)" }}>Data processing</strong> <span style={{ color: "var(--text-secondary)" }}>— Preparing product data</span></li>
                  <li><strong style={{ color: "var(--text-primary)" }}>Web interface</strong> <span style={{ color: "var(--text-secondary)" }}>— Building the search UI</span></li>
                </ul>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* ── Leadership ───────────────────────────────────────── */}
        <FadeIn delay={0.5} direction="up">
          <section className="relative pl-8 md:pl-12 max-w-lg space-y-4 pt-8">
            <div className="absolute -left-[4px] top-10 w-2 h-2 rounded-full bg-[var(--border)] border-[1px] border-[var(--bg-primary)]" />
            <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Leadership & Other Experience
            </h2>
            <div className="space-y-1">
              <h3 className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Research & Documentation Lead
              </h3>
              <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                Word&apos;s Worth Club · 2023 – Present
              </p>
            </div>
            
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              As Research &amp; Documentation Lead, I have coordinated research and documentation across <strong>14 workshops and 8 competitions</strong>, while also representing KLE Technological University at <strong>2 intercollegiate events</strong>.
            </p>
          </section>
        </FadeIn>

      </div>


      
      {/* ── Final Navigation ────────────────── */}
      <section className="flex items-center gap-4 pt-16 pb-12 text-sm font-mono flex-wrap">
        <Link href="/projects" className="transition-colors hover:text-[var(--text-primary)]" style={{ color: "var(--text-secondary)" }}>
          Projects
        </Link>
        <span style={{ color: "var(--border-subtle)" }}>·</span>
        <Link href="/field-notes" className="transition-colors hover:text-[var(--text-primary)]" style={{ color: "var(--text-secondary)" }}>
          Field Notes
        </Link>
        <span style={{ color: "var(--border-subtle)" }}>·</span>
        <Link href="/achievements" className="transition-colors hover:text-[var(--text-primary)]" style={{ color: "var(--text-secondary)" }}>
          Achievements
        </Link>
      </section>

    </div>
  );
}
