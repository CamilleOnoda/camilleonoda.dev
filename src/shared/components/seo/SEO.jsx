import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteUrl, socialPreviewUrl } from "../../../config/seo.config";

const SEO = ({ title, description, type = "website", noindex = false }) => {
  const { pathname } = useLocation();
  const canonicalUrl = new URL(pathname, siteUrl).href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialPreviewUrl} />
      <meta property="og:image:alt" content="Camille Onoda — Backend & Linux" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialPreviewUrl} />
      <meta
        name="twitter:image:alt"
        content="Camille Onoda — Backend & Linux"
      />
    </Helmet>
  );
};

export default SEO;
