import "./aboutStory.css";
import { Link } from "react-router-dom";
import { storyData } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";

function AboutStory() {
  return (
    <section
      className="about-story-section"
      aria-labelledby="about-story-heading"
    >
      <div className="about-story-container">
        <div className="about-story-inner-container">
          {/* Left: Image Container with Animation */}
          <motion.div
            className="about-story-image-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromLeft}
          >
            <img
              src={storyData.image}
              alt="Workspace view representing personal journey"
              className="about-story-img"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text Container with Animation */}
          <motion.div
            className="about-story-text-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromRight}
          >
            <h2 id="about-story-heading" className="about-story-text-heading">
              {storyData.heading}
            </h2>
            <p className="about-story-text-description">{storyData.text}</p>
            <Link to={storyData.linkUrl} className="about-story-link">
              {storyData.linkText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
