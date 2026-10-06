import "./AboutSkills.css";
import { skillsData } from "../../config/about.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";

const AboutSkills = () => {
  return (
    <section className="about-skills-section">
      <div className="about-skills-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpItem}
        >
          <SectionHeader title={skillsData.heading.title} align="left" />
        </motion.div>

        <div className="about-skills-badges-container">
          {skillsData.skills.map((skill, index) => (
            <span key={index} className="about-skills-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
