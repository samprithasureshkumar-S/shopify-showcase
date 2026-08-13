import AnnouncementBar from '../components/shared/AnnouncementBar.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import FeatureGrid from '../components/shared/FeatureGrid.jsx'
import Newsletter from '../components/shared/Newsletter.jsx'
import ComponentMap from '../components/shared/ComponentMap.jsx'
import Workflow from '../components/shared/Workflow.jsx'
import SiteFooter from '../components/shared/SiteFooter.jsx'

import IliaHeader from '../components/ilia/IliaHeader.jsx'
import IliaHero from '../components/ilia/IliaHero.jsx'
import IliaCategoryNav from '../components/ilia/IliaCategoryNav.jsx'
import IliaProductShowcase from '../components/ilia/IliaProductShowcase.jsx'
import IliaEditorialSplit from '../components/ilia/IliaEditorialSplit.jsx'
import IliaTestimonial from '../components/ilia/IliaTestimonial.jsx'

import VahdamHeader from '../components/vahdam/VahdamHeader.jsx'
import VahdamHero from '../components/vahdam/VahdamHero.jsx'
import VahdamCategoryNav from '../components/vahdam/VahdamCategoryNav.jsx'
import VahdamCollectionSection from '../components/vahdam/VahdamCollectionSection.jsx'
import VahdamStorySection from '../components/vahdam/VahdamStorySection.jsx'
import VahdamTestimonial from '../components/vahdam/VahdamTestimonial.jsx'

import {
  iliaAnnouncement,
  iliaEditorial,
  iliaValues,
} from '../data/iliaData.js'

import {
  vahdamAnnouncement,
  vahdamProducts,
  vahdamTrustStats,
  vahdamValues,
} from '../data/vahdamData.js'

const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#ilia', label: 'ILIA Beauty' },
  { href: '#vahdam', label: 'VAHDAM India' },
  { href: '#component-map', label: 'Component Map' },
  { href: '#workflow', label: 'Workflow' },
]

