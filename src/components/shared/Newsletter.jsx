function Newsletter({ heading, description, ctaLabel = 'Subscribe' }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="newsletter">
      <h4>{heading}</h4>
      {description && <p>{description}</p>}
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
          Email address
        </label>
        <input id="newsletter-email" type="email" placeholder="Email address" required />
        <button type="submit" className="btn btn--small">
          {ctaLabel}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
