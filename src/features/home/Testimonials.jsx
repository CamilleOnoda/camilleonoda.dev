import "./Testimonials.css";
import { motion } from "framer-motion";
import {
  TestimonialsData,
  TestimonialHeading,
} from "../../config/testimonials.config";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import TestimonialCard from "../../shared/components/testimonialCard/TestimonialCard";

function HomeTestimonial() {
  return (
    <section
      className="home-testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      {/* Section Header with animation */}
      <motion.div
        id="testimonials-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeader title={TestimonialHeading.heading.homeTitle} />
      </motion.div>

      {/* Testimonials Grid: Show up to 4 testimonials using TestimonialCard */}
      <div className="home-testimonials-inner-container">
        {TestimonialsData.slice(0, 4).map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeTestimonial;
