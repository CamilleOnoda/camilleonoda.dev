import "./aboutSkills.css";
import { educationAndSkills } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";

const AboutSkills = () => {
  return (
    <section
      className="about-skills-section"
      aria-labelledby="education-heading"
    >
      <div className="about-skills-inner-container">
        {/* Education Section */}
        <motion.div
          className="about-skills-education-container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromLeft}
        >
          <h2 id="education-heading" className="about-skills-education-heading">
            My Education
          </h2>
          <div className="about-skills-education-list">
            {educationAndSkills.education.map((edu, index) => (
              <div
                key={index}
                className="about-skills-education-items-container"
              >
                <p className="about-skills-education-items">
                  {edu.degree} ({edu.year})
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="about-skills-skill-container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromRight}
        >
          <h2 className="about-skills-skill-heading">My Skills</h2>
          <div className="about-skills-skill-list">
            {educationAndSkills.skills.map((skill, index) => (
              <div key={index} className="about-skills-skill-items-container">
                <p className="about-skills-skill-items">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
