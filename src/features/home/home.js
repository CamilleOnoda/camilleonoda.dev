import BannerIntro from "./bannerIntro";
import BannerServices from "./bannerServices";
import BannerTestimonial from "./bannerTestimonial";

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
