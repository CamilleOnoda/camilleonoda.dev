import "./DetailPage.css";
import SectionHeader from "../sectionHeader/SectionHeader";

function DetailsPage({ title, subtitle, heroImg, sections, extraContent }) {
  return (
    <section className="details-section" aria-labelledby="details-title">
      <div className="details-container">
        {/* Page heading */}
        <SectionHeader title={title} align="left" />
        {subtitle && <p className="details-description">{subtitle}</p>}

        {/* Optional extra content above hero image */}
        {extraContent}

        {/* Hero image */}
        {heroImg && (
          <img
            src={heroImg}
            alt={title}
            className="details-img"
            loading="lazy"
            width="900"
            height="600"
          />
        )}

        {/* Sections content */}
        {sections?.length > 0 &&
          sections.map((section, index) => (
            <article className="details-description-block" key={index}>
              <h2 className="details-container-title">
                {section.heading || section.sectionTitle}
              </h2>

              {/* Single paragraph content */}
              {(section.content || section.sectionContent) && (
                <p className="details-description">
                  {section.content || section.sectionContent}
                </p>
              )}

              {/* Multiple description paragraphs */}
              {section.sectionDescriptions &&
                section.sectionDescriptions.map((desc, i) => (
                  <p className="details-description" key={i}>
                    {desc}
                  </p>
                ))}

              {/* Optional list section */}
              {section.list && (
                <ul className="details-list">
                  {section.list.map((item, idx) => (
                    <li className="details-description" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
      </div>
    </section>
  );
}

export default DetailsPage;
