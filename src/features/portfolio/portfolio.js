import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./portfolio.css";
import { ProjectsData } from "../../config/projects.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../components/FramerVariants";
import Button from "../../components/Button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [location]);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Testing & Debugging",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  return (
    <section
      className="portfolio-section"
      aria-labelledby="portfolio-section-heading"
    >
      <div className="portfolio-header-container">
        {/* Accessible Section Heading */}
        <motion.h2
          id="portfolio-section-heading"
          className="portfolio-header-title"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          {/* Explore <span className="portfolio-highlight">My Projects</span> */}
          Here's <span className="portfolio-highlight">what 10+ years</span> of
          development looks like
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-categories-container"
          variants={fadeUpItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
        >
          {categories.map((category) => (
            <Button
              text={category}
              onClick={() => setSelectedCategory(category)}
              variant="secondary"
              size="large"
              isActive={selectedCategory === category}
              ariaPressed={selectedCategory === category}
            />
          ))}
        </motion.div>

        {/* Portfolio Cards */}
        <div className="portfolio-inner-container">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio-details/${item.id}`}
              className="portfolio-card-link"
              aria-label={`View details for ${item.title}`}
            >
              <article className="portfolio-card">
                <img
                  src={item.image}
                  alt={`Screenshot of ${item.title} project`}
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="portfolio-card-info-container">
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-description">
                    {item.description}
                  </p>
                  <p className="portfolio-card-type">{item.type}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
