import "../../shared/details.css";
import { ProjectDetailsData } from "../../config/projectDetails.config";

function PortfolioDetails() {
  const project = ProjectDetailsData.ecommerceApp;

  return (
    <section className="details-section" aria-labelledby="project-title">
      <div className="details-container">
        {/* Project Title */}
        <h1 id="project-title" className="details-title">
          {project.projectTitle}
        </h1>

        {/* Project Subtitle */}
        <p className="details-description">{project.projectSubtitle}</p>

        {/* Tech and Links */}
        <div
          className="details-skills-container"
          role="region"
          aria-label="Project technologies and links"
        >
          <div className="details-skills-line">
            <strong>Technologies:</strong>{" "}
            <span>{project.techStack.join(", ")}</span>
          </div>

          <div className="details-skills-line">
            <strong>Website:</strong>{" "}
            <a
              href={project.liveLink}
              className="details-skills-website-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit live project site in a new tab"
            >
              Visit Site
            </a>
          </div>

          <div className="details-skills-line">
            <strong>GitHub:</strong>{" "}
            <a
              href={project.githubLink}
              className="details-skills-website-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project source code on GitHub in a new tab"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Project Image */}
        <img
          src={project.heroImage}
          alt={`Screenshot of ${project.projectTitle}`}
          className="details-img"
          loading="lazy"
        />

        {/* Project Sections */}
        <div className="details-description-container">
          {project.projectSections.map((section, index) => (
            <article className="details-description-block" key={index}>
              <h2 className="details-container-title">
                {section.sectionTitle}
              </h2>
              {Array.isArray(section.sectionContent) ? (
                section.sectionContent.map((item, i) => (
                  <p className="details-description" key={i}>
                    {item}
                  </p>
                ))
              ) : (
                <p className="details-description">{section.sectionContent}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetails;
