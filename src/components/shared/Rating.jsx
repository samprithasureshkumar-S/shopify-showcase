function Rating({ value, count }) {
  const fullStars = Math.round(value)
  const stars = '★★★★★'.slice(0, fullStars) + '☆☆☆☆☆'.slice(0, 5 - fullStars)

  return (
    <span className="rating">
      <span className="rating__stars" aria-hidden="true">
        {stars}
      </span>
      <span>
        {value.toFixed(1)}
        {count ? ` (${count.toLocaleString()})` : ''}
      </span>
    </span>
  )
}

export default Rating
