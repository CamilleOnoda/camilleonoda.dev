import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./portfolio.css";
import { ProjectsData, ProjectsIntro } from "../../config/projects.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";
import Card from "../../shared/components/card/Card";

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
          <SectionHeader
            title={ProjectsIntro.heading.title}
            highlight={ProjectsIntro.heading.highlight}
            end={ProjectsIntro.heading.end}
          />
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
              to={item.link}
              className="portfolio-card-link"
              aria-label={`View details of ${item.title}`}
            >
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                meta={item.type}
                type="hover-arrow"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
