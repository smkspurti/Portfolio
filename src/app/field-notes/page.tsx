import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes | Spurti",
  description:
    "Short reflections on things I'm learning while building. Not tutorials — just observations from working on systems, models, and problems that don't always behave the way I expect.",
};

export default function FieldNotesPage() {
  return (
    <div className="space-y-24">
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="max-w-2xl space-y-3">
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Field Notes
        </h1>
        <p className="text-sm leading-[1.8] max-w-lg" style={{ color: "var(--text-secondary)" }}>
          Short reflections on things I&apos;m learning while building. Not tutorials — just observations from working on systems, models, and problems that don&apos;t always behave the way I expect.
        </p>
      </section>

      <div className="space-y-24">
        
        {/* ── Note 1 ──────────────────────────────────────────── */}
        <article className="max-w-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            On Reading Other People&apos;s Code
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              One of the things I underestimated about software engineering was how much of the job involves understanding something you didn&apos;t design.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              At CDPI, I spent a lot of time reading Java services written long before I joined the project. The code didn&apos;t come with an explanation of why a particular abstraction existed, why a service depended on another one, or which behaviour was important enough that changing it would cause problems somewhere else.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              You have to reconstruct that context from the system itself — the code, the database, the messages moving between services, and sometimes the things that break when you change them.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              It changed how I approach unfamiliar codebases. I don&apos;t want to understand every line before making a change. I want to understand <strong>what the system is trying to do, what it depends on, and what I cannot afford to break.</strong>
            </p>
          </div>
        </article>

        {/* ── Note 2 ──────────────────────────────────────────── */}
        <article className="max-w-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            On Constraints
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The most interesting engineering problems I&apos;ve worked on have usually started with a restriction.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              At NTIRE, the model had to fit within <strong>1 MB</strong>. At E-Sannidhi, connectivity couldn&apos;t be assumed. At CDPI, the system already existed and the migration had to preserve its behaviour.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Constraints initially feel like limitations. Eventually, they become useful because they force you to decide what actually matters.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              I&apos;ve started asking a similar question even when nobody gives me a hard constraint:
            </p>
            <p className="text-sm leading-[1.8] font-medium" style={{ color: "var(--text-primary)" }}>
              If I couldn&apos;t afford to add another layer or another dependency, what would I change?
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Sometimes the answer is surprisingly simple.
            </p>
          </div>
        </article>

        {/* ── Note 3 ──────────────────────────────────────────── */}
        <article className="max-w-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            On Making a System Work
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              There is a difference between getting something to work and understanding why it works.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              A model can produce a good result. An API can return the expected response. A query can become faster. A service can pass its tests.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              But those outcomes don&apos;t necessarily tell you what is happening underneath.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              The more systems I work on, the more interested I become in the second question: <strong>why?</strong>
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Why did this query become slow? Why did this model improve? Why does this service need this dependency? Why does the system behave differently when the network disappears?
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Those questions are usually more interesting than the first solution that makes the problem go away.
            </p>
          </div>
        </article>

        {/* ── Note 4 ──────────────────────────────────────────── */}
        <article className="max-w-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            On Research and Engineering
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Research taught me to be comfortable when the answer isn&apos;t obvious.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              You can change an architecture, train another model, adjust the preprocessing, or run another experiment and still not know whether you&apos;ve actually made things better.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Engineering adds another layer to that uncertainty. A result that looks good in isolation still has to survive the constraints of the system around it.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Working across both has made me less interested in chasing complexity for its own sake. I care about whether an idea survives contact with the actual problem — the data, the infrastructure, the constraints, and the people who eventually have to use or maintain it.
            </p>
          </div>
        </article>

        {/* ── Note 5 ──────────────────────────────────────────── */}
        <article className="max-w-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            On Being Wrong About Performance
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              I used to think performance optimization was mostly about knowing the right technique.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Then I spent enough time looking at actual systems to realize that intuition is a pretty unreliable profiler.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              Sometimes the obvious bottleneck isn&apos;t the bottleneck. Sometimes replacing something with a more sophisticated solution would solve a problem that better measurement would have shown wasn&apos;t there in the first place.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              So now I try to start with a simpler question:
            </p>
            <p className="text-sm leading-[1.8] font-medium" style={{ color: "var(--text-primary)" }}>
              What does the measurement actually say?
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              If I can&apos;t explain what changed, why it changed, and what I gave up to get that improvement, I don&apos;t consider the optimization finished.
            </p>
          </div>
        </article>

      </div>

      {/* ── Continue Exploring ────────────────────────────────────── */}
      <section className="space-y-6 max-w-2xl pt-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
        <h2 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Continue Exploring
        </h2>
        
        <div className="flex flex-col gap-4 pt-4">
          <Link href="/projects" className="btn-ghost w-fit">
            Projects →
          </Link>
          <Link href="/experience" className="btn-ghost w-fit">
            Experience →
          </Link>
          <Link href="/lets-talk" className="btn-ghost w-fit">
            Let&apos;s Talk →
          </Link>
        </div>
      </section>
    </div>
  );
}
