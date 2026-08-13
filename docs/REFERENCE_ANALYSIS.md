# Reference Analysis

Structural/UI observations only. No proprietary copy, imagery, or implementation code was copied from
either storefront — this document describes layout and pattern structure, not content.

---

## ILIA Beauty

**Reference URL:** https://iliabeauty.com/

**Why selected:** An internationally recognized, editorial-styled Shopify beauty storefront with a strong
category-navigation and product-showcase pattern.

**Visual language:** Minimal, modern, soft-neutral palette with generous whitespace and high-contrast
sans-serif type. Product photography is soft-lit; layout relies on restraint rather than decoration.

**Header pattern:** Logo left, account/currency/search/cart right, mega-dropdown primary navigation
organized by product category (Bestsellers, Complexion, Eye, Lip + Cheek, Skincare, Sets, Tools).

**Hero pattern:** A single full-width featured-product moment with a short tagline and one primary call to
action — not a rotating multi-slide carousel.

**Product pattern:** Curated four-card showcase; each card shows imagery, name, price, and an add-to-bag
action, with shade/variant selection layered on top.

**Collection pattern:** Six equal-width category tiles with background imagery, each linking to a
collection.

**Editorial pattern:** Multiple split-screen (image + copy) blocks alternating left/right, used for
storytelling (technique guide) and program callouts (membership/rewards).

**Value/trust pattern:** Three-column icon + short-copy grid communicating sustainability commitments.

**Newsletter pattern:** Single email field with a discount incentive, presented as a standalone conversion
block.

**Footer pattern:** Multi-column link groups (Shop, Help, About, Promotions) plus a secondary row of
certification badges and legal links.

**Spacing observations:** Large vertical rhythm between sections (roughly 80–120px equivalent), tight
internal card spacing, wide horizontal gutters at desktop width.

**Typography observations:** Serif/display headline paired with a neutral sans-serif body; uppercase,
letter-spaced eyebrow labels above section headings.

**Responsive observations:** Category and product grids collapse from 4–6 columns to 2, then to a single
column on mobile; navigation collapses to a simplified menu.

**Components extracted:** `IliaHeader`, `IliaHero`, `IliaCategoryNav`, `IliaProductShowcase`,
`IliaEditorialSplit`, `IliaTestimonial`, plus shared `AnnouncementBar`, `FeatureGrid`, and `Newsletter`
instances configured with ILIA data.

---

## VAHDAM India

**Reference URL:** https://www.vahdam.in/

**Why selected:** A prominent Indian direct-to-consumer Shopify storefront with a denser,
conversion-and-trust-driven pattern that contrasts usefully with ILIA's editorial minimalism.

**Visual language:** Warm neutral background, natural imagery, and price/discount-forward product
presentation. Denser information hierarchy than ILIA, oriented around scale and credibility.

**Header pattern:** Logo, search, account, and cart, with a dense mega-menu organized by tea type, tea
form, and product category.

**Hero pattern:** Rotating promotional banner emphasizing bestsellers and seasonal collections.

**Product pattern:** Carousel-style rows (6–8 products) per collection with left/right scroll and a
"View All" link; cards show image, title, star rating with review count, sale/regular pricing with
discount percentage, and an add-to-cart action.

**Collection pattern:** Multiple named collection rows ("Newly Launched," "Best Sellers," "Supplements")
rather than a single grid.

**Trust/stats pattern:** A credential strip (customer count, review count/rating, press mentions) presented
as an icon/number/label grid.

**Editorial pattern:** A founder/heritage "Our Story" split section pairing imagery with brand narrative.

**Value/trust pattern:** A second icon + copy grid for sourcing/sustainability commitments, structurally
similar to the trust-stats grid but content-distinct.

**Newsletter pattern:** Simple email capture with a subscribe button, minimal supporting copy.

**Footer pattern:** Multi-column link groups (Learn, Shop, Support, Account) with social icons and legal/
regulatory disclaimers.

**Spacing observations:** Tighter section spacing than ILIA, reflecting a denser, more transactional
layout; consistent card gutters within scrollable rows.

**Typography observations:** Sans-serif throughout with a heavier emphasis on numeric/price typography
(bold price, strikethrough compare-price, discount badge).

**Responsive observations:** Collection rows remain horizontally scrollable on mobile rather than
reflowing to a static grid; trust-stat grid collapses from 3 columns to 1.

**Components extracted:** `VahdamHeader`, `VahdamHero`, `VahdamCategoryNav`, `VahdamCollectionSection`,
`VahdamStorySection`, `VahdamTestimonial`, plus shared `AnnouncementBar`, `ProductCard`, `FeatureGrid`, and
`Newsletter` instances configured with VAHDAM data.

---

## Cross-Reference Observations

Both storefronts share a near-identical top-level skeleton — announcement bar, header with mega navigation,
hero, category tiles, product presentation, an icon-grid trust/value section, editorial storytelling,
testimonials, newsletter, and a multi-column footer — but differ in density, tone, and product-card
detail (rating and discount pricing are central to VAHDAM, largely absent from ILIA's card). This shared
skeleton is what justified building a common `ProductCard`, `FeatureGrid`, `AnnouncementBar`, and
`Newsletter` component instead of duplicating near-identical UI per brand.
