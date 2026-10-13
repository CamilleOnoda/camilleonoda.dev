export const writingHeading = {
  title: "Writing",
  description:
    "Mental pictures, practical explanations, and investigations into how software and Linux systems work.",
};

export const writingCategories = [
  "All",
  "Tech, made clear",
  "Collaboration",
  "Walkthroughs",
];

export const writingArticles = [
  {
    id: "browser-prometheus-connection",
    title: "Why could my browser reach the app when Prometheus couldn’t?",
    category: "Tech, made clear",
    description:
      "A Boot.dev metrics lesson led me into Windows, WSL, and Docker networking. With AI assistance and a post office analogy, I worked through why the browser could reach Linko while Prometheus couldn’t.",
    tags: ["Networking", "Docker", "WSL", "Prometheus"],
    publication: "Author: Camille Onoda",
    url: "/writing/browser-prometheus-connection",
  },
  {
    id: "http-server-python",
    title: "Building an HTTP Server From Scratch in Python",
    category: "Walkthroughs",
    description:
      "Following an HTTP request from a socket connection to a response, through the implementation of a Python server.",
    tags: ["Python", "HTTP", "Sockets"],
    publication: "WebDigestPro | Author: Camille Onoda",
    url: "https://www.webdigestpro.com/building-an-http-server-from-scratch-in-python/",
  },
  {
    id: "where-does-the-cache-go",
    title: "Where Does the Cache Go?",
    category: "Tech, made clear",
    description:
      "A closer look at caching: what gets stored, where it lives, and how it helps avoid repeating work.",
    tags: ["Caching"],
    publication: "WebDigestPro | Author: Camille Onoda",
    url: "https://www.webdigestpro.com/where-does-the-cache-go/",
  },
    {
    id: "from-information-management-to-ai-powered-information-intelligence",
    title: "From Information Management to AI-Powered Information Intelligence",
    category: "Collaboration",
    description:
      "How AI is changing search, verification, governance, compliance, analytics, and the role of human judgment.",
    tags: ["AI", "Information Management"],
    publication: "WebDigestPro | Editorial review: Camille Onoda",
    url: "https://www.webdigestpro.com/from-information-management-to-ai-powered-information-intelligence/",
  },
];