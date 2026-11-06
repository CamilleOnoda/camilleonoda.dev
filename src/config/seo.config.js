import siteMetadata from "./seo.config.json";

export const seoData = siteMetadata.seoData;
export const siteUrl = siteMetadata.siteUrl;
export const socialPreviewUrl = new URL(
  siteMetadata.socialPreviewPath,
  siteUrl
).href;
export const staticPages = siteMetadata.staticPages;
