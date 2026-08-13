# Component Inventory

This inventory matches the implementation in `src/components/` exactly. Every component listed here is
implemented and rendered on the single page (`src/pages/Home.jsx`); no undocumented components exist and no
documented component is missing from the code.

---

## Shared Components (`src/components/shared/`)

### PlaceholderImage
- **Reference:** Shared (both storefronts use imagery-driven layouts)
- **Purpose:** Renders a CSS-generated artboard standing in for real photography, labeled by content type.
- **Props:** `label`, `ratio`
- **Data:** Passed inline per usage
- **Section:** Used inside heroes, category tiles, product cards, editorial splits
- **Reusable:** Yes
- **Parent:** `IliaHero`, `VahdamHero`, `CategoryTile`, `ProductCard`, `IliaEditorialSplit`,
  `VahdamStorySection`
- **Rendered:** Both reference sections

### SectionHeader
- **Reference:** Shared
- **Purpose:** Consistent eyebrow + heading + description block above a section's content.
- **Props:** `eyebrow`, `title`, `description`
- **Data:** Passed inline per usage
- **Section:** Used above category, product, value, component-map, and workflow blocks
- **Reusable:** Yes
- **Parent:** `Home`
- **Rendered:** Overview intro pattern, both reference sections, Component Map, Workflow

### Button
- **Reference:** Shared
- **Purpose:** Primary/secondary call-to-action element used across both storefronts.
- **Props:** `children`, `variant`, `size`, `as`, `href`
- **Data:** N/A
- **Section:** Heroes, editorial splits, product cards, collection headers
- **Reusable:** Yes
- **Parent:** `IliaHero`, `VahdamHero`, `IliaEditorialSplit`, `VahdamStorySection`, `ProductCard`,
  `VahdamCollectionSection`
- **Rendered:** Both reference sections

### Badge
- **Reference:** Shared
- **Purpose:** Small label used to flag bestseller/new/featured products.
- **Props:** `children`, `variant`
- **Data:** N/A
- **Section:** Product cards
- **Reusable:** Yes
- **Parent:** `ProductCard`
- **Rendered:** Both reference sections

### Rating
- **Reference:** VAHDAM (star + review-count pattern); reused for any product with a rating value
- **Purpose:** Displays a star rating and review count.
- **Props:** `value`, `count`
- **Data:** N/A
- **Section:** Product cards
- **Reusable:** Yes
- **Parent:** `ProductCard`
- **Rendered:** Both reference sections (ILIA products also carry ratings)

### ProductCard
- **Reference:** Shared (ILIA "Curated Favorites" cards and VAHDAM collection cards share the same
  structure: image, title, price, optional badge/rating)
- **Purpose:** Reusable product presentation component.
- **Props:** `title`, `price`, `comparePrice`, `currency`, `badge`, `rating`, `reviewCount`, `imageLabel`
- **Data:** `iliaData.js` / `vahdamData.js`
- **Section:** Product grids/rows
- **Reusable:** Yes
- **Parent:** `IliaProductShowcase`, `VahdamCollectionSection`
- **Rendered:** Both reference sections

### FeatureGrid
- **Reference:** Shared (ILIA's sustainability grid and VAHDAM's trust-stats/impact grids share an
  icon-or-stat + title + description layout)
- **Purpose:** Renders an N-column grid of icon/stat + title + description items.
- **Props:** `items`, `columns`
- **Data:** `iliaData.js` (`iliaValues`) / `vahdamData.js` (`vahdamTrustStats`, `vahdamValues`)
- **Section:** Brand values, trust signals, impact
- **Reusable:** Yes
- **Parent:** `Home`
- **Rendered:** Both reference sections

### Newsletter
- **Reference:** Shared (both storefronts end with a simple email capture block)
- **Purpose:** Reusable email-signup form with configurable heading/description/CTA text.
- **Props:** `heading`, `description`, `ctaLabel`
- **Data:** Passed inline per usage
- **Section:** End of each reference section
- **Reusable:** Yes
- **Parent:** `Home`
- **Rendered:** Both reference sections

### CategoryTile
- **Reference:** Shared (both storefronts use an image tile + label pattern for category entry points)
- **Purpose:** Single category-navigation tile.
- **Props:** `label`
- **Data:** `iliaData.js` (`iliaCategories`) / `vahdamData.js` (`vahdamCategories`)
- **Section:** Category navigation grids
- **Reusable:** Yes
- **Parent:** `IliaCategoryNav`, `VahdamCategoryNav`
- **Rendered:** Both reference sections

### AnnouncementBar
- **Reference:** Shared (both storefronts open with a rotating/looping promotional message bar)
- **Purpose:** Horizontal scrolling strip of promotional messages.
- **Props:** `messages`, `style`
- **Data:** `iliaData.js` (`iliaAnnouncement`) / `vahdamData.js` (`vahdamAnnouncement`)
- **Section:** Top of each reference section
- **Reusable:** Yes
- **Parent:** `Home`
- **Rendered:** Both reference sections

### SiteFooter
- **Reference:** Shared (both storefronts use a multi-column footer)
- **Purpose:** Single showcase-wide footer with project name, references, technology, and documentation
  links.
