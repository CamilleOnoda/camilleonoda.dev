import img from "../Assets/picture-perso.png";
import { socialLinks } from "./social.config";

export const bannerIntro = {
  greeting: "",
  name: "Camille Onoda",
  description:
    "I build backend software and follow it into the systems that run it. From webhook delivery and HTTP internals to Linux services and networking, I care about how things behave, why they fail, and how to make them easier to understand and maintain.",
  cvLink: "/Camille_Onoda_CV.pdf",
  button: "Download CV",
  experience: {
    years: "7+",
    text: "Years in technical communication",
    emoji: "",
  },
  image: img,
  socialLinks,
};

export const bannerServices = {
  heading: { title: "What I work on" },
  services: [
    {
      id: 1,
      title: "Backend engineering",
      projects: "Go · Python · PostgreSQL",
      description:
        "Designing APIs and backend services, from data models and authentication to background processing and HTTP behavior.",
      category: "Backend",
      clickable: false,
      link: "",
    },
    {
      id: 2,
      title: "Reliability & testing",
      projects: "Retries · recovery · integration tests",
      description:
        "Designing for failed requests and interrupted work, with stored events, delivery records, and tests that check how the system behaves when something goes wrong.",
      category: "Backend",
      clickable: false,
      link: "",
    },
    {
      id: 3,
      title: "Linux & troubleshooting",
      projects: "Ubuntu · Bash · networking",
      description:
        "Running services, examining logs and processes, and tracing problems through the application, operating system, and network.",
      category: "Linux",
      clickable: false,
      link: "",
    },
    {
      id: 4,
      title: "Technical communication",
      projects: "French · English · Japanese",
      description:
        "Turning complex technical information into clear documentation, asking precise questions, and working across languages and teams.",
      category: "Communication",
      clickable: false,
      link: "",
    },
  ],
};