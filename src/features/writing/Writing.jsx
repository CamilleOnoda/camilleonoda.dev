import { useState } from "react";
import SEO from "../../shared/components/seo/SEO";
import SectionHeader from "../../shared/components/sectionHeader/SectionHeader";
import {
  writingHeading,
  writingCategories,
  writingArticles,
} from "../../config/writing.config";
import WritingCard from "./WritingCard";
import "./writing.css";

function Writing() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleArticles =
    activeCategory === "All"
      ? writingArticles
      : writingArticles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <>
      <SEO
        title="Writing | Camille Onoda"
        description={writingHeading.description}
      />

      <main className="writing-section">
        <div className="writing-container">
          <header className="writing-heading">
            <SectionHeader />
            <p className="writing-intro">{writingHeading.description}</p>
          </header>

          <div className="writing-filters" aria-label="Filter articles">
            {writingCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="writing-filter"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {visibleArticles.length > 0 ? (
            <div className="writing-grid">
              {visibleArticles.map((article) => (
                <WritingCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="writing-empty" role="status">
              No articles in this category yet.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Writing;