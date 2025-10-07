import "./bannerTestimonial.css";
import { motion } from "framer-motion";
import {
  TestimonialsData,
  TestimonialHeading,
} from "../../config/testimonials.config";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import TestimonialCard from "../../shared/components/testimonialCard/TestimonialCard";

function BannerTestimonial() {
  return (
    <section
      className="home-testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        <SectionHeader title={TestimonialHeading.heading.homeTitle} />
      </motion.div>

      {/* Testimonials Card */}
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

export default BannerTestimonial;
