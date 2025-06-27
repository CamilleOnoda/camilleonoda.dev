// src/components/AnimatedRoutes.js
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../features/home/home";
import About from "../features/about/about";
// import other pages...

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
