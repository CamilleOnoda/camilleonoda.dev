import webhookRelayImage from "../Assets/webhook-relay.png";
import httpServerImage from "../Assets/HTTP-server.png";
import ubuntuImage from "../Assets/Ubuntu-webhook.png";
import quintleImage from "../Assets/quintle.png";
import basisCliImage from "../Assets/oss-curl-dependency.png";

export const ProjectsIntro = {
  heading: {
    title: "Build. Test. Debug.",
    description: "From Python sockets to Go services running on Linux."
  },
};

export const ProjectsData = [
  {
    id: 1,
    image: webhookRelayImage,
    title: "Webhook Relay",
    description:
      "A Go service for asynchronous webhook delivery. Stores incoming events in PostgreSQL, processes deliveries through background workers, retries failures, and records each attempt. Includes authenticated APIs and integration tests.",
    link: "/portfolio-details/1",
    categories: ["Backend", "Testing & Debugging"],
    type: "Go · PostgreSQL",
  },
  {
    id: 2,
    image: httpServerImage,
    title: "HTTP server from scratch",
    description:
      "An HTTP/1.1 server built directly with Python sockets. Implements request parsing, routing, persistent connections, gzip compression, and concurrent request handling to explore what happens beneath a web framework.",
    link: "/portfolio-details/2",
    categories: ["Backend"],
    type: "Python · TCP · HTTP",
  },
  {
    id: 3,
    image: ubuntuImage,
    title: "Webhook Relay on Ubuntu",
    description:
      "Running a local copy of the webhook relay against a restored PostgreSQL database on Ubuntu. Set up a dedicated application role, resolved authentication issues, and verified delivery retries through changes in the database.",
    link: "/portfolio-details/3",
    categories: ["Linux"],
    type: "Ubuntu · PostgreSQL · Troubleshooting",
  },
  {
    id: 4,
    image: quintleImage,
    title: "Quintle",
    description:
      "A word puzzle application developed with a remote team during Chingu Voyage 61. Contributed to the Go backend and worked on API contracts connecting daily and practice game modes to the React frontend.",
    link: "/portfolio-details/4",
    categories: ["Backend"],
    type: "Go · React · Team collaboration",
  },
  {
    id: 5,
    image: basisCliImage,
    title: "Open source: basis-cli",
    description:
      "An installer dependency fix submitted through a pull request. Added a check for curl and an actionable error message, with a controlled-PATH regression test confirming that installation stops before downloading when curl is unavailable.",
    link: "/portfolio-details/5",
    categories: ["Testing & Debugging", "Open Source"],
    type: "Bash · Regression testing",
  },
];