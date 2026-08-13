import { vahdamTestimonials } from '../../data/vahdamData.js'

function VahdamTestimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__quotes">
        {vahdamTestimonials.map((item) => (
          <div className="testimonial__quote" key={item.quote}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VahdamTestimonial
