import CategoryTile from '../shared/CategoryTile.jsx'
import { vahdamCategories } from '../../data/vahdamData.js'

function VahdamCategoryNav() {
  return (
    <div className="category-grid category-grid--compact">
      {vahdamCategories.map((label) => (
        <CategoryTile key={label} label={label} />
      ))}
    </div>
  )
}

export default VahdamCategoryNav
