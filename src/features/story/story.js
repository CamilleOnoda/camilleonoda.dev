import "../../shared/styles/details.css";
import StoryGallery from "../../shared/components/gallery/storyGallery";
import storyData from "../../config/story.config";

function Story() {
  return (
    <section className="details-section" aria-labelledby="story-title">
      <div className="details-container">
        <h1 id="story-title" className="details-title">
          {storyData.title}
        </h1>

        <p className="details-description">{storyData.subtitle}</p>

        <StoryGallery images={storyData.images} />

        <p className="details-description">{storyData.description}</p>

        {storyData.sections.map((section, idx) => (
          <article className="details-description-block" key={idx}>
            <h2 className="details-container-title">{section.sectionTitle}</h2>
            {section.sectionDescriptions.map((desc, i) => (
              <p className="details-description" key={i}>
                {desc}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Story;
