import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar/navbar";
import Home from "./features/home/home";
import About from "./features/about/about";
import ReadBlog from "./features/blog/BlogDetails";
import Blog from "./features/blog/blog";
import Portfolio from "./features/portfolio/portfolio";
import PortfolioDetails from "./features/portfolio/PortfolioDetails";
import Testimonial from "./features/testimonial/testimonial";
import ScrollToTop from "../src/shared/utils/ScrollToTop";
import Footer from "./features/Footer/footer";
import { Contact } from "./features/contact/Contact";
import Story from "./features/story/StoryDetails";

function App() {
  return (
    <Router>
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      {/* Site navigation */}
      <Navbar />

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/story" element={<Story />} />

        {/* Dynamic blog and portfolio details */}
        <Route path="/blog-details/:id" element={<ReadBlog />} />
        <Route path="/blog-details" element={<ReadBlog />} />
        <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
      </Routes>

      {/* Site footer */}
      <Footer />
    </Router>
  );
}

export default App;
