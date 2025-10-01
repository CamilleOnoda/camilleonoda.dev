import "./contactForm.css";
import { ContactData } from "../../config/contact.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

const ContactForm = () => {
  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-heading"
    >
      <div className="contact-form-container">
        <div className="contact-form-inner-container">
          {/* Left: Image Container with Animation */}
          <motion.div
            className="home-banner-image-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromLeft}
          >
            <img
              src={ContactData.image}
              alt="Amara Lune, Frontend Developer"
              className="home-banner-image"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Contact Form with Animation */}
          {/*
             Contact Form UI only.
             To make this form work, you can use any service or library:
             - Formspree (https://formspree.io)
             - Netlify Forms (if hosting on Netlify)
             - EmailJS (https://www.emailjs.com/)
             - Or connect it to your own backend API
           */}

          <motion.form
            className="contact-form-text-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromRight}
            aria-describedby="contact-form-description"
            name="contact"
          >
            <SectionHeader
              title={ContactData.heading.start}
              highlight={ContactData.heading.highlight}
              align="left"
            />

            <p id="contact-form-description" className="sr-only">
              Fill out the form below to get in touch with me about your
              project.
            </p>

            <fieldset className="contact-form-input-container">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="contact-form-input"
                required
              />

              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="contact-form-input"
                required
              />
            </fieldset>

            <fieldset className="contact-form-input-container">
              <label htmlFor="phone" className="sr-only">
                Your Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                className="contact-form-input"
              />

              <label htmlFor="subject" className="sr-only">
                Your Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
                className="contact-form-input"
              />
            </fieldset>

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Have questions? Fire away!"
              required
              className="contact-form-textarea"
            ></textarea>

            <div className="contact-form-submit-wrapper">
              <Button
                text="Send Message"
                type="submit"
                variant="primary"
                size="medium"
              />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
