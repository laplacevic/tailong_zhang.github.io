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
| Photo | Replace `public/portrait.jpg` |

A talk entry looks like:

```markdown
---
title: "Official conference or talk name"
date: 2026-06-05
venue: "Institution or city"
kind: talk                        # talk | poster | news
contribution: "contributed talk"  # optional, overrides kind in the meta line
highlight: "Best Poster Prize"    # optional, accent-colored
link: https://...                 # optional
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
Spectral + Schibsted Grotesk + Spline Sans Mono, three annotated
scientific figures (spectrum, formation-and-migration, transit) as the
only illustration, restrained play-once motion.

## Deployment

Live at https://tailongzhang.github.io. Repo is public; GitHub Pages
serves the Actions build on every push to `main` (setup completed
2026-07-03). No manual steps.
