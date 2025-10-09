import DetailsPage from "../../shared/components/detailPage/DetailPage";
import { ProjectDetailsData } from "../../config/projectDetails.config";

function ProjectDetails() {
  const project = ProjectDetailsData.ecommerceApp;

  // Extra content: Technologies, live website link, and GitHub link
  const extraContent = (
    <div
      className="details-skills-container"
      role="region"
      aria-label="Project technologies and links"
    >
      {/* Display tech stack */}
      {project.techStack?.length > 0 && (
        <div className="details-skills-line">
          <strong>Technologies:</strong>{" "}
          <span>{project.techStack.join(", ")}</span>
        </div>
      )}

      {/* Live website link */}
      {project.liveLink && (
        <div className="details-skills-line">
          <strong>Website:</strong>{" "}
          <a
            href={project.liveLink}
            className="details-skills-website-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        </div>
      )}

      {/* GitHub repository link */}
      {project.githubLink && (
        <div className="details-skills-line">
          <strong>GitHub:</strong>{" "}
          <a
            href={project.githubLink}
            className="details-skills-website-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      )}
    </div>
  );

  // Render the reusable DetailPage component
  return (
    <DetailsPage
      title={project.projectTitle}
      subtitle={project.projectSubtitle}
      heroImg={project.heroImage}
      sections={project.projectSections}
      extraContent={extraContent}
    />
  );
}

export default ProjectDetails;
