import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import "./Testimonials.css";
import {
  TestimonialsData,
  TestimonialHeading,
} from "../../config/testimonials.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import TestimonialCard from "../../shared/components/testimonialCard/TestimonialCard";

function Testimonial() {
  return (
    <>
      <SEO
        title={seoData.testimonials.title}
        description={seoData.testimonials.description}
      />
      <section
        className="testimonial-section"
        aria-labelledby="testimonial-heading"
      >
        {/* Section heading with animation */}
        <motion.div
          id="testimonial-heading"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <SectionHeader title={TestimonialHeading.heading.title} />
        </motion.div>

        {/* Testimonials grid layout*/}
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
    </>
  );
}

export default Testimonial;
