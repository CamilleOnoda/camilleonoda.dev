import DetailsPage from "../../shared/components/detailPage/DetailPage";
import BlogDetailsData from "../../config/blogDetails.config";

function BlogDetails() {
  return (
    // Render blog details using the reusable DetailPage component
    <DetailsPage
      title={BlogDetailsData.title}
      subtitle={BlogDetailsData.subtitle}
      heroImg={BlogDetailsData.heroImg}
      sections={BlogDetailsData.sections}
    />
  );
}

export default BlogDetails;
