import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import "./Services.css";
import { motion } from "framer-motion";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import { ServicesData, ServicesIntro } from "../../config/services.config";
import { fadeUpItem } from "../../shared/components/FramerVariants";

function Services() {
  return (
    <>
      <SEO
        title={seoData.services.title}
        description={seoData.services.description}
      />
      <section
        className="services-section"
        aria-labelledby="services-section-heading"
      >
        <div className="services-header-container">
          <motion.div
            id="services-section-heading"
            variants={fadeUpItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <SectionHeader title={ServicesIntro.heading.title} />
          </motion.div>

          <div className="services-inner-container">
            {ServicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="service-card">
                  {/* Icon */}
                  <div className="service-card-icon" aria-hidden="true">
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title">{service.title}</h3>

                  {/* Description */}
                  <p className="service-card-description">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
