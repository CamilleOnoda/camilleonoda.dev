import "./bannerIntro.css";
import { bannerIntro } from "../../config/home.config";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../components/FramerVariants";
import Button from "../../components/Button";

function BannerIntro() {
  return (
    <section className="home-banner-section">
      <div className="home-banner-container">
        <div className="home-banner-inner-container">
          {/* Left - Text Container */}
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

            <div className="home-banner-icon-container">
              <Button
                text="Download CV"
                href={bannerIntro.cvLink}
                download
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="medium"
              />

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

          {/* Right - Image Container */}
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
              loading="lazy"
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

export default BannerIntro;
