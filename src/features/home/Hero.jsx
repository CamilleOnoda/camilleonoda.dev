import "./Hero.css";
import { bannerIntro } from "../../config/home.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";

function Hero() {
  return (
    <section className="home-banner-section">
      <div className="home-banner-container">
        <div className="home-banner-inner-container">
          {/* Left - Text Content: Greeting, Name, Description, CTA, Social Links */}
          <motion.div
            className="home-banner-text-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromLeft}
          >
            <h2 className="home-banner-greeting">{bannerIntro.greeting}</h2>
            <h1 className="home-banner-name">{bannerIntro.name}</h1>
            <p className="home-banner-description">{bannerIntro.description}</p>

            {/* CTA Button & Social Links */}
            <div className="home-banner-icon-container">
              <Button
                text={bannerIntro.button}
                href={bannerIntro.cvLink}
                download
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="medium"
              />
              {/* Social Icons */}
              <div className="home-banner-social-icons">
                {bannerIntro.socialLinks.map((link, index) => (
                  <a
                    href={link.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.name} profile`}
                    title={link.name}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Image Content: Image & Experience Badge */}
          <motion.div
            className="home-banner-image-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromRight}
          >
            <img
              src={bannerIntro.image}
              alt={`${bannerIntro.name}, Creative Developer`}
              className="home-banner-image"
              loading="eager"
              fetchpriority="high"
            />
            <div className="home-banner-badge">
              <span className="home-banner-badge-year">
                {bannerIntro.experience.years}
              </span>
              {bannerIntro.experience.text}
              <span className="home-banner-emoji">
                {bannerIntro.experience.emoji}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
