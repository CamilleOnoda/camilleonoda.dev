import "./AboutEducation.css";
import { educationData } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import AboutCard from "../../shared/components/aboutCard/AboutCard";

const AboutEducation = () => {
  return (
    <section className="about-education-section">
      <div className="about-education-container">

        <motion.div
          className="about-achievements-wrapper"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={slideFromRight}
        >
          <SectionHeader
            title={educationData.achievementsHeading.title}
            align="left"
          />
          <div className="about-achievements-grid">
            {educationData.achievements.map((item, index) => (
              <AboutCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-education-wrapper"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={slideFromLeft}
        >
          <SectionHeader title={educationData.heading.title} align="left" />
          <AboutCard>
            {educationData.education.map((edu, index) => (
              <p key={index} className="about-education-item">
                <span className="about-education-degree">{edu.degree}</span>
                <span className="about-education-year">{edu.year}</span>
              </p>
            ))}
          </AboutCard>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutEducation;
