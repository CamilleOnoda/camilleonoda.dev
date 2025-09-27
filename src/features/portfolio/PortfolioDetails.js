import "../../shared/styles/details.css";
import { ProjectDetailsData } from "../../config/projectDetails.config";

function ProjectDetails() {
  const project = ProjectDetailsData.ecommerceApp;

  return (
    <section className="details-section" aria-labelledby="project-title">
      <div className="details-container">
        {/* Project Title */}
        <h1 id="project-title" className="details-title">
          {project.projectTitle}
        </h1>

        {/* Project Subtitle */}
        {project.projectSubtitle && (
          <p className="details-description">{project.projectSubtitle}</p>
        )}

        {/* Tech and Links */}
        <div
          className="details-skills-container"
          role="region"
          aria-label="Project technologies and links"
        >
          {project.techStack?.length > 0 && (
            <div className="details-skills-line">
              <strong>Technologies:</strong>{" "}
              <span>{project.techStack.join(", ")}</span>
            </div>
          )}

          {project.liveLink && (
            <div className="details-skills-line">
              <strong>Website:</strong>{" "}
              <a
                href={project.liveLink}
                className="details-skills-website-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.projectTitle} live site (opens in new tab)`}
              >
                Visit Site
              </a>
            </div>
          )}

          {project.githubLink && (
            <div className="details-skills-line">
              <strong>GitHub:</strong>{" "}
              <a
                href={project.githubLink}
                className="details-skills-website-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.projectTitle} source code on GitHub (opens in new tab)`}
              >
                View Code
              </a>
            </div>
          )}
        </div>

        {/* Project Image */}
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={`Screenshot of ${project.projectTitle}`}
            className="details-img"
            loading="lazy"
            width="800"
            height="450"
          />
        )}

        {/* Project Sections */}
        {project.projectSections?.length > 0 && (
          <div className="details-description-container">
            {project.projectSections.map((section, index) => (
              <article
                className="details-description-block"
                key={index}
                aria-labelledby={`section-${index}`}
              >
                <h2 id={`section-${index}`} className="details-container-title">
                  {section.sectionTitle}
                </h2>

                {Array.isArray(section.sectionContent) ? (
                  section.sectionContent.map((item, i) => (
                    <p className="details-description" key={i}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="details-description">
                    {section.sectionContent}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;
