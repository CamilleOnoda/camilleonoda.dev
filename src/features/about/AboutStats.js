import "./aboutStats.css";
import { aboutStats } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  fadeUpItem,
  containerStagger,
} from "../../shared/components/FramerVariants";

function AboutStats() {
  return (
    <section
      className="about-stats-section"
      aria-labelledby="about-stats-heading"
    >
      <motion.div
        className="about-stats-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {aboutStats.map((stat, index) => (
          <motion.article
            key={index}
            className="about-stats-container-box"
            variants={fadeUpItem}
          >
            <h2 className="about-stats-box-heading">{stat.title}</h2>
            <p className="about-stats-box-description">{stat.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutStats;
