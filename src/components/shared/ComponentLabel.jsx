function ComponentLabel({ name, note }) {
  return (
    <p className="component-label">
      <code>{name}</code>
      {note && <span className="component-label__note"> — {note}</span>}
    </p>
  )
}

export default ComponentLabel
