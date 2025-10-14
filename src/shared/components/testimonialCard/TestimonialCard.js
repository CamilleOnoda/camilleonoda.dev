import "./testimonialCard.css";

function TestimonialCard({ testimonial, index }) {
  return (
    <article
      key={index}
      className="testimonial-card"
      aria-labelledby={`testimonial-${index}-name`}
    >
      {/* Card Header: User Image + Name + Role */}
      <header className="testimonial-header">
        <img
          src={testimonial.image}
          alt={`${testimonial.name}'s profile`}
          className="testimonial-img"
          loading="lazy"
        />
        <div>
          {/* Client Name */}
          <h3 id={`testimonial-${index}-name`} className="testimonial-name">
            {testimonial.name}
          </h3>
          {/* Client Role or Position */}
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </header>
      {/* Testimonial Text */}
      <blockquote className="testimonial-description">
        “{testimonial.text}”
      </blockquote>
    </article>
  );
}

export default TestimonialCard;
