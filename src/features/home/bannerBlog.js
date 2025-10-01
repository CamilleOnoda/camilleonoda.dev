import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./bannerBlog.css";
import { BlogsData, BlogsIntro } from "../../config/blogs.config";
import { motion } from "framer-motion";
import {
  containerStagger,
  fadeUpItem,
} from "../../shared/components/FramerVariants";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

function BannerBlog() {
  const [featured, ...others] = BlogsData;

  return (
    <section className="home-blog-section" aria-labelledby="blog-heading">
      {/* Heading with upward fade */}
      <motion.div
        variants={fadeUpItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
      >
        <SectionHeader
          title={BlogsIntro.homeHeading.start}
          highlight={BlogsIntro.homeHeading.highlight}
        />
      </motion.div>

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
