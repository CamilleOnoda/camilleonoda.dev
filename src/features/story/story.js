import "../../shared/details.css";
import storyData from "../../config/story.config";

function Story() {
  return (
    <section className="details-section" aria-labelledby="story-title">
      <div className="details-container">
        <h1 id="story-title" className="details-title">
          {storyData.title}
        </h1>

        <p className="details-description">{storyData.subtitle}</p>

        <div
          className="details-author-box"
          role="contentinfo"
          aria-label="Author information"
        >
          <img
            src={storyData.author.image}
            alt={`Portrait of ${storyData.author.name}`}
            className="details-author-img"
            loading="lazy"
          />
          <div className="details-author-info-container">
            <div className="details-author-name">{storyData.author.name}</div>
            <div className="details-author-date">{storyData.author.date}</div>
          </div>
        </div>

        {/* Story Images */}
        <div
          className="details-story-images-container"
          role="region"
          aria-label="Story visual gallery"
        >
          {storyData.images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="details-img"
              loading="lazy"
            />
          ))}
          ))}
        </div>

        {/* Intro Description */}
        <div className="details-description-container">
          <p className="details-description">{storyData.description}</p>
        </div>

        {/* Sections */}
        {storyData.sections.map((section, idx) => (
          <article
            className="details-description-block"
            key={idx}
            aria-labelledby={`section-title-${idx}`}
          >
            <h2 id={`section-title-${idx}`} className="details-container-title">
              {section.sectionTitle}
            </h2>
            {section.sectionDescriptions.map((desc, i) => (
              <p className="details-description" key={i}>
                {desc}
              </p>
            ))}
            <hr />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Story;
