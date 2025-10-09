import DetailsPage from "../../shared/components/detailPage/DetailPage";
import StoryGallery from "../../shared/components/gallery/storyGallery";
import storyData from "../../config/story.config";

function Story() {
  // Gallery section with all story images
  const extraContent = <StoryGallery images={storyData.images} />;

  // Render shared DetailsPage with story-specific content
  return (
    <DetailsPage
      title={storyData.title} // Story page title
      subtitle={storyData.subtitle} // Short intro or description
      sections={storyData.sections} // Story content sections
      extraContent={extraContent} // Embedded image gallery
    />
  );
}

export default Story;
