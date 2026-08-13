function FeatureGrid({ items, columns = 3 }) {
  return (
    <div className="feature-grid" style={{ '--feature-cols': columns }}>
      {items.map((item) => (
        <div className="feature-item" key={item.title}>
          {item.icon && (
            <div className="feature-item__icon" aria-hidden="true">
              {item.icon}
            </div>
          )}
          {item.stat && <p className="feature-item__stat">{item.stat}</p>}
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureGrid
