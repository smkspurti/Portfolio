import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full mt-40"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Spurti S M K
          </span>
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            Still curious? So am I.
          </span>
        </div>

        <nav className="flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
          {[
            { href: "https://github.com/smkspurti", label: "GitHub" },
            { href: "https://www.linkedin.com/in/smkspurti/", label: "LinkedIn" },
            { href: "mailto:smkspurti@gmail.com", label: "Email" },
          ].map((link, i, arr) => (
            <span key={link.href} className="flex items-center gap-1">
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="text-xs font-mono transition-colors hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
              {i < arr.length - 1 && (
                <span className="mx-2 text-[var(--border)] select-none">·</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
