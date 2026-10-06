import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./features/navbar/Navbar";
import ScrollToTop from "./shared/utils/ScrollToTop";
import Footer from "./features/footer/Footer";
import "./shared/styles/Global.css";

// Lazy loaded pages — load only when visited
const Home = lazy(() => import("./features/home/Home"));
const About = lazy(() => import("./features/about/About"));
const Portfolio = lazy(() => import("./features/portfolio/Portfolio"));
const PortfolioDetails = lazy(
  () => import("./features/portfolio/ProjectDetails")
);
const Contact = lazy(() => import("./features/contact/Contact"));
const Writing = lazy(() => import("./features/writing/Writing"));
const Focus = lazy(() => import("./features/services/Services"));
const Story = lazy(() => import("./features/story/StoryDetails"));
const NotFound = lazy(() => import("./features/notFound/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Suspense shows loader while page loads */}
      <Suspense
        fallback={
          <div className="page-loader">
            <div className="page-loader-spinner"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/testimonial" element={<Writing />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/story" element={<Story />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
