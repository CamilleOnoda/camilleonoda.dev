import BannerIntro from "./bannerIntro";
import BannerServices from "./bannerServices";
import BannerTestimonials from "./bannerTestimonials";
import BannerBlog from "./bannerBlog";

function Home() {
  return (
    <main>
      <BannerIntro />
      <BannerServices />
      {/* <BannerTestimonials /> */}
      {/* <BannerBlog /> */}
    </main>
  );
}

export default Home;
