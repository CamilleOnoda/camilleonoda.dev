import contactImg from "../Assets/contact-img.webp";
import { FaGlobe, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiStackoverflow } from "react-icons/si";

export const ContactData = {
  image: contactImg,
  // Primary heading displayed above the contact form
  heading: {
    title: "Let's start a new project",
  },

  // Secondary heading displayed above contact cards
  secondheading: {
    title: "Let's connect for projects, collaborations, or a quick hello",
  },

  // Array of contact cards (Hire Me, Phone, Email, Social Media)
  contactCards: [
    {
      type: "Hire Me",
      iconClass: "fas fa-user-tie", // Font Awesome icon class
      links: [
        { label: "Fiverr", href: "#" },
        { label: "Upwork", href: "#" },
      ],
      description: "Available for freelance projects on trusted platforms",
    },
    {
      type: "Phone",
      iconClass: "fas fa-phone-alt",
      phone: "+123 456 7890",
      description: "Feel free to reach out by phone for any questions or ideas",
    },
    {
      type: "Email",
      iconClass: "fas fa-envelope",
      email: {
        label: "email@gmail.com",
        href: "#",
      },
      description:
        "Connect with me via email for projects, collaborations, or opportunities",
    },
    {
      type: "Social Media",
      iconClass: "fas fa-share-alt",
      icons: [
        { icon: FaGithub, href: "#" },
        { icon: FaLinkedinIn, href: "#" },
        { icon: FaInstagram, href: "#" },
        { icon: FaGlobe, href: "#" },
        { icon: SiStackoverflow, href: "#" },
      ],
      description: "Stay connected for more stories from my coding journey",
    },
  ],
};
