import "./footer.css";
import Button from "../../components/Button";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <div className="footer-container">
        <h1 className="footer-title">Let's Develop Your Product</h1>
        <Button
          text="Schedule a Call"
          href="/contact"
          variant="footer"
          size="medium"
        />
        <p className="footer-description">
          © {currentYear} Lumina. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
