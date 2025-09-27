import "./button.css";
import { Link } from "react-router-dom";

function Button({
  text,
  href,
  to,
  download = false,
  type = "button",
  onClick,
  variant = "primary",
  size = "medium",
  isActive = false,
  ariaPressed,
  target,
  rel,
}) {
  const classNames = `btn ${variant} ${size} ${isActive ? "active" : ""}`;

  // External link or file download
  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        download={download}
        target={target}
        rel={rel}
        aria-pressed={ariaPressed}
      >
        {text}
      </a>
    );
  }

  // Internal navigation link
  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {text}
      </Link>
    );
  }

  // Regular <button>
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
