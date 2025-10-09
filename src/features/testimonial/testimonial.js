import "./testimonial.css";
import {
  TestimonialsData,
  TestimonialHeading,
} from "../../config/testimonials.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import TestimonialCard from "../../shared/components/testimonialCard/TestimonialCard";

function Testimonial() {
  return (
    <section
      className="testimonial-section"
      aria-labelledby="testimonial-heading"
    >
      {/* Heading with motion */}
      <motion.h2
        id="testimonial-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeader title={TestimonialHeading.heading.title} />
      </motion.h2>

      {/* Testimonials grid */}
      <div className="testimonial-inner-container">
        {TestimonialsData.map((testimonial, index) => (
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

export default Testimonial;
