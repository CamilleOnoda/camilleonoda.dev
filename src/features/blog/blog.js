import { useState } from "react";
import "./blog.css";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogsData, BlogsIntro } from "../../config/blogs.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

function Blogs() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = BlogsIntro.categories;

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
        {/* Reusable Heading */}
        <motion.div
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <SectionHeader
            title={BlogsIntro.heading.title}
            highlight={BlogsIntro.heading.highlight}
            end={BlogsIntro.heading.end}
            align={BlogsIntro.heading.align}
          />
        </motion.div>

        {/* Categories + Search */}
        <motion.div
          className="blog-categories-container"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="blog-categories-wrapper">
            {categories.map((category, index) => (
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
