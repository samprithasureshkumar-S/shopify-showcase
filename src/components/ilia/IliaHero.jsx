import PlaceholderImage from '../shared/PlaceholderImage.jsx'
import Button from '../shared/Button.jsx'
import { iliaHero } from '../../data/iliaData.js'

function IliaHero() {
  return (
    <div className="brand-hero">
      <div className="brand-hero__copy">
        <p className="eyebrow">{iliaHero.eyebrow}</p>
        <h4>{iliaHero.title}</h4>
        <p>{iliaHero.description}</p>
        <Button>Shop the Edit</Button>
      </div>
      <PlaceholderImage label="HERO IMAGE" ratio="4 / 3" />
    </div>
  )
}

export default IliaHero
