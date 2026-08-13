function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeader
