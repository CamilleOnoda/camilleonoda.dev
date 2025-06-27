import "../../shared/details.css";
import BlogDetailsData from "../../config/blogDetails.config";
import storyData from "../../config/story.config";

function BlogDetails() {
  const { title, subtitle, heroImg, sections } = BlogDetailsData;

  return (
    <section className="details-section">
      <div className="details-container">
        <h1 className="details-title">{title}</h1>
        <p className="details-description">{subtitle}</p>

        <div className="details-author-box">
          <img
            src={storyData.author.image}
            alt="Author"
            className="details-author-img"
            loading="lazy"
          />
          <div className="details-author-info-container">
            <div className="details-author-name">{storyData.author.name}</div>
            <div className="details-author-date">{storyData.author.date}</div>
          </div>
        </div>

        <img
          src={heroImg}
          alt="React Performance Blog"
          className="details-img"
          loading="lazy"
        />

        <div className="details-description-container">
          {sections.map((section, index) => (
            <div className="details-description-block" key={index}>
              <h2 className="details-container-title">{section.heading}</h2>
              {section.content && (
                <p className="details-description">{section.content}</p>
              )}
              {section.list &&
                section.list.map((item, idx) => (
                  <p className="details-description" key={idx}>
                    {item}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
