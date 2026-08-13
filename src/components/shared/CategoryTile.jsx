import PlaceholderImage from './PlaceholderImage.jsx'

function CategoryTile({ label }) {
  return (
    <a className="category-tile" href="#" onClick={(event) => event.preventDefault()}>
      <PlaceholderImage label={label} ratio="1 / 1" />
      <p className="category-tile__label">{label}</p>
    </a>
  )
}

export default CategoryTile
