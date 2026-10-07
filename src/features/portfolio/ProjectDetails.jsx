import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DetailsPage from "../../shared/components/detailPage/DetailPage";
import { ProjectDetailsData } from "../../config/projectDetails.config";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = ProjectDetailsData.find(
    (p) => p.projectId === parseInt(id, 10)
  );

  useEffect(() => {
    if (!project) {
      navigate("/portfolio", { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  const extraContent = (
    <div
      className="details-skills-container"
      role="region"
      aria-label="Project technologies, links, and demo access"
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
          >
            {project.liveLinkText || "Try the app"}
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
          >
            {project.githubLinkText || "Explore the repository"}
          </a>
        </div>
      )}

      {project.liveLink && project.demoCredentials && (
        <section
          className="details-demo"
          aria-labelledby={`project-${project.projectId}-demo`}
        >
          <h2 id={`project-${project.projectId}-demo`}>
            Demo access
          </h2>

          <p>
            Use this shared account to explore the application.
            Please use sample data only.
          </p>

          <dl className="details-demo-credentials">
            <div>
              <dt>Email</dt>
              <dd>
                <code>{project.demoCredentials.email}</code>
              </dd>
            </div>
            <div>
              <dt>Password</dt>
              <dd>
                <code>{project.demoCredentials.password}</code>
              </dd>
            </div>
          </dl>

          {project.demoCredentials.note && (
            <p>{project.demoCredentials.note}</p>
          )}
        </section>
      )}
    </div>
  );

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