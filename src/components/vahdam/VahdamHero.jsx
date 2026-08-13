import PlaceholderImage from '../shared/PlaceholderImage.jsx'
import Button from '../shared/Button.jsx'
import { vahdamHero } from '../../data/vahdamData.js'

function VahdamHero() {
  return (
    <div className="brand-hero">
      <div className="brand-hero__copy">
        <p className="eyebrow">{vahdamHero.eyebrow}</p>
        <h4>{vahdamHero.title}</h4>
        <p>{vahdamHero.description}</p>
        <Button>Shop Fresh Arrivals</Button>
      </div>
      <PlaceholderImage label="HERO IMAGE" ratio="4 / 3" />
    </div>
  )
}

export default VahdamHero
