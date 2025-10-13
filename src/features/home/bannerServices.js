import "./bannerServices.css";
import { bannerServices } from "../../config/home.config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import Card from "../../shared/components/card/Card";

function BannerServices() {
  return (
    <section
      className="home-services-container"
      aria-labelledby="services-heading"
    >
      {/* Section Header with animation */}
      <motion.h2
        id="services-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeader title={bannerServices.heading.title} />
      </motion.h2>

      {/* Services Grid: Map over services and render each as clickable Card */}
      <div className="home-services-inner-container">
        {bannerServices.services.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio?category=${encodeURIComponent(item.category)}`}
          >
            <Card
              meta={item.projects}
              title={item.title}
              description={item.description}
              metaFirst={true}
              linkLabel="Explore"
              linkUrl={`/portfolio?category=${encodeURIComponent(
                item.category
              )}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BannerServices;
