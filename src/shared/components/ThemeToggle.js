import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ isMobile }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={
        isMobile ? "navbar-theme-toggle-btn-mobile" : "navbar-theme-toggle-btn"
      }
      onClick={toggleTheme} // toggle light/dark theme
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}{" "}
      {/* icon based on theme */}
    </button>
  );
};

export default ThemeToggle;
