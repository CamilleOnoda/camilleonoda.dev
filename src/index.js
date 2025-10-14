import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome icons
import { ThemeProvider } from "./context/ThemeContext"; // Theme context provider
import "./shared/styles/global.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provide theme context to entire app */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
