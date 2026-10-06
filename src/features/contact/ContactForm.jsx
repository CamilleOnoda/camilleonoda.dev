import "./ContactForm.css";
import { useState } from "react";
import { ContactData } from "../../config/contact.config";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";

const contactReasons = [
  "Job opportunity",
  "Project or collaboration",
  "A question about my work",
  "Something else",
];

const emptyForm = {
  name: "",
  email: "",
  reason: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ ...emptyForm });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const isSending = status === "sending";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setStatus(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    setStatus(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/myezolkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          reason: formData.reason,
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent.");

      setFormData({ ...emptyForm });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-heading"
    >
      <div className="contact-form-container">
        <div className="contact-form-inner-container">
          <motion.div
            className="contact-form-image-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromLeft}
          >
            <img
              src={ContactData.image}
              alt={ContactData.imageAlt || ""}
              className="contact-form-image"
              loading="lazy"
            />
          </motion.div>

          <motion.form
            className="contact-form-text-container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromRight}
            name="contact"
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isSending}
          >
            <div id="contact-form-heading">
              <SectionHeader
                title={ContactData.heading.title}
                align="left"
              />
            </div>

            <p className="contact-intro">
              {ContactData.heading.description}
            </p>

            {status === "success" && (
              <div
                className="contact-form-feedback contact-form-success"
                role="status"
              >
                Your message has been sent. Thank you for reaching out.
              </div>
            )}

            {status === "error" && (
              <div
                className="contact-form-feedback contact-form-error"
                role="alert"
              >
                Your message could not be sent. Please try again or email{" "}
                <a href="mailto:info@camilleonoda.com">
                  info@camilleonoda.com
                </a>
                .
              </div>
            )}

            <div className="contact-form-input-container">
              <div className="contact-form-field">
                <label htmlFor="contact-name" className="sr-only">
                  Your name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Your name *"
                  className={`contact-form-input ${
                    errors.name ? "contact-form-input-error" : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <span
                    id="contact-name-error"
                    className="contact-field-error"
                    role="alert"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email" className="sr-only">
                  Your email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  autoComplete="email"
                  placeholder="Your email *"
                  className={`contact-form-input ${
                    errors.email ? "contact-form-input-error" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <span
                    id="contact-email-error"
                    className="contact-field-error"
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="contact-form-input-container">
              <div className="contact-form-field">
                <label htmlFor="contact-reason" className="sr-only">
                  What’s your message about? (optional)
                </label>
                <select
                  name="reason"
                  id="contact-reason"
                  className="contact-form-input contact-form-select"
                  value={formData.reason}
                  onChange={handleChange}
                  disabled={isSending}
                >
                  <option value="">
                    What’s your message about? (optional)
                  </option>
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-message" className="sr-only">
                Your message (required)
              </label>
              <textarea
                name="message"
                id="contact-message"
                placeholder="Tell me about the role, project, or question you have in mind *"
                className={`contact-form-textarea ${
                  errors.message ? "contact-form-input-error" : ""
                }`}
                value={formData.message}
                onChange={handleChange}
                disabled={isSending}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {errors.message && (
                <span
                  id="contact-message-error"
                  className="contact-field-error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <div className="contact-form-submit-wrapper">
              <Button
                text={isSending ? "Sending..." : "Send message"}
                type="submit"
                variant="primary"
                size="medium"
                disabled={isSending}
              />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;