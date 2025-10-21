import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext"; // adjust path if needed
import "./navButton.css"; // reuse existing button styles

const NavButton = ({ to, onClick, text }) => {
  const { isDark } = useContext(ThemeContext);

  const themeColors = isDark
    ? { backgroundColor: "#54387a", color: "#ffffff" }
    : { backgroundColor: "#54387a", color: "#ffffff" }; // replace with your light theme colors if different

  return (
    <Link to={to} onClick={onClick} className="nav-button" style={themeColors}>
      {text}
    </Link>
  );
};

export default NavButton;
