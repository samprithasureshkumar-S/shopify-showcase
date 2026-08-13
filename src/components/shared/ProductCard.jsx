import PlaceholderImage from './PlaceholderImage.jsx'
import Badge from './Badge.jsx'
import Rating from './Rating.jsx'
import Button from './Button.jsx'

function ProductCard({ title, price, comparePrice, currency = '$', badge, rating, reviewCount, imageLabel }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {badge && (
          <div className="product-card__badge-row">
            <Badge>{badge}</Badge>
          </div>
        )}
        <PlaceholderImage label={imageLabel || 'PRODUCT IMAGE'} />
      </div>

      <h4 className="product-card__title">{title}</h4>

      {typeof rating === 'number' && <Rating value={rating} count={reviewCount} />}

      <div className="product-card__price-row">
        <span className="product-card__price">
          {currency}
          {price}
        </span>
        {comparePrice && (
          <span className="product-card__price--strike">
            {currency}
            {comparePrice}
          </span>
        )}
      </div>

      <Button variant="secondary" size="small">
        Add to Bag
      </Button>
    </article>
  )
}

export default ProductCard
