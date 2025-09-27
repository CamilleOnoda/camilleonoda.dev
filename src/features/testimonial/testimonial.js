import "./testimonial.css";
import { TestimonialsData } from "../../config/testimonials.config";
import { motion } from "framer-motion";
import {
  fadeUpItem,
  containerStagger,
} from "../../shared/components/FramerVariants";

function Testimonial() {
  return (
    <section
      className="testimonial-section"
      aria-labelledby="testimonial-heading"
    >
      {/* Accessible and semantic heading */}
      <motion.h2
        id="testimonial-heading"
        className="testimonial-title"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        What <span className="testimonial-highlight">my clients</span> say about
        <span className="highlight"> my work</span>
      </motion.h2>

      {/* Testimonials list */}
      <motion.div
        className="testimonial-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {TestimonialsData.map((testimonial, index) => (
          <motion.article
            key={index}
            className="testimonial-card"
            variants={fadeUpItem}
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
                <h3
                  id={`testimonial-${index}-name`}
                  className="testimonial-name"
                >
                  {testimonial.name}
                </h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </header>
            <blockquote className="testimonial-description">
              “{testimonial.text}”
            </blockquote>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Testimonial;
