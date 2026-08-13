import { iliaTestimonials, iliaPress } from '../../data/iliaData.js'

function IliaTestimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__quotes">
        {iliaTestimonials.map((item) => (
          <div className="testimonial__quote" key={item.quote}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="testimonial__press">
        {iliaPress.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}

export default IliaTestimonial
