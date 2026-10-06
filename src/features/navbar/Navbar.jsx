import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import logoLight from "../../Assets/logo.png";
import logoDark from "../../Assets/logo-dark.png";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../../shared/components/ThemeToggle";
import NavButton from "../../shared/components/navButton/NavButton";

const Navbar = () => {
  const { isDark } = useContext(ThemeContext); // ← get current theme
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobile && isMenuOpen ? "hidden" : "auto";
  }, [isMobile, isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/focus", label: "Focus" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/writing", label: "Writing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar-section" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-inner-container">
          {/* Logo, switches based on theme */}
          <div className="navbar-logo-container">
            <Link to="/" onClick={closeMenu} aria-label="Go to homepage">
              <img
                src={isDark ? logoDark : logoLight}
                alt="Lumina"
                className="navbar-logo"
              />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="navbar-hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <ul
            id="primary-navigation"
            className={`navbar-links-container ${
              isMenuOpen ? "navbar-open" : ""
            }`}
            inert={isMobile && !isMenuOpen ? true : undefined}
          >
            {/* Close Button (Mobile) */}
            {isMobile && isMenuOpen && (
              <li className="navbar-close-btn-wrapper">
                <button
                  className="navbar-close-btn"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </li>
            )}

            {/* All Nav Links */}
            {navLinks.map((item) => (
              <li key={item.path} className="navbar-link-item">
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))
                      ? "navbar-active"
                      : ""
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Only: Hire Me */}
            {isMobile && isMenuOpen && (
              <li className="navbar-link-item navbar-mobile-hire-me">
                <Link
                  to="/contact"
                  className="navbar-hire-me-btn-mobile"
                  onClick={closeMenu}
                >
                  Get in touch
                </Link>
              </li>
            )}
          </ul>

          {/* Overlay (Mobile) */}
          {isMobile && isMenuOpen && (
            <div className="navbar-overlay" onClick={closeMenu} />
          )}

          {/* Right Side Buttons */}
          <div className="navbar-btn-container">
            <ThemeToggle isMobile={false} />
            <NavButton text="Get in touch" to="/contact" onClick={closeMenu} />
          </div>

          {/* Mobile Theme Toggle */}
          {isMobile && <ThemeToggle isMobile={true} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
