import "./contactInfo.css";
import { ContactData } from "../../config/contact.config";
import { motion } from "framer-motion";
import { containerStagger, fadeUpItem } from "../../components/FramerVariants";

// Utility component for all external links
const ExternalLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

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

      {/* Contact Cards Container */}
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
          >
            {/*  Icon (use optimized imports, not full library) */}
            {card.iconClass && (
              <div className="contact-info-icon" aria-hidden="true">
                <i className={card.iconClass}></i>
              </div>
            )}

            <div className="contact-info-content">
              <h3 className="contact-info-card-name">{card.type}</h3>

              {/* Multiple links (e.g. GitHub, LinkedIn) */}
              {card.links && (
                <p className="contact-info-links">
                  {card.links.map((link, i) => (
                    <span key={i}>
                      <ExternalLink
                        href={link.href}
                        className="contact-info-link"
                      >
                        {link.label}
                      </ExternalLink>
                      {i !== card.links.length - 1 && (
                        <span className="separator" aria-hidden="true">
                          {" | "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              )}

              {/* Phone number (user replaces with their own) */}
              {card.phone && <p className="contact-info-phone">{card.phone}</p>}

              {/* Email → uses mailto for quick setup */}
              {card.email && (
                <a
                  className="contact-info-email"
                  href={`mailto:${card.email.label}`}
                >
                  {card.email.label}
                </a>
              )}

              {/* Social icons (e.g. GitHub, Twitter, LinkedIn) */}
              {card.icons && (
                <div className="contact-info-social-icons">
                  {card.icons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <ExternalLink
                        key={i}
                        href={item.href}
                        aria-label={`Open ${item.label} in new tab`}
                      >
                        <Icon />
                      </ExternalLink>
                    );
                  })}
                </div>
              )}

              {/* Optional description */}
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
