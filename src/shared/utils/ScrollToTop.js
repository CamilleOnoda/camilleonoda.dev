// ScrollToTop: Automatically scrolls to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0, // Scroll to top of page
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [pathname]); // Trigger on route/path change

  return null; // No UI element rendered
};

export default ScrollToTop;
