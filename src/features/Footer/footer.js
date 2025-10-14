import "./footer.css";
import Button from "../../shared/components/button/Button";

// Footer section with CTA and copyright info
function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic current year

  return (
    <section className="footer-section">
      <div className="footer-container">
        <h1 className="footer-title">Let's Develop Your Product</h1>

        {/* Call-to-action button linking to contact page */}
        <Button
          text="Schedule a Call"
          href="/contact"
          variant="footer"
          size="medium"
        />

        {/* Copyright notice */}
        <p className="footer-description">
          © {currentYear} Lumina. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
