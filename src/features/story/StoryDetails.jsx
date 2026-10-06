import SEO from "../../shared/components/seo/SEO";
import { seoData } from "../../config/seo.config";
import DetailsPage from "../../shared/components/detailPage/DetailPage";
import StoryGallery from "../../shared/components/gallery/StoryGallery";
import storyData from "../../config/story.config";

function Story() {
  // Display story images in a gallery
  const extraContent = <StoryGallery images={storyData.images} />;

  // Render DetailsPage with story content and gallery
  return (
    <>
      <SEO
        title={seoData.story.title}
        description={seoData.story.description}
      />
      <DetailsPage
        title={storyData.title}
        subtitle={storyData.subtitle}
        sections={storyData.sections}
        extraContent={extraContent}
      />
    </>
  );
}

export default Story;
