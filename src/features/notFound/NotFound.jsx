import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpItem } from "../../shared/components/FramerVariants";
import { notFoundData } from "../../config/notFound.config";
import Button from "../../shared/components/button/Button";

function NotFound() {
  return (
    <>
      <SEO
        title={seoData.notFound.title}
        description={seoData.notFound.description}
      />
      <section className="notfound-section">
        <motion.div
          className="notfound-container"
          initial="initial"
          animate="animate"
          variants={fadeUpItem}
        >
          {/* 404 Code */}
          <h1 className="notfound-code">{notFoundData.code}</h1>

          {/* Title */}
          <h2 className="notfound-title">{notFoundData.title}</h2>

          {/* Description */}
          <p className="notfound-description">{notFoundData.description}</p>

          {/* Back to Home Button */}
          <Link to={notFoundData.button.link}>
            <Button
              text={notFoundData.button.text}
              variant="primary"
              size="medium"
            />
          </Link>
        </motion.div>
      </section>
    </>
  );
}

export default NotFound;
