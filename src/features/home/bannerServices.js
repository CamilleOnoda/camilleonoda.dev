import "./bannerServices.css";
import { Link } from "react-router-dom";
import { bannerServices } from "../../config/home.config";
import { motion } from "framer-motion";
import {
  containerStagger,
  fadeUpItem,
} from "../../shared/components/FramerVariants";

function BannerServices() {
  return (
    <section
      className="home-services-container"
      aria-labelledby="services-heading"
    >
      {/* Heading with fade-up animation */}
      <motion.h2
        id="services-heading"
        className="home-services-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        How can <span className="home-services-highlight">I help you</span>
      </motion.h2>

      {/* Container with staggered upward cards */}
      <motion.div
        className="home-services-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {bannerServices.map((service, index) => (
          <motion.div
            key={index}
            className="home-services-container-box"
            variants={fadeUpItem}
          >
            <p className="home-services-projects">{service.projects}</p>
            <h3 className="home-services-box-heading">{service.title}</h3>
            <p className="home-services-box-description">
              {service.description}
            </p>
            <Link
              to={`/portfolio?category=${encodeURIComponent(service.category)}`}
              className="home-services-explore"
              aria-label={`Explore portfolio projects related to ${service.title}`}
            >
              Explore
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default BannerServices;
