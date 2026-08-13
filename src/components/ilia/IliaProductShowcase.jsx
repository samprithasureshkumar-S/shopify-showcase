import ProductCard from '../shared/ProductCard.jsx'
import SectionHeader from '../shared/SectionHeader.jsx'
import { iliaProducts } from '../../data/iliaData.js'

function IliaProductShowcase() {
  return (
    <div>
      <div style={{ padding: '0 var(--space-lg)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Curated Favorites"
          title="A capsule edit of complexion and eye essentials"
          description="Four recurring bestsellers, each shown with shade-driven variation and reward-eligible pricing."
        />
      </div>
      <div className="product-grid">
        {iliaProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  )
}

export default IliaProductShowcase
