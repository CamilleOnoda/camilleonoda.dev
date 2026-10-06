import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Portfolio.css";
import { ProjectsData, ProjectsIntro } from "../../config/portfolio.config";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import Button from "../../shared/components/button/Button";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import Card from "../../shared/components/card/Card";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();

  // Update category from URL query param
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl) setSelectedCategory(categoryFromUrl);
  }, [location]);

  const categories = [
    "All",
    "Backend",
    "Linux",
    "Testing & Debugging",
    "Open Source",
  ];

  // Filter projects based on selected category
  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((item) =>
          item.categories.includes(selectedCategory)
        );
  }, [selectedCategory]);

  return (
    <>
      <SEO
        title={seoData.portfolio.title}
        description={seoData.portfolio.description}
      />
      <section
        className="portfolio-section"
        aria-labelledby="portfolio-section-heading"
      >
        <div className="portfolio-header-container">
          {/* Section Heading with animation*/}
          <motion.div
            id="portfolio-section-heading"
            className="portfolio-header-title"
            variants={fadeUpItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <SectionHeader title={ProjectsIntro.heading.title} />
            <p className="portfolio-intro">
            {ProjectsIntro.heading.description}
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="portfolio-categories-container"
            variants={fadeUpItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                text={category}
                onClick={() => {
                  setSelectedCategory(category);
                  navigate(`?category=${encodeURIComponent(category)}`);
                }}
                variant="secondary"
                size="medium"
                isActive={selectedCategory === category}
                ariaPressed={selectedCategory === category}
              />
            ))}
          </motion.div>

          {/* Project Cards */}
          <div className="portfolio-inner-container">
            {filteredItems.length === 0 ? (
              <p>No projects found in "{selectedCategory}"</p>
            ) : (
              filteredItems.map((item) => (
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
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
