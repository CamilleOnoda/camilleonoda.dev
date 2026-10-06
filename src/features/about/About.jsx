import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import AboutBanner from "./AboutBanner";
import AboutEducation from "./AboutEducation";
import AboutExperience from "./AboutExperience";
import AboutSkills from "./AboutSkills";
import AboutStory from "./AboutStory";

function About() {
  return (
    <>
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
      />
      <AboutBanner />
      <AboutEducation />
      <AboutExperience />
      <AboutSkills />
      <AboutStory />
    </>
  );
}

export default About;
