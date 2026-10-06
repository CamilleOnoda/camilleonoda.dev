import "./Button.css";
import { Link } from "react-router-dom";

function Button({
  text,
  href, // external link or file download
  to, // internal routing link
  download = false,
  type = "button",
  onClick,
  variant = "primary", // primary / secondary / nav / footer
  size = "medium", // small / medium / large
  isActive = false, // active state for styling
  ariaPressed, // accessibility
  target,
  rel,
}) {
  const classNames = `btn ${variant} ${size} ${isActive ? "active" : ""}`;

  // External link or downloadable file
  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        download={download}
        target={target}
        rel={rel}
        aria-label={text}
      >
        {text}
      </a>
    );
  }

  // Internal navigation link using react-router
  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {text}
      </Link>
    );
  }

  // Default button
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      aria-pressed={ariaPressed}
    >
      {text}
    </button>
  );
}

export default Button;
