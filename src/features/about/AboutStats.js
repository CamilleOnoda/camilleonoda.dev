import "./aboutStats.css";
import { aboutStats } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  fadeUpItem,
  containerStagger,
} from "../../shared/components/FramerVariants";
import AboutCard from "../../shared/components/aboutCard/AboutCard";

function AboutStats() {
  return (
    <section
      className="about-stats-section"
      aria-labelledby="about-stats-heading"
    >
      {/* <motion.div
        className="about-stats-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {aboutStats.map((stat, index) => (
          <motion.div key={index} variants={fadeUpItem}>
            <AboutCard title={stat.title} description={stat.description} />
          </motion.div>
        ))}
      </motion.div> */}
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
            className="about-stats-card-wrapper"
            variants={fadeUpItem}
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <AboutCard title={stat.title} description={stat.description} />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutStats;
