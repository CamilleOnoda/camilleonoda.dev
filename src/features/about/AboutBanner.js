import "./aboutBanner.css";
import { aboutIntro } from "../../config/about.config";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../components/FramerVariants";
import Button from "../../components/Button";

function AboutBanner() {
  return (
    <section className="about-banner-section" aria-labelledby="about-heading">
      <div className="about-banner-container">
        <div className="about-banner-inner-container">
          {/* Left: Image + Badge */}
          <motion.div
            className="about-banner-image-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromLeft}
          >
            <img
              src={aboutIntro.image}
              alt="Amara Lune, frontend developer"
              className="about-banner-image"
              loading="lazy"
            />
            <div className="about-banner-badge">
              <span className="about-banner-emoji">
                {aboutIntro.badge.emoji}
              </span>
              {aboutIntro.badge.text} <br />
              {aboutIntro.badge.description}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="about-banner-text-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromRight}
          >
            <h2 id="about-heading" className="about-banner-heading">
              I <span className="about-banner-highlight">build software</span>{" "}
              that solve users problems
            </h2>
            <p className="about-banner-description">{aboutIntro.description}</p>
            {/* <a
              href={aboutIntro.cvLink}
              className="about-banner-cv-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Amara's CV in PDF format"
            >
              Download CV
            </a> */}
            <Button
              text="Download CV"
              href={aboutIntro.cvLink}
              download
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="medium"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
