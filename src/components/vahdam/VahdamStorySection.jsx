import PlaceholderImage from '../shared/PlaceholderImage.jsx'
import Button from '../shared/Button.jsx'
import { vahdamStory } from '../../data/vahdamData.js'

function VahdamStorySection() {
  return (
    <div className="editorial-split">
      <PlaceholderImage label={vahdamStory.imageLabel} ratio="4 / 3" />
      <div className="editorial-split__copy">
        <p className="eyebrow">{vahdamStory.eyebrow}</p>
        <h4>{vahdamStory.title}</h4>
        <p>{vahdamStory.description}</p>
        <Button variant="secondary" size="small">
          Read Our Story
        </Button>
      </div>
    </div>
  )
}

export default VahdamStorySection
