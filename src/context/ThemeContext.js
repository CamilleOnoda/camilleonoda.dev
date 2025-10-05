import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const lightTheme = {
  "--bg-gradient": "linear-gradient(to right, #f7f6fc, #edeaf8)",
  "--bg-name": "linear-gradient(to right, #54387a, #9175D8, #EDEAF8)",
  "--highlight-text": " #9175D8",
  "--black-text": " #000000",
  "--gray-text": " #656565",
  "--heading-color": "#54387a" /*just set for testing*/,

  // Footer
  "--bg-footer": "  #54387a",
  "--footer-button-text": " #54387a",

  // Buttons
  "--bg-button": "  #54387a",
  "--button-text": "  #ffffff",

  // Brand
  "--light-lavender-color": " #EDEAF8",
  "--secondary-lavender-color": " #54387a",
};

const darkTheme = {
  "--bg-gradient": "linear-gradient(to right, #54387a,  #54387a)",
  "--bg-name": "linear-gradient(to right, #EDEAF8, #EDEAF8, #9175D8)",
  "--highlight-text": " #ffffff",
  "--black-text": " #ffffff",
  "--gray-text": " #EDEAF8",
  "--heading-color": "#ffffff" /*just set for testing*/,

  // Footer
  "--bg-footer": "  #EDEAF8",
  "--footer-button-text": " #EDEAF8",

  // Buttons
  "--bg-button": " #ffffff",
  "--button-text": " #54387a",

  // Brand
  "--light-lavender-color": " #EDEAF8",
  "--secondary-lavender-color": " #ffffff",
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", JSON.stringify(newValue));
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
