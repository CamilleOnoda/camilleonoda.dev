import contactImg from "../Assets/contact-img.jpg";
import { FaGlobe, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiStackoverflow } from "react-icons/si";

export const ContactData = {
  image: contactImg,

  contactCards: [
    {
      type: "Hire Me",
      iconClass: "fas fa-user-tie",
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
      description: "Feel free to call me for any inquiries or collaborations",
    },
    {
      type: "Email",
      iconClass: "fas fa-envelope",
      email: {
        label: "email@gmail.com",
        href: "#",
      },
      description: "Contact me via email for projects and opportunities",
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
      description: "Stay connected for updates from my coding journey",
    },
  ],
};
