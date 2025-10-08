import "./blog.css";
import { motion } from "framer-motion";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import Card from "../../shared/components/card/Card";
import { BlogsData, BlogsIntro } from "../../config/blogs.config";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section className="blog-section" aria-labelledby="blog-section-heading">
      <div className="blog-header-container">
        {/* Section Heading with animation */}
        <motion.div
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          <SectionHeader title={BlogsIntro.heading.title} />
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="blog-inner-container">
          {BlogsData.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link} // navigates to blog detail page
              className="blog-card-link"
              aria-label={`Read full article: ${blog.title}`}
            >
              <Card
                description={blog.date} // display blog date
                title={blog.title} // blog title
                image={blog.image} // blog thumbnail
                type="hover-arrow" // card hover effect
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
