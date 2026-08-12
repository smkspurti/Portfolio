# Spurti S M K — Portfolio

Personal portfolio website for software engineering, backend engineering, and ML engineering placements.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Vanilla CSS + Tailwind v4 utility classes
- **Fonts:** Inter (body) + JetBrains Mono (code/labels) via `next/font`
- **Animation:** Canvas-based star field (no animation library)
- **Deployment:** Static — suitable for Vercel, Netlify, or any static host

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, at a glance, selected work, experience snapshot |
| `/projects` | All projects with descriptions, metrics, and tech stacks |
| `/experience` | CDPI, CEVI, Knitspace — detailed engineering work |
| `/achievements` | CVPR workshop, Amazon MLSS, ML Challenge, WiDS, SIH |
| `/field-notes` | Engineering observations from real projects |
| `/lets-talk` | Contact info, availability, publication link |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

All 15 routes generate as static HTML.
