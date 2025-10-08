import BannerIntro from "./bannerIntro";
import BannerServices from "./bannerServices";
import BannerTestimonial from "./bannerTestimonial";

// Home: Combines all main sections of the homepage
function Home() {
  return (
    <main>
      <BannerIntro />
      <BannerServices />
      <BannerTestimonial />
    </main>
  );
}

export default Home;
