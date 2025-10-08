import AboutBanner from "./AboutBanner";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import AboutStory from "./AboutStory";

// About: Combines all main sections of the About page
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
