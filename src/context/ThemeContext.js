import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

// Light theme variables
const lightTheme = {
  "--background-color": "linear-gradient(to right, #f7f6fc, #edeaf8)",
  "--bg-name": "linear-gradient(to right, #54387a, #9175D8, #EDEAF8)",
  "--section-heading-color": "#54387a",
  "--black-text": "#28282B",
  "--icons-color": "#54387a",

  // Navbar
  "--nav-bg": "#edeaf8",
  "--nav-text": "#54387a",
  "--nav-dropdown-bg": "#ffffff",
  "--nav-close": "#ffffff",
  "--nav--mobile-link-text": "#ffffff",
  "--nav-border": "#54387a",
  "--nav-btn-bg": "#54387a",
  "--nav-btn-text": "#ffffff",

  // Footer
  "--bg-footer": "#54387a",
  "--footer-button-text": "#54387a",

  // Buttons
  "--bg-button": "#54387a",
  "--button-text": "#ffffff",
};

// Dark theme variables
const darkTheme = {
  "--background-color": "linear-gradient(to right, #54387a, #54387a)",
  "--bg-name": "linear-gradient(to right, #EDEAF8, #EDEAF8, #9175D8)",
  "--section-heading-color": "#ffffff",
  "--black-text": "#ffffff",
  "--icons-color": "#ffffff",

  // Navbar
  "--nav-bg": "#edeaf8",
  "--nav-text": "#54387a",
  "--nav-dropdown-bg": "#ffffff",
  "--nav-close": "#ffffff",
  "--nav--mobile-link-text": "#ffffff",
  "--nav-border": "#54387a",
  "--nav-btn-bg": "#54387a",
  "--nav-btn-text": "#ffffff",

  // Footer
  "--bg-footer": "#EDEAF8",
  "--footer-button-text": "#EDEAF8",

  // Buttons
  "--bg-button": "#ffffff",
  "--button-text": "#54387a",
};

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", JSON.stringify(newValue));
      return newValue;
    });
  };

  // Apply theme variables to document root
  useEffect(() => {
    const theme = isDark ? darkTheme : lightTheme;
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
