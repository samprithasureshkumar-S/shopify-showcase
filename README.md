# Shopify Reference Component Showcase

## Project Overview

A single-page React + Vite application that studies two live Shopify storefronts, identifies their
recurring reusable UI patterns, and rebuilds those patterns as documented, data-driven React components.
All components from both references are rendered on one page. This is a component study, not a
functioning storefront — there is no cart backend, checkout, authentication, or payment processing.

## Approved References

**ILIA Beauty** — https://iliabeauty.com/
International reference. Clean, editorial beauty storefront.

**VAHDAM India** — https://www.vahdam.in/
Indian reference. Premium, natural, direct-sourced tea storefront.

## Presentation Reference

Used only for presentation quality/style inspiration (simplicity, section organization, readability) — no
code, text, or assets were copied from it:

https://madhusudhan1206.github.io/shopify-showcase/

## Objective

Demonstrate the following pipeline end to end:

```
Reference research → UI pattern identification → Component extraction →
Reusable React components → Single-page showcase → Documentation → Netlify deployment
```

## Scope

In scope: component extraction, reusable React architecture, responsive layout, documentation.
Out of scope: real ecommerce functionality, multi-page navigation, backend services, real product/brand
assets.

## Technology

- React 18
- Vite 5
- Plain CSS (custom properties, no CSS framework)
- No router (anchor-based single-page navigation)
- No UI library, no animation library

## Architecture

```
src/
├── components/
│   ├── shared/     — components used by (or generalizable to) both references
│   ├── ilia/       — components specific to the ILIA Beauty section
│   └── vahdam/     — components specific to the VAHDAM India section
├── data/
│   ├── iliaData.js
│   └── vahdamData.js
├── pages/
│   └── Home.jsx    — the single page, assembled from all sections
├── styles/
│   ├── variables.css
│   ├── global.css
│   └── responsive.css
├── App.jsx
└── main.jsx
```

## Component Strategy

Components that represent a genuinely shared UI pattern across both storefronts (product cards, category
tiles, announcement bars, feature/value grids, newsletter forms, buttons, badges, ratings, placeholder
imagery, section headers) live in `components/shared/` and are driven entirely by props. Components that
represent a brand-specific layout or composition (headers, heroes, collection sections, editorial/story
sections, testimonials) live in `components/ilia/` or `components/vahdam/` and compose the shared pieces
with brand-specific data. See `docs/COMPONENT_INVENTORY.md` for the full, code-matched list.

## Placeholder Image Policy

No real product photography, brand logos, or downloaded assets are used anywhere in this project. All
imagery is a `PlaceholderImage` component — a CSS-generated artboard with a content-type label (e.g.
`PRODUCT IMAGE`, `HERO IMAGE`, `EDITORIAL`) — so every visual slot is filled without touching a real
brand's assets.

## Documentation

- [`docs/REFERENCE_ANALYSIS.md`](docs/REFERENCE_ANALYSIS.md) — structural analysis of both reference
  storefronts
- [`docs/COMPONENT_INVENTORY.md`](docs/COMPONENT_INVENTORY.md) — every implemented component, its props,
  data source, and where it renders
- [`docs/COMPONENT_WORKFLOW.md`](docs/COMPONENT_WORKFLOW.md) — application flow, component hierarchy, and
  data/props flow
- [`docs/FINAL_CHECKLIST.md`](docs/FINAL_CHECKLIST.md) — requirement-by-requirement verification

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output is written to `dist/`.

## Deployment — Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

This project intentionally has no GitHub Pages configuration (no `gh-pages` dependency, no `base` path in
`vite.config.js`) — it is built for Netlify deployment.

## Deliverables

- Single-page React + Vite component showcase (`/`)
- Reusable, prop-driven, data-driven components across both references
- Full documentation set (reference analysis, component inventory, component workflow, final checklist)
- Passing production build (`npm run build`)
