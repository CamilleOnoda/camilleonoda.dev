import "./aboutCard.css";

const AboutCard = ({ title, description, children }) => {
  return (
    <div className="about-card">
      {title && <h2 className="about-card-heading">{title}</h2>}
      {description && <p className="about-card-description">{description}</p>}
      {children && <div className="about-card-children">{children}</div>}
    </div>
  );
};

export default AboutCard;
