# Component Workflow

## Application Flow

```
main.jsx
    ↓
App.jsx
    ↓
Home.jsx  (single route: /)
    ↓
Showcase Header (title + anchor navigation)
    ↓
Overview (project introduction)
    ↓
ILIA Section  (#ilia)
    ↓
VAHDAM Section  (#vahdam)
    ↓
Component Map  (#component-map)
    ↓
Workflow  (#workflow)
    ↓
Site Footer
```

`main.jsx` mounts `App`, which renders `Home` directly — there is no router and no second route. All
navigation within the page is anchor-based (`#overview`, `#ilia`, `#vahdam`, `#component-map`,
`#workflow`), scrolling within the single document.

## Component Hierarchy

```
Home
├── AnnouncementBar (shared, ILIA data)
├── IliaHeader
├── IliaHero
├── IliaCategoryNav
│   └── CategoryTile × 6 (shared)
├── IliaProductShowcase
│   └── ProductCard × 4 (shared)
│       ├── PlaceholderImage (shared)
│       ├── Badge (shared)
│       ├── Rating (shared)
│       └── Button (shared)
├── IliaEditorialSplit × 2
│   ├── PlaceholderImage (shared)
│   └── Button (shared)
├── FeatureGrid (shared, ILIA values data)
├── IliaTestimonial
├── Newsletter (shared, ILIA copy)
│
├── AnnouncementBar (shared, VAHDAM data)
├── VahdamHeader
├── VahdamHero
├── VahdamCategoryNav
│   └── CategoryTile × 4 (shared)
├── VahdamCollectionSection
│   └── ProductCard × 6 (shared)
├── FeatureGrid (shared, VAHDAM trust-stats data)
├── VahdamStorySection
│   ├── PlaceholderImage (shared)
│   └── Button (shared)
├── FeatureGrid (shared, VAHDAM impact data)
├── VahdamTestimonial
├── Newsletter (shared, VAHDAM copy)
│
├── ComponentMap (shared)
├── Workflow (shared)
└── SiteFooter (shared)
```

## Data Flow

Each brand has one data module (`src/data/iliaData.js`, `src/data/vahdamData.js`) exporting plain arrays
and objects — navigation labels, hero copy, category labels, product lists, editorial content,
testimonials, and value/trust-grid items. `Home.jsx` imports these modules and either:

1. Passes a data array directly into a shared component as a prop (e.g. `<FeatureGrid items={iliaValues} />`,
   `<AnnouncementBar messages={vahdamAnnouncement} />`), or
2. Lets a brand-specific component (e.g. `IliaHero`, `VahdamCategoryNav`) import its own data module
   directly and render it, for sections that are structurally brand-specific rather than reused.

No component contains hard-coded repeated JSX for a list of items — every repeated UI element (category
tiles, product cards, editorial splits, feature-grid items, testimonial quotes) is produced by mapping over
a data array.

## Props Flow

Shared components never import brand data themselves — they only accept props (`ProductCard`, `Badge`,
`Rating`, `CategoryTile`, `FeatureGrid`, `Newsletter`, `AnnouncementBar`, `Button`, `PlaceholderImage`,
`SectionHeader`). This keeps them reusable across both brand sections without modification. Brand-specific
components (`IliaHeader`, `VahdamStorySection`, etc.) are the layer that binds a specific data shape to a
specific layout.

## Reusable Component Flow

```
Data (iliaData.js / vahdamData.js)
    ↓
Brand section (Home.jsx composition)
    ↓
Shared component (ProductCard / FeatureGrid / CategoryTile / etc.)
    ↓
Props
    ↓
Rendered UI
```

## Placeholder Image Flow

```
Component needing imagery (Hero / ProductCard / CategoryTile / EditorialSplit / StorySection)
    ↓
<PlaceholderImage label="..." ratio="..." />
    ↓
CSS-generated artboard (diagonal pattern background + label chip)
    ↓
No network request, no external asset
```

## Responsive Flow

Layout is controlled entirely by CSS grid/flex rules in `src/styles/global.css`, with breakpoint overrides
in `src/styles/responsive.css` at 1024px (tablet), 768px (small tablet / large mobile), and 480px (mobile).
Components render the same markup at every width; only column counts, direction, and spacing change via
media queries — no JavaScript-driven responsive logic is used.

---

## ILIA Workflow

```
iliaData.js
    ↓
ILIA section (Home.jsx)
    ↓
IliaHeader / IliaHero / IliaCategoryNav / IliaProductShowcase / IliaEditorialSplit / IliaTestimonial
    ↓
Props into shared components (ProductCard, CategoryTile, PlaceholderImage, Button, Badge, Rating)
    ↓
Rendered UI (ILIA section of the page)
```

## VAHDAM Workflow

```
vahdamData.js
    ↓
VAHDAM section (Home.jsx)
    ↓
VahdamHeader / VahdamHero / VahdamCategoryNav / VahdamCollectionSection / VahdamStorySection /
VahdamTestimonial
    ↓
Props into shared components (ProductCard, CategoryTile, PlaceholderImage, Button, Rating, Badge)
    ↓
Rendered UI (VAHDAM section of the page)
```
