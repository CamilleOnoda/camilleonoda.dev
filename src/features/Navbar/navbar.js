import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.webp";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../../shared/components/ThemeToggle";
import NavButton from "../../shared/components/navButton/navButton";

const Navbar = () => {
  // States
  const [dropdownOpen, setDropdownOpen] = useState(""); // track active dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // track mobile menu state
  const [isMobile, setIsMobile] = useState(false); // detect screen size
  const location = useLocation();

  //Handlers
  const handleMouseEnter = (menu) => !isMobile && setDropdownOpen(menu);
  const handleMouseLeave = () => !isMobile && setDropdownOpen("");
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen("");
  };

  // Detect mobile view dynamically
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobile && isMenuOpen ? "hidden" : "auto";
  }, [isMobile, isMenuOpen]);

  // Close nav/dropdowns when route changes ---
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Close menu on Escape key (keyboard accessibility)
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav className="navbar-section" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <div className="navbar-logo-container">
            <Link to="/" onClick={closeMenu} aria-label="Go to homepage">
              <img src={logo} alt="Lumina" className="navbar-logo" />
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
            aria-hidden={isMobile ? !isMenuOpen : false}
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

            {/* Static Links */}
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/story", label: "My Story" },
            ].map((item, idx) => (
              <li key={idx} className="navbar-link-item">
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path ? "navbar-active" : ""
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/*Dropdown: Portfolio*/}
            <li
              className="navbar-link-item navbar-dropdown-wrapper"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setDropdownOpen(
                    dropdownOpen === "portfolio" ? "" : "portfolio"
                  );
                }
              }}
            >
              <div className="navbar-dropdown">
                <Link
                  to="/portfolio"
                  className={
                    location.pathname.includes("/portfolio")
                      ? "navbar-active"
                      : ""
                  }
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === "portfolio"}
                >
                  Portfolio <FaChevronDown size={10} />
                </Link>
                <div className="navbar-hover-bridge" />
                {dropdownOpen === "portfolio" && (
                  <ul id="portfolio-submenu" className="navbar-dropdown-menu">
                    <li className="navbar-link-item">
                      <Link
                        to="/portfolio-details/1"
                        className="navbar-dropdown-item"
                        onClick={() => {
                          setDropdownOpen("");
                          closeMenu();
                        }}
                      >
                        Portfolio Details
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            {/* Dropdown: Blog*/}
            <li
              className="navbar-link-item navbar-dropdown"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setDropdownOpen(dropdownOpen === "blog" ? "" : "blog");
                }
              }}
            >
              <Link
                to="/blog"
                className={
                  location.pathname.includes("/blog") ? "navbar-active" : ""
                }
                aria-haspopup="true"
                aria-expanded={dropdownOpen === "blog"}
              >
                Blog <FaChevronDown size={10} />
              </Link>
              <div className="navbar-hover-bridge" />
              {dropdownOpen === "blog" && (
                <ul id="blog-submenu" className="navbar-dropdown-menu">
                  <li className="navbar-link-item">
                    <Link
                      to="/blog-details"
                      className="navbar-dropdown-item"
                      onClick={() => {
                        setDropdownOpen("");
                        closeMenu();
                      }}
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/*Testimonial & Contact Links */}
            {[
              { path: "/testimonial", label: "Testimonial" },
              { path: "/contact", label: "Contact" },
            ].map((item, idx) => (
              <li key={idx} className="navbar-link-item">
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path ? "navbar-active" : ""
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/*Mobile Only: Hire Me */}
            {isMobile && isMenuOpen && (
              <li className="navbar-link-item navbar-mobile-hire-me">
                <Link
                  to="/contact"
                  className="navbar-hire-me-btn-mobile"
                  onClick={closeMenu}
                >
                  Hire Me
                </Link>
              </li>
            )}
          </ul>

          {/* Overlay (Mobile) */}
          {isMobile && isMenuOpen && (
            <div className="navbar-overlay" onClick={closeMenu} />
          )}

          {/*  Right Side Buttons */}
          <div className="navbar-btn-container">
            <ThemeToggle isMobile={false} />
            <NavButton text="Hire Me" to="/contact" onClick={closeMenu} />
          </div>

          {/*Mobile Theme Toggle  */}
          {isMobile && <ThemeToggle isMobile={true} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
