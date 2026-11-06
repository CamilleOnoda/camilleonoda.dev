const fs = require("fs");
const path = require("path");
const metadata = require("../src/config/seo.config.json");

const buildDirectory = path.resolve(__dirname, "../build");
const templatePath = path.join(buildDirectory, "index.html");

function escapeAttribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceRequired(html, pattern, replacement, description) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${description} in build/index.html`);
  }
  return html.replace(pattern, replacement);
}

function replaceMeta(html, attribute, name, content) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+(?=[^>]*\\b${attribute}=["']${escapedName}["'])[^>]*>`,
    "i"
  );
  const tag = `<meta data-rh="true" ${attribute}="${name}" content="${escapeAttribute(content)}" />`;
  return replaceRequired(html, pattern, tag, `${attribute}=${name}`);
}

function pageMetadata(page) {
  const data = page.seoKey ? metadata.seoData[page.seoKey] : page;
  if (!data?.title || !data?.description) {
    throw new Error(`Missing title or description for ${page.path}`);
  }
  return { ...data, type: page.type || "website" };
}

function renderPage(template, page) {
  const { title, description, type } = pageMetadata(page);
  const canonicalUrl = new URL(page.path, metadata.siteUrl).href;
  const imageUrl = new URL(metadata.socialPreviewPath, metadata.siteUrl).href;
  let html = replaceRequired(
    template,
    /<title>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${escapeAttribute(title)}</title>`,
    "title"
  );

  html = replaceMeta(html, "name", "description", description);
  html = replaceMeta(html, "name", "robots", "index, follow");
  html = replaceMeta(html, "property", "og:type", type);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", description);
  html = replaceMeta(html, "property", "og:image", imageUrl);
  html = replaceMeta(
    html,
    "property",
    "og:image:alt",
    "Camille Onoda — Backend & Linux"
  );
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", description);
  html = replaceMeta(html, "name", "twitter:image", imageUrl);
  html = replaceMeta(
    html,
    "name",
    "twitter:image:alt",
    "Camille Onoda — Backend & Linux"
  );
  html = replaceRequired(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link data-rh="true" rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
    "canonical link"
  );
  html = replaceRequired(
    html,
    /<noscript>[\s\S]*?<\/noscript>/i,
    `<noscript><main><h1>${escapeAttribute(title)}</h1><p>${escapeAttribute(description)}</p><p>JavaScript is required for the full interactive site. You can also <a href="mailto:info@camilleonoda.com">contact Camille Onoda</a>.</p></main></noscript>`,
    "no-script fallback"
  );

  return html;
}

function writeStaticPages(template) {
  for (const route of metadata.staticPages) {
    const outputPath =
      route.path === "/"
        ? templatePath
        : path.join(buildDirectory, route.path.slice(1), "index.html");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, renderPage(template, route));
  }
}

function writeSitemap() {
  const urls = metadata.staticPages
    .map(
      ({ path: routePath }) =>
        `  <url><loc>${new URL(routePath, metadata.siteUrl).href}</loc></url>`
    )
    .join("\n");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(buildDirectory, "sitemap.xml"), sitemap);
}

if (!fs.existsSync(templatePath)) {
  throw new Error("Run this script after the production build");
}

const template = fs.readFileSync(templatePath, "utf8");
writeStaticPages(template);
writeSitemap();
