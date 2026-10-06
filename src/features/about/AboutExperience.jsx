import "./AboutExperience.css";
import { workExperience } from "../../config/about.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";

const AboutExperience = () => {
  return (
    <section className="about-experience-section">
      <div className="about-experience-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpItem}
        >
          <SectionHeader title={workExperience.heading.title} align="left" />
        </motion.div>

        <div className="about-experience-list">
          {workExperience.jobs.map((job, index) => (
            <div key={index} className="about-experience-item">
              {/* Left: Period */}
              <div className="about-experience-period">
                <span>{job.period}</span>
              </div>

              {/* Right: Job Details */}
              <div className="about-experience-details">
                <h3 className="about-experience-role">{job.role}</h3>
                <p className="about-experience-company">{job.company}</p>
                <p className="about-experience-description">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
