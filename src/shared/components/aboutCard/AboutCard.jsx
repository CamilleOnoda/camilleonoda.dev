import "./AboutCard.css";

// Reusable card component for About page
const AboutCard = ({ title, description, children }) => {
  return (
    <div className="about-card">
      {/* Card Title */}
      {title && <h2 className="about-card-heading">{title}</h2>}

      {/* Card Description */}
      {description && <p className="about-card-description">{description}</p>}

      {/*  children content  */}
      {children && <div className="about-card-children">{children}</div>}
    </div>
  );
};

export default AboutCard;
