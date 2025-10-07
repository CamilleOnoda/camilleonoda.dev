import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.webp";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../../shared/components/ThemeToggle";
import Button from "../../shared/components/button/Button";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { isDark } = useContext(ThemeContext);

  const handleMouseEnter = (menu) => {
    if (!isMobile) setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setDropdownOpen("");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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

  return (
    <nav className="navbar-section">
      <div className="navbar-container">
        <div className="navbar-inner-container">
          {/* Logo */}
          <div className="navbar-logo-container">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Links */}
          <ul
            className={`navbar-links-container ${
              isMenuOpen ? "navbar-open" : ""
            }`}
          >
            {/* Mobile Close X Button */}
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
            ].map((item, index) => (
              <li key={index} className="navbar-link-item">
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

            {/* Portfolio Dropdown */}
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
                <div className="navbar-hover-bridge"></div>
                {dropdownOpen === "portfolio" && (
                  <ul className="navbar-dropdown-menu">
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

            {/* Blog Dropdown */}
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
              <div className="navbar-hover-bridge"></div>
              {dropdownOpen === "blog" && (
                <ul className="navbar-dropdown-menu">
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

            {/* Testimonial & Contact */}
            {[
              { path: "/testimonial", label: "Testimonial" },
              { path: "/contact", label: "Contact" },
            ].map((item, index) => (
              <li key={index} className="navbar-link-item">
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

            {/* Mobile: Hire Me Button */}
            {isMobile && isMenuOpen && (
              <li className="navbar-link-item navbar-mobile-hire-me">
                <Button
                  text="Hire Me"
                  to="/contact"
                  variant="primary"
                  size="medium"
                  onClick={closeMenu}
                />
              </li>
            )}
          </ul>

          {/* Mobile overlay */}
          {isMobile && isMenuOpen && (
            <div className="navbar-overlay" onClick={closeMenu}></div>
          )}

          {/* Desktop Buttons */}
          <div className="navbar-btn-container">
            <ThemeToggle isMobile={false} />
            <Button
              text="Hire Me"
              to="/contact"
              variant="primary"
              size="medium"
              onClick={closeMenu}
            />
          </div>

          {/* Mobile Theme Toggle */}
          {isMobile && <ThemeToggle isMobile={true} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
