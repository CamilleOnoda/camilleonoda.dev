import "./ContactCard.css";

const ExternalLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

function ContactCard({ card }) {
  return (
    <article className="contact-card">
      {card.iconClass && (
        <div className="contact-card-icon" aria-hidden="true">
          <i className={card.iconClass}></i>
        </div>
      )}

      <div className="contact-card-content">
        <h3 className="contact-card-name">{card.type}</h3>

        {/* Links */}
        {card.links && (
          <p className="contact-card-links">
            {card.links.map((link, i) => (
              <span key={i}>
                <ExternalLink href={link.href} className="contact-card-link">
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

        {/* Phone */}
        {card.phone && <p className="contact-card-phone">{card.phone}</p>}

        {/* Email */}
        {card.email && (
          <a className="contact-card-email" href={`mailto:${card.email.label}`}>
            {card.email.label}
          </a>
        )}

        {/* Social icons */}
        {card.icons && (
          <div className="contact-card-social-icons">
            {card.icons.map((item, i) => {
              const Icon = item.icon;
              return (
                <ExternalLink
                  key={i}
                  href={item.url}
                  aria-label={`Open ${item.name} in new tab`}
                >
                  <Icon />
                </ExternalLink>
              );
            })}
          </div>
        )}

        {/* Description */}
        {card.description && (
          <p className="contact-card-description">{card.description}</p>
        )}
      </div>
    </article>
  );
}

export default ContactCard;
