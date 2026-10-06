import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import Hero from "./Hero";
import HomeServices from "./Services";
import HomeTestimonial from "./Testimonials";

// Home: Combines all main sections of the homepage
function Home() {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main>
        <Hero />
        <HomeServices />
        <HomeTestimonial />
      </main>
    </>
  );
}

export default Home;
