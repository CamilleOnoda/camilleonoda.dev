import "./Services.css";
import { bannerServices } from "../../config/home.config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import Card from "../../shared/components/card/Card";

function HomeServices() {
  return (
    <section
      className="home-services-container"
      aria-labelledby="services-heading"
    >
      <motion.div
        id="services-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeader title={bannerServices.heading.title} />
      </motion.div>

      {/* Services Grid */}
      <div className="home-services-inner-container">
        {bannerServices.services.map((item, index) => (
          <Link
            key={item.id}
            to={`/portfolio?category=${encodeURIComponent(item.category)}`}
            className="home-services-card-link"
            aria-label={`Explore ${item.title} projects`}
          >
            <Card
              meta={item.projects}
              title={item.title}
              description={item.description}
              metaFirst={true}
              type="hover-arrow"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeServices;
