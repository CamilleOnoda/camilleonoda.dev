import img from "../Assets/home-banner.webp";
import {
  FaGlobe,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

export const bannerIntro = {
  greeting: "Hello, I'm",
  name: "Amara Lune",
  description:
    "Full-stack developer focused on building web experiences, writing clean code, solving problems, and staying curious",
  cvLink: "#",
  experience: {
    years: "10+",
    text: "Years Of Experience",
    emoji: "😍",
  },
  image: img,
  socialLinks: [
    { icon: FaGithub, url: "#", name: "GitHub" },
    { icon: FaLinkedinIn, url: "#", name: "Linkedin" },
    { icon: FaFacebook, url: "#", name: "Facebook" },
    { icon: FaGlobe, url: "#", name: "Globe" },
    { icon: FaEnvelope, url: "#", name: "Email" },
  ],
};

export const bannerServices = [
  {
    title: "Frontend Development",
    projects: "30 PROJECTS",
    description:
      "Creating visually stunning and interactive user interfaces with React, Vue, and modern CSS.",
    category: "Frontend",
  },
  {
    title: "Backend Development",
    projects: "25 PROJECTS",
    description:
      "Developing robust server-side applications using Node.js, Express, and Django.",
    category: "Backend",
  },
  {
    title: "Database Management",
    projects: "20 PROJECTS",
    description:
      "Designing and optimizing SQL and NoSQL databases for high performance and scalability.",
    category: "Database",
  },
  {
    title: "Testing & Debugging",
    projects: "15 PROJECTS",
    description:
      "Ensuring code reliability with unit testing, debugging, and automated test frameworks.",
    category: "Testing & Debugging",
  },
];
