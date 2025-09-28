import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./bannerBlog.css";
import { BlogsData } from "../../config/blogs.config";
import { motion } from "framer-motion";
import {
  containerStagger,
  fadeUpItem,
} from "../../shared/components/FramerVariants";

function BannerBlog() {
  const [featured, ...others] = BlogsData;

  return (
    <section className="home-blog-section" aria-labelledby="blog-heading">
      {/* Heading with upward fade */}
      <motion.h2
        id="blog-heading"
        className="home-blog-section-heading"
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        My Latest <span className="home-blog-highlight">Articles</span>
      </motion.h2>

      {/* Cards stagger upward */}
      <motion.div
        className="home-blog-inner-container"
        variants={containerStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
      >
        {[featured, ...others.slice(0, 3)].map((post) => (
          <Link to="/blog-details" className="home-blog-link-wrapper">
            <motion.div className="home-blog-card" variants={fadeUpItem}>
              <img
                src={post.image}
                alt={post.title}
                className="home-blog-img"
              />
              <div className="home-blog-content">
                <h3 className="home-blog-title">{post.title}</h3>
                <div className="home-blog-date-container">
                  <div>
                    <p className="home-blog-date">{post.date}</p>
                  </div>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read full article: ${post.title}`}
                    className="home-blog-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default BannerBlog;
