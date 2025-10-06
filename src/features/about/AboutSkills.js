import "./aboutSkills.css";
import { educationAndSkills } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import AboutCard from "../../shared/components/aboutCard/AboutCard";

const AboutSkills = () => {
  return (
    <section
      className="about-skills-section"
      aria-labelledby="education-heading"
    >
      <div className="about-skills-inner-container">
        <motion.div
          className="about-skills-card-wrapper"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromLeft}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <SectionHeader
            title={educationAndSkills.educationHeading.title}
            align="left"
          />
          <AboutCard>
            {educationAndSkills.education.map((edu, index) => (
              <p key={index} className="about-skills-education-items">
                {edu.degree} ({edu.year})
              </p>
            ))}
          </AboutCard>
        </motion.div>

        <motion.div
          className="about-skills-card-wrapper"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromRight}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <SectionHeader
            title={educationAndSkills.skillHeading.title}
            align="left"
          />
          <AboutCard>
            {educationAndSkills.skills.map((skill, index) => (
              <p key={index} className="about-skills-skill-items">
                {skill}
              </p>
            ))}
          </AboutCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
