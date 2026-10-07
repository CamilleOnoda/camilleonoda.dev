import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import StoryGallery from "../../shared/components/gallery/StoryGallery";
import storyData from "../../config/story.config";
import "./StoryDetails.css";

function Story() {
  return (
    <>
      <SEO
        title={seoData.story.title}
        description={seoData.story.description}
      />

      <main className="story-page" aria-labelledby="story-title">
        <article className="story-container">
          <header className="story-header">
            <p className="story-eyebrow">My story</p>

            <h1 id="story-title" className="story-title">
              {storyData.title}
            </h1>

            <p className="story-subtitle">{storyData.subtitle}</p>
          </header>

          <p className="story-lead">{storyData.description}</p>

          <div className="story-sections">
            {storyData.sections.map((section, index) => (
              <section
                key={section.id}
                className={`story-section${
                  section.variant === "personal"
                    ? " story-section-personal"
                    : ""
                }`}
                aria-labelledby={`story-${section.id}`}
              >
                <div className="story-section-heading">
                  <span className="story-section-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 id={`story-${section.id}`}>
                    {section.sectionTitle}
                  </h2>
                </div>

                <div className="story-section-body">
                  {section.sectionDescriptions.map((paragraph, pIndex) => (
                    <p key={`${section.id}-${pIndex}`}>
                      {typeof paragraph === "string" ? (
                        paragraph
                      ) : (
                        <>
                          {paragraph.before}
                          <strong>{paragraph.emphasis}</strong>
                          {paragraph.after}
                        </>
                      )}
                    </p>
                  ))}

                  {section.callout && (
                    <aside
                      className="story-callout"
                      aria-label={section.callout.label}
                    >
                      <p className="story-callout-label">
                        {section.callout.label}
                      </p>
                      <p className="story-callout-text">
                        {section.callout.text}
                      </p>
                    </aside>
                  )}
                </div>
              </section>
            ))}
          </div>

          {storyData.images?.length > 0 && (
            <div className="story-gallery">
              <StoryGallery images={storyData.images} />
            </div>
          )}
        </article>
      </main>
    </>
  );
}

export default Story;