import profileImage from "../Assets/about1.webp";
import deskImg from "../Assets/about2.webp";

export const aboutIntro = {
  image: profileImage,
  badge: {
    emoji: "😊",
    text: "80+",
    description: "Happy Clients",
  },
  cvLink: "#",
  heading: {
    title: "I build software that solve users’ problems",
  },
  description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.ks
  Donec quam felis, ultricies nec. enean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
};

export const educationAndSkills = {
  educationHeading: {
    title: "My Education",
  },
  education: [
    { degree: "MSc Software Engineering", year: "2020 - 2024" },
    { degree: "Diploma In Web Development", year: "2020" },
    { degree: "Specialization in Backend", year: "2019" },
    { degree: "Specialization in Frontend", year: "2020" },
    { degree: "BSc Computer Science", year: "2016 - 2019" },
  ],
  skillHeading: {
    title: "My Skills",
  },
  skills: [
    "Frontend (ReactJS, JavaScript, Vue)",
    "Backend (Node.js, Django, Java)",
    "Databases (MongoDB, MySQL, PostgreSQL)",
    "Fully API Integration & RESTful Services",
    "Testing, performance & Debugging",
  ],
};

export const aboutStats = [
  {
    title: "1K+",
    description: "Satisfied clients who trust my work",
  },
  { title: "300+", description: "Projects built with care and creativity" },
  { title: "10+", description: "Years of web development experience" },
  { title: "100+", description: "Skilled collaborators around the world" },
];

export const storyData = {
  image: deskImg,
  heading: {
    title: "My Story",
  },
  text: `I discovered my passion for development by exploring how things work behind the web. That curiosity turned into a journey of learning, building, and sharing what I create. Along the way, I’ve picked up valuable lessons, favorite books, and a few stories from my very first project. I love tackling challenges, solving problems, and growing with every new experience.`,
  linkText: "Read my story",
  linkUrl: "/story",
};
