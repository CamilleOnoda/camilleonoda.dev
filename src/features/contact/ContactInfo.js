import "./contactInfo.css";
import { ContactData } from "../../config/contact.config";
import { motion } from "framer-motion";
import { containerStagger, fadeUpItem } from "../../components/FramerVariants";

const ContactInfo = () => {
  return (
    <section
      className="contact-info-section"
      aria-labelledby="contact-info-heading"
    >
      <motion.h2
        id="contact-info-heading"
        className="contact-info-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        Reach out via <span className="contact-highlight">social media</span> or{" "}
        <span className="contact-highlight">email</span>
      </motion.h2>

      {/* Animated Cards Container */}
      <motion.div
        className="contact-info-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {ContactData.contactCards.map((card, index) => (
          <motion.article
            className="contact-info-box"
            key={index}
            variants={fadeUpItem}
            aria-labelledby={`contact-card-${index}-title`}
          >
            <div className="contact-info-icon" aria-hidden="true">
              <i className={card.iconClass}></i>
            </div>

            <div className="contact-info-content">
              <h3
                id={`contact-card-${index}-title`}
                className="contact-info-card-name"
              >
                {card.type}
              </h3>

              {card.links && (
                <p className="contact-info-links">
                  {card.links.map((link, i) => (
                    <span key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-link"
                      >
                        {link.label}
                      </a>
                      {i !== card.links.length - 1 && (
                        <span className="separator" aria-hidden="true">
                          {" "}
                          |{" "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              )}

              {card.phone && <p className="contact-info-phone">{card.phone}</p>}

              {card.email && (
                <a
                  className="contact-info-email"
                  href={card.email.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.email.label}
                </a>
              )}

              {card.icons && (
                <div className="contact-info-social-icons">
                  {card.icons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.label} link in new tab`}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              )}

              {card.description && (
                <p className="contact-info-description">{card.description}</p>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactInfo;
