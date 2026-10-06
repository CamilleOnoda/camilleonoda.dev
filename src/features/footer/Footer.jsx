import "./Footer.css";
import Button from "../../shared/components/button/Button";
import { FooterData } from "../../config/footer.config";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
        {/* CTA */}
        <h2 className="footer-title">{FooterData.heading}</h2>
        <Button
          text={FooterData.button.text}
          href={FooterData.button.link}
          variant="footer"
          size="medium"
        />

        {/* Social Icons */}
        <div className="footer-social" aria-label="Social media links">
          {FooterData.socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={item.name}
            >
              <item.icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-description">
          © {currentYear} {FooterData.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
