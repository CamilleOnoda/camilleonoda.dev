import DetailsPage from "../../shared/components/detailPage/DetailPage";
import StoryGallery from "../../shared/components/gallery/storyGallery";
import storyData from "../../config/story.config";

function Story() {
  const extraContent = <StoryGallery images={storyData.images} />;

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
