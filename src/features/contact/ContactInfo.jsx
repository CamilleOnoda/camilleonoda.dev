import "./ContactInfo.css";
import { ContactData } from "../../config/contact.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import ContactCard from "../../shared/components/contactCard/ContactCard";

const ContactInfo = () => {
  return (
    <section
      className="contact-info-section"
      aria-labelledby="contact-info-heading"
    >
      {/* Section heading with fade-up animation */}
      <motion.div
        id="contact-info-heading"
        className="contact-info-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        <SectionHeader title={ContactData.secondheading.title} />
      </motion.div>

      {/* Cards list (no motion on individual cards) */}
      <div className="contact-info-inner-container">
        {ContactData.contactCards.map((card, index) => (
          <ContactCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
