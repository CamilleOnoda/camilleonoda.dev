import "./bannerTestimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import {
  TestimonialsData,
  TestimonialHeading,
} from "../../config/testimonials.config";
import { motion } from "framer-motion";
import {
  containerStagger,
  fadeUpItem,
} from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

function BannerTestimonials() {
  return (
    <section
      className="home-testimonials-container"
      aria-labelledby="testimonials-heading"
    >
      {/* Heading with fade-up animation */}
      <motion.div
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        <SectionHeader
          title={TestimonialHeading.heading.title}
          highlight={TestimonialHeading.heading.highlight}
          end={TestimonialHeading.heading.end}
          align={TestimonialHeading.heading.align}
        />
      </motion.div>

      {/* Container with staggered upward testimonial cards */}
      <motion.div
        className="home-testimonials-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {TestimonialsData.slice(0, 4).map((testimonial, index) => (
          <motion.article
            key={index}
            className="home-testimonials-container-box"
            variants={fadeUpItem}
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <FaQuoteLeft className="home-testimonials-quote-icon" />
            <p className="home-testimonials-description">{testimonial.text}</p>
            <div className="home-testimonials-user">
              <img
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}, ${testimonial.role}`}
              />
              <div>
                <h4 className="home-testimonials-user-name">
                  {testimonial.name}
                </h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default BannerTestimonials;
