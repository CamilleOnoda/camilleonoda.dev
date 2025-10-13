import AboutBanner from "./AboutBanner";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import AboutStory from "./AboutStory";

// About page: Combines banner, skills, stats, and story sections
function About() {
  return (
    <>
      <AboutBanner />
      <AboutSkills />
      <AboutStats />
      <AboutStory />
    </>
  );
}

export default About;
