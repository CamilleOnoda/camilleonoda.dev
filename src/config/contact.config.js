import contactImg from "../Assets/GOPR0502.JPG";
import { socialLinks } from "./social.config";

export const ContactData = {
  image: contactImg,
  heading: {
    title: "Let's talk",
    description:
      "About a role, a project, or something in my work that caught your attention.",
  },
  secondheading: {
    title: "You can also find me here",
  },
  contactCards: [
    {
      type: "Email",
      iconClass: "fas fa-envelope",
      email: {
        label: "info@camilleonoda.com",
        href: "mailto:info@camilleonoda.com",
      },
      description: "I usually reply within one business day. Based in Japan (JST).",
    },
    {
      type: "Find me online",
      iconClass: "fas fa-share-alt",
      icons: socialLinks,
      description: "My code, writing, and professional background.",
    },
  ],
};
