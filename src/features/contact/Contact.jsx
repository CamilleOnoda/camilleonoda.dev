import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

// Contact: Combines form and contact details for easy communication
function Contact() {
  return (
    <>
      <SEO
        title={seoData.contact.title}
        description={seoData.contact.description}
      />
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
    </>
  );
}

export default Contact;
