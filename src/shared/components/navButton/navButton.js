import { Link } from "react-router-dom";
import "./navButton.css"; // reuse same styling

const NavButton = ({ to, onClick, text }) => {
  return (
    <Link to={to} onClick={onClick} className="nav-button">
      {text}
    </Link>
  );
};

export default NavButton;
