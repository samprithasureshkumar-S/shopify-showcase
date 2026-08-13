import ProductCard from '../shared/ProductCard.jsx'
import Button from '../shared/Button.jsx'
import { vahdamProducts } from '../../data/vahdamData.js'

function VahdamCollectionSection({ title, description, products = vahdamProducts }) {
  return (
    <div>
      <div className="collection-section__head">
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 0.4rem' }}>{title}</h3>
          <p style={{ margin: 0, opacity: 0.75 }}>{description}</p>
        </div>
        <Button variant="secondary" size="small">
          View All
        </Button>
      </div>
      <div className="collection-scroll">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  )
}

export default VahdamCollectionSection
