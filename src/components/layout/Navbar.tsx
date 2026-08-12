"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects",     label: "Projects" },
  { href: "/experience",   label: "Experience" },
  { href: "/field-notes",  label: "Field Notes" },
  { href: "/achievements", label: "Achievements" },
  { href: "/lets-talk",    label: "Let's Talk" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const close                   = useCallback(() => setOpen(false), []);
  const pathname                = usePathname();

  // Close mobile menu on route change
  useEffect(() => { setMobile(false); }, [pathname]);

  // Escape key closes both overlays
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); setMobile(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  return (
    <>
      <header
        className="sticky top-0 w-full z-30"
        style={{
          background: "rgba(11,16,32,0.90)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          {/* Left: avatar + brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              aria-label="View profile photo"
              className="w-7 h-7 rounded-full overflow-hidden shrink-0 focus:outline-none"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="/profile.jpg"
                alt="Spurti"
                width={28}
                height={28}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </button>
            <Link href="/" className="nav-brand">Spurti</Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={pathname === link.href ? { color: "var(--text-primary)" } : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobile((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          >
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--text-secondary)",
                transform: mobileOpen ? "translateY(4px) rotate(45deg)" : undefined,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--text-secondary)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--text-secondary)",
                transform: mobileOpen ? "translateY(-4px) rotate(-45deg)" : undefined,
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav
            className="sm:hidden border-t"
            style={{
              background: "rgba(11,16,32,0.97)",
              borderColor: "var(--border-subtle)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 text-sm font-mono transition-colors"
                style={{
                  color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
                onClick={() => setMobile(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Profile photo lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={close}
          style={{ background: "rgba(7,10,20,0.75)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile.jpg"
              alt="Spurti"
              width={320}
              height={320}
              className="object-cover block"
            />
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono transition-opacity hover:opacity-80"
              style={{ background: "rgba(11,16,32,0.8)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
