import "./testimonialCard.css";

function TestimonialCard({ testimonial, index }) {
  return (
    <article
      key={index}
      className="testimonial-card"
      aria-labelledby={`testimonial-${index}-name`}
    >
      <header className="testimonial-header">
        <img
          src={testimonial.image}
          alt={`${testimonial.name}'s profile`}
          className="testimonial-img"
          loading="lazy"
        />
        <div>
          <h3 id={`testimonial-${index}-name`} className="testimonial-name">
            {testimonial.name}
          </h3>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </header>
      <blockquote className="testimonial-description">
        “{testimonial.text}”
      </blockquote>
    </article>
  );
}

export default TestimonialCard;
