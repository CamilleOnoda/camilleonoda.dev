import "./Card.css";

const Card = ({
  title,
  description,
  meta,
  image,
  type = "default",
  metaFirst = false, // show meta above title if true
  linkUrl, // URL for "Explore" link
  linkLabel, // Text for "Explore" link
}) => {
  return (
    <div className={`card-container ${type}`}>
      {image && (
        <img
          src={image}
          alt={title ? `Screenshot of ${title}` : "Project screenshot"}
          className="card-img"
        />
      )}

      <div className="card-content">
        {metaFirst && meta && <p className="card-meta">{meta}</p>}
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {!metaFirst && meta && <p className="card-meta">{meta}</p>}

        {/* Explore Link */}
        {linkUrl && linkLabel && (
          <a href={linkUrl} className="card-explore-link">
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
