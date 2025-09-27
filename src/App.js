import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar/navbar";
import Home from "./features/home/home";
import About from "./features/about/about";
import ReadBlog from "./features/blog/BlogDetails";
import Blog from "./features/blog/blog";
import Portfolio from "./features/portfolio/portfolio";
import PortfolioDetails from "./features/portfolio/PortfolioDetails";
import Testimonial from "./features/testimonial/testimonial";
import ScrollToTop from "./ScrollToTop";
import Footer from "./features/Footer/footer";
import { Contact } from "./features/contact/Contact";
import Story from "./features/story/story";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/story" element={<Story />} />
        <Route path="/blog-details/:id" element={<ReadBlog />} />
        <Route path="/blog-details" element={<ReadBlog />} />
        <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
