import {
  FaServer,
  FaDatabase,
  FaBug,
  FaLinux,
  FaNetworkWired,
  FaFileAlt,
} from "react-icons/fa";

export const ServicesIntro = {
  heading: {
    title: "What I focus on",
  },
};

export const ServicesData = [
  {
    id: 1,
    icon: FaServer,
    title: "Backend systems",
    description:
      "Building services with Go and Python, from HTTP request handling and authenticated APIs to background workers. I’m interested in how the pieces behave together once the application is running.",
  },
  {
    id: 2,
    icon: FaDatabase,
    title: "Data & persistence",
    description:
      "Working with PostgreSQL schemas, queries, and migrations. In my webhook relay, stored events and delivery records make it possible to track what happened and recover failed work.",
  },
  {
    id: 3,
    icon: FaBug,
    title: "Reliability & testing",
    description:
      "Designing retries, recording delivery attempts, and testing behavior with real dependencies. I pay particular attention to failed requests and the assumptions that only become visible when something goes wrong.",
  },
  {
    id: 4,
    icon: FaLinux,
    title: "Linux & services",
    description:
      "Running applications on Ubuntu and investigating their processes, permissions, configuration, and logs. Bringing my webhook relay onto Linux connects the code I write with the environment it depends on.",
  },
  {
    id: 5,
    icon: FaNetworkWired,
    title: "HTTP & networking",
    description:
      "Following requests through sockets, listening ports, DNS, and application responses. Building an HTTP server directly with Python sockets gave me a closer view of the mechanisms behind a web request.",
  },
  {
    id: 6,
    icon: FaFileAlt,
    title: "Technical communication",
    description:
      "Making complex information easier to understand through documentation, articles, and concrete mental pictures. I bring seven years of translation and review experience, working across French, English, and Japanese.",
  },
];