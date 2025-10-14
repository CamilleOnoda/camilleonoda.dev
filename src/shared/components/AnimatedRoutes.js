import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../features/home/home";
import About from "../features/about/about";

// AnimatedRoutes: Wraps all routes with Framer Motion animation support
function AnimatedRoutes() {
  const location = useLocation(); // track current route for animation

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