function Home() {
  return (
    <>
      <header className="showcase-header">
        <div className="showcase-header__bar">
          <p className="showcase-header__title">Shopify Reference Component Showcase</p>
          <nav className="showcase-nav" aria-label="Showcase sections">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="overview" className="showcase-hero" aria-labelledby="overview-heading">
          <p className="showcase-hero__eyebrow">Overview</p>
          <h1 id="overview-heading">
            Shopify Reference
            <br />
            Component Showcase
          </h1>
          <p>
            A React component study based on two Shopify storefront references. Two live storefronts were
            researched for recurring UI patterns — announcement bars, navigation, hero layouts, product
            presentation, editorial storytelling, and trust sections. Those patterns were rebuilt as
            reusable, data-driven React components and assembled here on a single page. All imagery is a
            placeholder artboard; no real product photography, logos, or storefront copy is used.
          </p>
        </section>

        {/* ---------------- ILIA BEAUTY ---------------- */}
        <section id="ilia" className="reference-block reference-block--ilia" aria-labelledby="ilia-heading">
          <div className="reference-block__intro">
            <span className="reference-block__kicker">Reference 01 &middot; International</span>
            <h2 id="ilia-heading">ILIA Beauty</h2>
            <div className="reference-block__meta">
              <a href="https://iliabeauty.com/" target="_blank" rel="noreferrer noopener">
                iliabeauty.com
              </a>
              <span>Clean beauty &middot; editorial complexion focus</span>
            </div>
            <p className="reference-block__summary">
              ILIA's storefront favors a soft, editorial layout: a rotating offer bar, mega-menu navigation
              organized by product category, a single hero product moment, tile-based category entry
              points, a curated four-product showcase, split-screen editorial storytelling, sustainability
              messaging, and press-backed testimonials. The components below recreate that structure using
              original placeholder content.
            </p>
          </div>

          <IliaHeader />
          <AnnouncementBar messages={iliaAnnouncement} style={{ borderColor: 'var(--ilia-border)' }} />

          <div className="page-section">
            <IliaHero />
          </div>

          <div className="page-section page-section--tight">
            <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
              <SectionHeader eyebrow="Shop by Category" title="Six entry points into the current edit" />
            </div>
            <IliaCategoryNav />
          </div>

          <div className="page-section">
            <IliaProductShowcase />
          </div>

          {iliaEditorial.map((block) => (
            <IliaEditorialSplit key={block.title} {...block} />
          ))}

          <div className="page-section page-section--tight">
            <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
              <SectionHeader eyebrow="Brand Values" title="Commitments carried across every launch" />
            </div>
            <FeatureGrid items={iliaValues} />
          </div>

          <IliaTestimonial />

          <Newsletter
            heading="Join the ILIA list"
            description="Get early access to launches and a welcome discount on your first order."
            ctaLabel="Subscribe"
          />
        </section>

        {/* ---------------- VAHDAM INDIA ---------------- */}
        <section
          id="vahdam"
          className="reference-block reference-block--vahdam"
          aria-labelledby="vahdam-heading"
        >
          <div className="reference-block__intro">
            <span className="reference-block__kicker">Reference 02 &middot; Indian</span>
            <h2 id="vahdam-heading">VAHDAM India</h2>
            <div className="reference-block__meta">
              <a href="https://www.vahdam.in/" target="_blank" rel="noreferrer noopener">
                vahdam.in
              </a>
              <span>Direct-sourced tea &middot; premium wellness</span>
            </div>
            <p className="reference-block__summary">
              VAHDAM's storefront leans on scale and trust: a looping tiered-discount bar, a dense mega-menu
              of tea types and forms, carousel-style collection rows with rating and discount-driven product
              cards, credential-heavy trust statistics, and a founder-led story section. The components
              below recreate that structure using original placeholder content.
            </p>
          </div>

          <VahdamHeader />
          <AnnouncementBar messages={vahdamAnnouncement} style={{ borderColor: 'var(--vahdam-border)' }} />

          <div className="page-section">
            <VahdamHero />
          </div>

          <div className="page-section page-section--tight">
            <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
              <SectionHeader eyebrow="Shop by Category" title="Four core collections" />
            </div>
            <VahdamCategoryNav />
          </div>

          <div className="page-section">
            <VahdamCollectionSection
              title="Best Sellers"
              description="Top-reordered blends across the current catalog."
              products={vahdamProducts}
            />
          </div>

          <div className="page-section page-section--tight">
            <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
              <SectionHeader eyebrow="Trust Signals" title="Scale and credibility at a glance" />
            </div>
            <FeatureGrid items={vahdamTrustStats} />
          </div>

          <div className="page-section">
            <VahdamStorySection />
          </div>

          <div className="page-section page-section--tight">
            <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
              <SectionHeader eyebrow="Impact" title="Sourcing commitments behind every estate" />
            </div>
            <FeatureGrid items={vahdamValues} />
          </div>

          <VahdamTestimonial />

          <Newsletter
            heading="Subscribe for harvest updates"
            description="Occasional notes on new arrivals and limited single-estate batches."
            ctaLabel="Sign Up"
          />
        </section>

        {/* ---------------- COMPONENT MAP ---------------- */}
        <section id="component-map" className="page-section page-section--surface" aria-labelledby="map-heading">
          <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <SectionHeader
              eyebrow="Component Map"
              title="Every component, grouped by origin"
              description="A quick reference to which components belong to each brand section, and which pieces are shared across both."
            />
          </div>
          <ComponentMap />
        </section>

        {/* ---------------- WORKFLOW ---------------- */}
        <section id="workflow" className="page-section" aria-labelledby="workflow-heading">
          <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <SectionHeader
              eyebrow="Workflow"
              title="From storefront research to deployed showcase"
              description="The process used to move from live reference sites to this single-page React application."
            />
          </div>
          <Workflow />
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export default Home
