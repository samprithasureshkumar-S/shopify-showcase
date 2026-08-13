import CategoryTile from '../shared/CategoryTile.jsx'
import { iliaCategories } from '../../data/iliaData.js'

function IliaCategoryNav() {
  return (
    <div className="category-grid">
      {iliaCategories.map((label) => (
        <CategoryTile key={label} label={label} />
      ))}
    </div>
  )
}

export default IliaCategoryNav