- **Props:** None
- **Data:** Internal
- **Section:** Footer
- **Reusable:** No (single instance by design)
- **Parent:** `Home`
- **Rendered:** End of page

### ComponentMap
- **Reference:** N/A (showcase-specific documentation UI, not a storefront pattern)
- **Purpose:** Displays the ILIA / VAHDAM / Shared component groupings visually.
- **Props:** None
- **Data:** Internal
- **Section:** Component Map
- **Reusable:** No (single instance by design)
- **Parent:** `Home`
- **Rendered:** Component Map section

### Workflow
- **Reference:** N/A (showcase-specific documentation UI)
- **Purpose:** Displays the research-to-deployment workflow as a horizontal step sequence.
- **Props:** None
- **Data:** Internal
- **Section:** Workflow
- **Reusable:** No (single instance by design)
- **Parent:** `Home`
- **Rendered:** Workflow section

---

## ILIA Components (`src/components/ilia/`)

### IliaHeader
- **Reference:** ILIA Beauty
- **Purpose:** Recreates ILIA's header — logo, category navigation, account/search/bag actions.
- **Props:** None (reads `iliaNav`)
- **Data:** `iliaData.js` (`iliaNav`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** ILIA section

### IliaHero
- **Reference:** ILIA Beauty
- **Purpose:** Single featured-product hero moment with tagline and CTA.
- **Props:** None (reads `iliaHero`)
- **Data:** `iliaData.js` (`iliaHero`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** ILIA section

### IliaCategoryNav
- **Reference:** ILIA Beauty
- **Purpose:** Six-tile category navigation grid.
- **Props:** None (reads `iliaCategories`)
- **Data:** `iliaData.js` (`iliaCategories`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** No (brand-specific wrapper around shared `CategoryTile`)
- **Parent:** `Home`
- **Rendered:** ILIA section

### IliaProductShowcase
- **Reference:** ILIA Beauty
- **Purpose:** "Curated Favorites" four-product showcase grid.
- **Props:** None (reads `iliaProducts`)
- **Data:** `iliaData.js` (`iliaProducts`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** No (brand-specific wrapper around shared `ProductCard`)
- **Parent:** `Home`
- **Rendered:** ILIA section

### IliaEditorialSplit
- **Reference:** ILIA Beauty
- **Purpose:** Split image/copy editorial block, reused twice (technique guide, membership callout).
- **Props:** `eyebrow`, `title`, `description`, `imageLabel`, `reverse`
- **Data:** `iliaData.js` (`iliaEditorial`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** Yes (within ILIA section, rendered twice via data map)
- **Parent:** `Home`
- **Rendered:** ILIA section

### IliaTestimonial
- **Reference:** ILIA Beauty
- **Purpose:** Pull-quote testimonials paired with press-mention row.
- **Props:** None (reads `iliaTestimonials`, `iliaPress`)
- **Data:** `iliaData.js` (`iliaTestimonials`, `iliaPress`)
- **Section:** Reference 01 — ILIA Beauty
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** ILIA section

---

## VAHDAM Components (`src/components/vahdam/`)

### VahdamHeader
- **Reference:** VAHDAM India
- **Purpose:** Recreates VAHDAM's header — logo, tea-category navigation, account/search/cart actions.
- **Props:** None (reads `vahdamNav`)
- **Data:** `vahdamData.js` (`vahdamNav`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

### VahdamHero
- **Reference:** VAHDAM India
- **Purpose:** Rotating promotional hero moment with tagline and CTA.
- **Props:** None (reads `vahdamHero`)
- **Data:** `vahdamData.js` (`vahdamHero`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

### VahdamCategoryNav
- **Reference:** VAHDAM India
- **Purpose:** Four-tile category navigation grid.
- **Props:** None (reads `vahdamCategories`)
- **Data:** `vahdamData.js` (`vahdamCategories`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** No (brand-specific wrapper around shared `CategoryTile`)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

### VahdamCollectionSection
- **Reference:** VAHDAM India
- **Purpose:** Named, horizontally-scrollable collection row (e.g. "Best Sellers") of product cards with a
  "View All" action.
- **Props:** `title`, `description`, `products`
- **Data:** `vahdamData.js` (`vahdamProducts`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** Yes (accepts any product list/title via props)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

### VahdamStorySection
- **Reference:** VAHDAM India
- **Purpose:** Founder/heritage editorial split section.
- **Props:** None (reads `vahdamStory`)
- **Data:** `vahdamData.js` (`vahdamStory`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

### VahdamTestimonial
- **Reference:** VAHDAM India
- **Purpose:** Customer quote cards.
- **Props:** None (reads `vahdamTestimonials`)
- **Data:** `vahdamData.js` (`vahdamTestimonials`)
- **Section:** Reference 02 — VAHDAM India
- **Reusable:** No (brand-specific)
- **Parent:** `Home`
- **Rendered:** VAHDAM section

---

## Page

### Home
- **Purpose:** Assembles the showcase header, overview, both reference sections, Component Map, Workflow,
  and footer into the single route (`/`).
- **Props:** None
- **Data:** Imports all data modules
- **Reusable:** No (page-level composition root)
- **Parent:** `App`
- **Rendered:** `/`
