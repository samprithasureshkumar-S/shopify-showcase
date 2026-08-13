import PlaceholderImage from '../shared/PlaceholderImage.jsx'
import Button from '../shared/Button.jsx'

function IliaEditorialSplit({ eyebrow, title, description, imageLabel, reverse }) {
  return (
    <div className={`editorial-split ${reverse ? 'editorial-split--reverse' : ''}`}>
      <div className="editorial-split__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button variant="secondary" size="small">
          Learn More
        </Button>
      </div>
      <PlaceholderImage label={imageLabel} ratio="4 / 3" />
    </div>
  )
}

export default IliaEditorialSplit
