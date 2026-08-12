import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Philosophy | Spurti",
  description: "Why systems, why constraints, why evidence.",
};

const themes = [
  {
    title: "Why Systems",
    body: "The more systems I build, the less I believe software is about code. It's about making decisions under constraints—technical, human, and organizational. A sorting algorithm is elegant in a textbook. Deploying it inside a distributed pipeline with 500 concurrent users and a 200ms latency budget teaches you something no course ever will.",
  },
  {
    title: "Why Constraints",
    body: "Anyone can build with unlimited resources. Constraints force you to understand what actually matters. Every project I care about had a constraint that shaped the architecture—a 1 MB model limit, unreliable networks, or a 200ms response budget. I've come to believe that the best engineering happens when you can't throw more hardware at the problem.",
  },
  {
    title: "Why Evidence",
    body: "When I say a migration reduced response times by 85%, I mean I measured it. When I say GIN indexes improved search, I mean I benchmarked it against the baseline. Intuition is useful but insufficient. The gap between 'I think this is faster' and 'this is faster, and here's why' is the gap between coding and engineering.",
  },
  {
    title: "Questions I'm Still Chasing",
    body: "What information do models actually retain? When is a distributed system not worth distributing? How do you measure 'good engineering' beyond benchmarks? How do you design systems that degrade gracefully? I don't have answers yet—but these questions shape how I approach every new problem.",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="space-y-20">
      <section>
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3">
          Engineering Philosophy
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-lg leading-relaxed">
          Recurring themes that shape how I think about engineering.
          Not a mission statement—just honest observations.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="p-6 sm:p-8 rounded-lg border border-white/5 bg-[var(--surface-1)]"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent-warm)]/70 mb-4">
              {theme.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-[1.8]">
              {theme.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
