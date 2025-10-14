import DetailsPage from "../../shared/components/detailPage/DetailPage";
import StoryGallery from "../../shared/components/gallery/storyGallery";
import storyData from "../../config/story.config";

function Story() {
  // Display story images in a gallery
  const extraContent = <StoryGallery images={storyData.images} />;

  // Render DetailsPage with story content and gallery
  return (
    <DetailsPage
      title={storyData.title}
      subtitle={storyData.subtitle}
      sections={storyData.sections}
      extraContent={extraContent}
    />
  );
}

export default Story;
