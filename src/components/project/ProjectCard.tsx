// Architecture diagrams — box-and-arrow SVGs showing system shape only.
// No hardcoded metrics — numbers live in the structured data, not here.
function ProjectDiagram({ slug }: { slug: string }) {
  const diagrams: Record<string, React.ReactNode> = {
    ntire: (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Input */}
        <rect x="20" y="45" width="60" height="50" rx="3" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
        <text x="50" y="73" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace">Input</text>
        <text x="50" y="85" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.5">LR image</text>
        <line x1="82" y1="70" x2="108" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="108,66 116,70 108,74" fill="currentColor" opacity="0.6" />
        {/* Model */}
        <rect x="118" y="30" width="160" height="80" rx="6" stroke="currentColor" strokeWidth="1" />
        <text x="198" y="60" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="monospace">Lightweight CNN</text>
        <text x="198" y="76" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">{"<"} 1 MB  ·  ~250K params</text>
        <text x="198" y="90" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.5">ONNX export</text>
        <line x1="280" y1="70" x2="306" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="306,66 314,70 306,74" fill="currentColor" opacity="0.6" />
        {/* Output */}
        <rect x="316" y="45" width="60" height="50" rx="3" stroke="currentColor" strokeWidth="0.8" />
        <text x="346" y="73" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace">Output</text>
        <text x="346" y="85" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="monospace" opacity="0.5">Enhanced</text>
      </svg>
    ),
    sih: (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Browser */}
        <rect x="30" y="30" width="50" height="80" rx="6" stroke="currentColor" strokeWidth="0.8" />
        <text x="55" y="68" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace">Browser</text>
        <text x="55" y="80" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">IndexedDB</text>
        {/* Offline indicator */}
        <circle cx="80" cy="30" r="5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1" />
        <text x="88" y="34" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.5">offline</text>
        {/* Sync Arrow */}
        <path d="M 85 70 C 130 50, 170 90, 215 70" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 2" />
        <text x="150" y="56" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">sync on reconnect</text>
        {/* Node API */}
        <rect x="218" y="45" width="90" height="50" rx="4" stroke="currentColor" strokeWidth="1" />
        <text x="263" y="68" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="monospace">Node.js API</text>
        <text x="263" y="81" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">conflict resolution</text>
        {/* Arrow to DB */}
        <line x1="310" y1="70" x2="346" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="346,66 354,70 346,74" fill="currentColor" opacity="0.6" />
        <rect x="356" y="52" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="0.8" />
        <text x="370" y="74" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace">PG</text>
      </svg>
    ),
    "emotion-assistant": (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Input */}
        <rect x="20" y="50" width="70" height="40" rx="4" stroke="currentColor" strokeWidth="0.8" />
        <text x="55" y="73" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">User Input</text>
        <line x1="92" y1="70" x2="118" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="118,66 126,70 118,74" fill="currentColor" opacity="0.6" />
        {/* Emotion Classifier */}
        <rect x="128" y="38" width="100" height="64" rx="6" stroke="currentColor" strokeWidth="1" />
        <text x="178" y="64" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">Emotion</text>
        <text x="178" y="76" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">Classifier</text>
        <text x="178" y="90" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.5">Transformer</text>
        <line x1="230" y1="70" x2="256" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="256,66 264,70 256,74" fill="currentColor" opacity="0.6" />
        {/* LLM */}
        <rect x="266" y="38" width="100" height="64" rx="6" stroke="currentColor" strokeWidth="1" />
        <text x="316" y="64" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">Language</text>
        <text x="316" y="76" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">Model</text>
        <text x="316" y="90" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.5">context-aware</text>
      </svg>
    ),
    campkart: (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Client */}
        <rect x="20" y="50" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="0.8" />
        <text x="50" y="73" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">React</text>
        <line x1="82" y1="70" x2="108" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="108,66 116,70 108,74" fill="currentColor" opacity="0.6" />
        {/* Express API */}
        <rect x="118" y="42" width="100" height="56" rx="6" stroke="currentColor" strokeWidth="1" />
        <text x="168" y="68" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">Express API</text>
        <text x="168" y="82" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">Auth · CRUD</text>
        {/* Arrow to PG */}
        <line x1="220" y1="70" x2="256" y2="70" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="256,66 264,70 256,74" fill="currentColor" opacity="0.6" />
        <rect x="266" y="42" width="100" height="56" rx="4" stroke="currentColor" strokeWidth="0.8" />
        <text x="316" y="65" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace">PostgreSQL</text>
        <text x="316" y="79" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.6">listings · reviews</text>
        <text x="316" y="91" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="monospace" opacity="0.5">users · auth</text>
      </svg>
    ),
  };

  return (
    <div
      className="diagram-area h-40 md:h-44 p-6 flex items-center justify-center"
      style={{ color: "var(--text-muted)" }}
    >
      {diagrams[slug] ?? (
        <span className="section-label">Architecture Diagram</span>
      )}
    </div>
  );
}

import { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { MetricRow } from "@/components/ui/MetricRow";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <div className="group block card">

      {/* Top: Architecture Diagram */}
      <ProjectDiagram slug={project.slug} />

      {/* Caption */}
      <div
        className="px-6 pt-3 pb-1 border-b section-label opacity-50"
        style={{ borderColor: "var(--border)" }}
      >
        Fig {index + 1}. {project.title} — System Architecture
      </div>

      {/* Bottom: Story + Metrics */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">

        {/* Left: Story */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="text-sm leading-[1.85]" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            {project.narrative}
          </p>
          <p
            className="text-xs italic border-l-2 pl-3"
            style={{ color: "var(--text-muted)", borderColor: "var(--accent)" }}
          >
            {project.insight}
          </p>
        </div>

        {/* Right: Metrics + Tags */}
        <div className="md:w-56 shrink-0 flex flex-col gap-5">
          {project.metrics.length > 0 && (
            <div>
              <div className="section-label mb-3 opacity-70">Key Metrics</div>
              <div
                className="rounded-lg p-4 space-y-0"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}
              >
                {project.metrics.map((m) => (
                  <MetricRow key={m.label} label={m.label} value={m.value} />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
