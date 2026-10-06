import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

// LIGHT THEME, Edit colors here for light mode
const lightTheme = {
  // Page background
  "--website-bg":
    "linear-gradient(120deg, #faf8fd 0%, #f0ebf7 55%, #e5ddf1 100%)",

  // Heading gradients
  "--hero-name-bg":
    "linear-gradient(110deg, #493065 0%, #7652a4 60%, #956dbb 100%)",
  "--404-bg":
    "linear-gradient(110deg, #493065 0%, #7652a4 100%)",

  // Text
  "--section-heading": "#493065",
  "--website-text": "#393342",
  "--text-muted": "#6c6178",
  "--icons-color": "#634583",

  // Navbar
  "--nav-bg": "#f5f0fa",
  "--nav-text": "#393342",
  "--nav-mobile-bg": "#f5f0fa",
  "--nav-mobile-text": "#393342",
  "--nav-close": "#493065",
  "--nav-mobile-link-text": "#493065",
  "--nav-btn-bg": "#68458c",
  "--nav-btn-text": "#ffffff",
  "--nav-toggle-btn": "#68458c",

  // Cards
  "--card-bg": "#fdfbff",
  "--card-border": "#d8cce5",
  "--card-text": "#51465d",
  "--card-icon-bg": "#eee5f6",
  "--card-icon-text": "#68458c",

  // Badge
  "--badge-bg": "#eee5f6",
  "--badge-text": "#493065",

  // Form inputs
  "--input-bg": "#fdfbff",
  "--input-border": "#d8cce5",
  "--input-text": "#393342",
  "--input-placeholder": "#766a82",
  "--input-focus-border": "#7652a4",

  // Primary buttons
  "--btn-bg": "#68458c",
  "--btn-text": "#ffffff",
  "--btn-hover-bg": "#533470",

  // Secondary buttons
  "--btn-secondary-bg": "#eee5f6",
  "--btn-secondary-text": "#533470",
  "--btn-secondary-hover-bg": "#e1d3ef",
  "--btn-secondary-hover-text": "#493065",

  // Selected filters
  "--filter-active-bg": "#68458c",
  "--filter-active-text": "#ffffff",

  // Footer
  "--footer-bg":
    "linear-gradient(120deg, #eee7f5 0%, #e3d7ed 100%)",
  "--footer-text": "#493065",
  "--footer-btn-bg": "#68458c",
  "--footer-btn-text": "#ffffff",
};


// DARK THEME, Edit colors here for dark mode
const darkTheme = {
  // Page background
  "--website-bg":
    "linear-gradient(120deg, #17121f 0%, #21172e 55%, #30203e 100%)",

  // Heading gradients
  "--hero-name-bg":
    "linear-gradient(110deg, #f3ecfb 0%, #cbb0eb 60%, #ad88d1 100%)",
  "--404-bg":
    "linear-gradient(110deg, #f3ecfb 0%, #ad88d1 100%)",

  // Text
  "--section-heading": "#f1eafa",
  "--website-text": "#d8cee3",
  "--text-muted": "#afa0bf",
  "--icons-color": "#cbb0eb",

  // Navbar
  "--nav-bg":
    "linear-gradient(120deg, #17121f 0%, #21172e 55%, #30203e 100%)",
  "--nav-text": "#e8def2",
  "--nav-mobile-bg": "#21172e",
  "--nav-mobile-text": "#e8def2",
  "--nav-close": "#e8def2",
  "--nav-mobile-link-text": "#e8def2",
  "--nav-btn-bg": "#cbb0eb",
  "--nav-btn-text": "#21172e",
  "--nav-toggle-btn": "#cbb0eb",

  // Cards
  "--card-bg": "#2c2238",
  "--card-border": "#51415f",
  "--card-text": "#d8cee3",
  "--card-icon-bg": "#3d2d4d",
  "--card-icon-text": "#d5b9ef",

  // Badge
  "--badge-bg": "#3d2d4d",
  "--badge-text": "#e8d7f7",

  // Form inputs
  "--input-bg": "#241b30",
  "--input-border": "#584568",
  "--input-text": "#f1eafa",
  "--input-placeholder": "#afa0bf",
  "--input-focus-border": "#cbb0eb",

  // Primary buttons
  "--btn-bg": "#cbb0eb",
  "--btn-text": "#21172e",
  "--btn-hover-bg": "#dcc6f3",

  // Secondary buttons
  "--btn-secondary-bg": "#382943",
  "--btn-secondary-text": "#e2cef4",
  "--btn-secondary-hover-bg": "#4a355b",
  "--btn-secondary-hover-text": "#f1eafa",

  // Selected filters
  "--filter-active-bg": "#cbb0eb",
  "--filter-active-text": "#21172e",

  // Footer
  "--footer-bg":
    "linear-gradient(120deg, #14101b 0%, #24182f 100%)",
  "--footer-text": "#d8cee3",
  "--footer-btn-bg": "#cbb0eb",
  "--footer-btn-text": "#21172e",
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      try {
        localStorage.setItem("theme", JSON.stringify(newValue));
      } catch {}
      return newValue;
    });
  };

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
