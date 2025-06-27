import { useState } from "react";
import "./blog.css";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogsData } from "../../config/blogs.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../components/FramerVariants";
import Button from "../../components/Button";

function Blogs() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Frontend", "Backend"];

  const filteredBlogs = BlogsData.filter((blog) => {
    const matchesCategory =
      currentCategory === "All" || blog.category === currentCategory;
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="blog-section">
      <div className="blog-header-container">
        {/* Heading with upward animation */}
        <motion.h2
          className="blog-header-title"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          Insights from <span className="blog-highlight">My Developer</span>{" "}
          Journey
        </motion.h2>
        <motion.div
          className="blog-categories-container"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="blog-categories-wrapper">
            {categories.map((category, index) => (
              // <button
              //   key={index}
              //   className={`blog-category-button ${
              //     currentCategory === category ? "active" : ""
              //   }`}
              //   onClick={() => setCurrentCategory(category)}
              // >
              //   {category}
              // </button>
              <Button
                key={index}
                text={category}
                onClick={() => setCurrentCategory(category)}
                variant="secondary"
                size="large"
                isActive={currentCategory === category}
                ariaPressed={currentCategory === category}
              />
            ))}

            <div className="blog-search-bar">
              <button className="blog-search-icon-btn" disabled>
                <FaSearch />
              </button>
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog titles"
              />
            </div>
          </div>
        </motion.div>

        {/* Blog cards */}
        <div className="blog-inner-container">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link
                to={`/blog-details/${blog.id}`}
                key={blog.id}
                className="blog-card-link"
                aria-label={`Read more about ${blog.title}`}
              >
                <div className="blog-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-card-img"
                    loading="lazy"
                  />
                  <div className="blog-card-info-container">
                    <span className="blog-card-date">{blog.date}</span>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <div className="blog-card-footer">
                      <span className="blog-card-readtime">
                        {blog.readTime}
                      </span>
                      <FaExternalLinkAlt className="blog-card-icon" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="blog-no-results">No blogs found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
