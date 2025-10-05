import "./detailPage.css";
import SectionHeader from "../SectionHeader/SectionHeader";

function DetailsPage({ title, subtitle, heroImg, sections, extraContent }) {
  return (
    <section className="details-section" aria-labelledby="details-title">
      <div className="details-container">
        <SectionHeader title={title} align="left" />

        {subtitle && <p className="details-description">{subtitle}</p>}

        {/* Extra content above image */}
        {extraContent}

        {heroImg && (
          <img
            src={heroImg}
            alt={title}
            className="details-img"
            loading="lazy"
            width="1200"
            height="600"
          />
        )}

        {sections?.length > 0 &&
          sections.map((section, index) => (
            <article className="details-description-block" key={index}>
              <h2 className="details-container-title">
                {section.heading || section.sectionTitle}
              </h2>

              {/* FIXED: Handle both “content” and “sectionContent” */}
              {(section.content || section.sectionContent) && (
                <p className="details-description">
                  {section.content || section.sectionContent}
                </p>
              )}

              {section.sectionDescriptions &&
                section.sectionDescriptions.map((desc, i) => (
                  <p className="details-description" key={i}>
                    {desc}
                  </p>
                ))}

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
