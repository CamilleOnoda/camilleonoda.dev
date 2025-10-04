import "./bannerTestimonials.css";
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
import Card from "../../shared/components/card/Card";

function BannerTestimonials() {
  return (
    <section
      className="home-testimonials-container"
      aria-labelledby="testimonials-heading"
    >
      {/* Heading */}
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
        />
      </motion.div>

      {/* Testimonials as cards */}
      <motion.div
        className="home-testimonials-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {TestimonialsData.slice(0, 4).map((testimonial, index) => (
          <Card
            key={index}
            type="testimonial"
            description={testimonial.text}
            title={testimonial.name}
            image={testimonial.image}
            role={testimonial.role}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default BannerTestimonials;
