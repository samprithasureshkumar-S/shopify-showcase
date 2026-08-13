function PlaceholderImage({ label = 'IMAGE', ratio = '4 / 5' }) {
  return (
    <div className="placeholder-image" style={{ '--ph-ratio': ratio }} role="img" aria-label={label}>
      <span className="placeholder-image__label">{label}</span>
    </div>
  )
}

export default PlaceholderImage
