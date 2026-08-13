function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <h5>Shopify Reference Component Showcase</h5>
          <p>
            A React component study analyzing reusable UI patterns from two Shopify storefronts and rebuilding
            them as a documented, data-driven component library.
          </p>
        </div>
        <div>
          <h6>References</h6>
          <ul>
            <li>ILIA Beauty</li>
            <li>VAHDAM India</li>
          </ul>
        </div>
        <div>
          <h6>Technology</h6>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Plain CSS</li>
          </ul>
        </div>
        <div>
          <h6>Documentation</h6>
          <ul>
            <li>Reference Analysis</li>
            <li>Component Inventory</li>
            <li>Component Workflow</li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        Built as an internship submission. No backend, payments, or real storefront data are used.
      </div>
    </footer>
  )
}

export default SiteFooter
