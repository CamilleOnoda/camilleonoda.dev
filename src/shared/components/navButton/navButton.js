import { Link } from "react-router-dom";
import "./navButton.css";

const NavButton = ({ text, to = "/contact", onClick }) => {
  return (
    <Link to={to} className="nav-btn" onClick={onClick} aria-label={text}>
      {text}
    </Link>
  );
};

export default NavButton;
