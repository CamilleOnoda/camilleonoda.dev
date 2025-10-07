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
  button: "See my CV",
  experience: {
    years: "10+",
    text: "Years Of Experience",
    emoji: "😊",
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

export const bannerServices = {
  heading: {
    title: "How I bring ideas to life",
  },
  services: [
    {
      title: "Frontend Development",
      projects: "30 Projects",
      description:
        "Bringing ideas to life with sleek, responsive, and interactive interfaces built using React, Vue, and CSS",
      category: "Frontend",
      clickable: true,
      link: "/portfolio?category=Frontend", // added link
    },
    {
      title: "Backend Development",
      projects: "25 Projects",
      description:
        "Powering applications with secure, high-performance backends using Node.js, Express, and Django",
      category: "Backend",
      clickable: true,
      link: "/portfolio?category=Backend",
    },
    {
      title: "Database Management",
      projects: "20 Projects",
      description:
        "Designing and tuning SQL and NoSQL databases for seamless performance, scalability, and reliability",
      category: "Database",
      clickable: true,
      link: "/portfolio?category=Database",
    },
    {
      title: "Testing & Debugging",
      projects: "15 Projects",
      description:
        "Delivering bug-free, reliable code through smart debugging and automated testing frameworks",
      category: "Testing & Debugging",
      clickable: true,
      link: "/portfolio?category=Testing%20%26%20Debugging",
    },
  ],
};
