import "./aboutBanner.css";
import { aboutIntro } from "../../config/about.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

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
              width="560"
              height="700"
            />

            <div className="about-banner-badge" role="status">
              <span className="about-banner-emoji" aria-hidden="true">
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
            <SectionHeader
              title={aboutIntro.heading.start}
              highlight={aboutIntro.heading.highlight}
              end={aboutIntro.heading.end}
              align="left"
            />

            <p className="about-banner-description">{aboutIntro.description}</p>

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
