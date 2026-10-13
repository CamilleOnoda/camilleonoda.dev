import { Link } from "react-router-dom";

function WritingCard({ article }) {
  const isInternal = article.url?.startsWith("/");

  const content = (
    <>
      <p className="writing-card-category">{article.category}</p>
      <h2 className="writing-card-title">{article.title}</h2>
      <p className="writing-card-description">{article.description}</p>

      <ul className="writing-card-tags" aria-label="Topics">
        {article.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="writing-card-footer">
        <span>{article.publication}</span>

        {article.url && (
          <span className="writing-card-read">
            Read article{" "}
            <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </>
  );

  return (
    <article className="writing-card">
      {!article.url ? (
        <div className="writing-card-content">{content}</div>
      ) : isInternal ? (
        <Link className="writing-card-link" to={article.url}>
          {content}
        </Link>
      ) : (
        <a className="writing-card-link" href={article.url}>
          {content}
        </a>
      )}
    </article>
  );
}

export default WritingCard;