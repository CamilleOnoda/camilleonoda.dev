import "../../shared/styles/details.css";
import BlogDetailsData from "../../config/blogDetails.config";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

function BlogDetails() {
  const { title, subtitle, heroImg, sections } = BlogDetailsData;

  return (
    <section className="details-section" aria-labelledby="blog-title">
      <div className="details-container">
        <SectionHeader title={BlogDetailsData.title} align="left" />
        <p className="details-description">{subtitle}</p>

        <img
          src={heroImg}
          alt="React Performance Blog"
          className="details-img"
          loading="lazy"
          width="1200" // adjust to real dimensions
          height="600" // adjust to real dimensions
        />

        {sections.map((section, index) => (
          <article className="details-description-block" key={index}>
            <h2 className="details-container-title">{section.heading}</h2>

            {section.content && (
              <p className="details-description">{section.content}</p>
            )}

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

export default BlogDetails;
