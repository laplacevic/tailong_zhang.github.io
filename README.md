# tailongzhang.github.io

Personal academic website. Single-page Astro site, deployed to GitHub
Pages via Actions on every push to `main`.

## Editing content

| What | Where |
|------|-------|
| Name, email, links, tagline | `src/data/profile.ts` |
| Add a talk or news item | New `.md` file in `src/content/talks/` |
| About paragraphs | `src/components/About.astro` |
| Research description | `src/components/Research.astro` |
| CV | Replace `public/cv.pdf` |
| Photo | Add `public/portrait.jpg`, swap the placeholder in `About.astro` |

A talk entry looks like:

```markdown
---
title: "Talk title"
date: 2026-06-05
venue: "Conference or seminar name"
kind: talk        # talk | poster | news
link: https://...  # optional
---
```

## Development

```bash
npm install
npm run dev      # local preview at localhost:4321
npm run build    # static build into dist/
```

## Design

Design decisions are documented in `PRODUCT.md`, `DESIGN.md`, and
`CONTEXT.md`. Short version: editorial/Swiss, light paper palette,
Spectral + Schibsted Grotesk + Spline Sans Mono, one decorative motif
(the hero transmission-spectrum figure), restrained motion gated behind
`prefers-reduced-motion`.

## First-time GitHub setup

1. Rename the GitHub account to `tailongzhang` (Settings > Account).
2. Create a repository named exactly `tailongzhang.github.io`.
3. Repository Settings > Pages > Source: GitHub Actions.
4. Push this directory to `main`.
