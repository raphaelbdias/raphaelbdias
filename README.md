Raphael B. Dias — Portfolio
Transforming complexity into clarity.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org)
[![Static Export](https://img.shields.io/badge/Output-export-green)](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

About
- Personal site showcasing selected projects, thoughts, and reads — plus a peek beyond work. Built with the Next.js Pages Router and exported as static files for simple, fast hosting.
- Tagline from the hero: “Hands-on analytics leader and builder turning messy data systems into trustworthy, decision-ready intelligence.”

Preview
![Site cover](docs/cover.png)
- Replace `docs/cover.png` with a real screenshot from the homepage (optional).

Features
- Responsive navbar with mobile drawer
- Animated hero and section fade-ins
- Featured Projects, Thoughts, Reads, Beyond Work, Contact
- Content sourced from simple JSON files

Tech Stack
- Next.js 15 (Pages Router)
- React 19 + TypeScript
- CSS (single global stylesheet)
- framer-motion, react-intersection-observer

Quick Start
1) Install dependencies: `npm install`
2) Run locally: `npm run dev`
3) Open: `http://localhost:3000`

Project Structure
- Entry page: `src/pages/index.tsx`
- Components: `src/components/*` (e.g., `Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `Thoughts.tsx`, `Reads.tsx`, `BeyondWork.tsx`, `Contact.tsx`, `Footer.tsx`)
- Animation helper: `src/components/FadeInSection.tsx`
- Global styles: `src/styles/global.css`
- Content data: `src/data/*.json` (projects, reads, milestones, thoughts)
- Next config: `next.config.ts` (static export enabled)

Editing Content
- Projects → `src/data/projects.json`
- Thoughts → `src/data/thoughts.json`
- Reads → `src/data/reads.json`
- Milestones → `src/data/milestones.json`
- Note: The homepage uses preview limits in `src/pages/index.tsx` (e.g., `Projects limit={2}`). Adjust to show more.

Build & Deploy
- Static export is enabled via `next.config.ts` (`output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`).
- Build: `npm run build` → outputs to `out/`
- Serve locally (static): `npx serve out`
- Deploy `out/` to any static host (Vercel Static, Netlify, GitHub Pages, S3/CloudFront).

Scripts
- `npm run dev` — start the dev server
- `npm run build` — build and export to `out/`
- `npm run start` — Next server mode (not needed for static `out/`)

License
- No license file is included. All rights reserved unless stated otherwise.
