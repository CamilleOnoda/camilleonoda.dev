import { Link } from "react-router-dom";
import "./TestimonialCard.css";

function TestimonialCard({ testimonial, index }) {
  return (
    <Link
      to="/portfolio"
      className="testimonial-card hover-arrow"
      aria-labelledby={`testimonial-${index}-name`}
    >
      <header className="testimonial-header">
        <div>
          <h3
            id={`testimonial-${index}-name`}
            className="testimonial-name"
          >
            {testimonial.name}
          </h3>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </header>

      <p className="testimonial-description">{testimonial.text}</p>
    </Link>
  );
}

export default TestimonialCard;