import profileImage from "../Assets/about1.webp";
import deskImg from "../Assets/about2.webp";

export const aboutIntro = {
  image: profileImage,
  badge: {
    emoji: "😍",
    text: "80+",
    description: "Happy Clients",
  },
  cvLink: "#",
  description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.ks
  Donec quam felis, ultricies nec. enean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
};

export const aboutStats = [
  { title: "3K+", description: "Happy customers with full satisfaction" },
  { title: "500+", description: "Completed projects with full passion" },
  { title: "10+", description: "Years of experience in web development" },
  { title: "100+", description: "Team members across the world" },
];

export const educationAndSkills = {
  heading: "I'm great in what I do\nand I'm loving it",
  education: [
    { degree: "MSc Software Engineering", year: "2020 - 2024" },
    { degree: "Diploma In Web Development", year: "2020" },
    { degree: "Specialization in Backend", year: "2019" },
    { degree: "Specialization in Frontend", year: "2020" },
    { degree: "BSc Computer Science", year: "2016 - 2019" },
  ],
  skills: [
    "Frontend (ReactJS, JavaScript, Vue)",
    "Backend (Node.js, Django, Java)",
    "Databases (MongoDB, MySQL, PostgreSQL)",
    "Fully API Integration & RESTful Services",
    "Testing, performance & Debugging",
  ],
};

export const storyData = {
  image: deskImg,
  heading: "My Story",
  text: `How I discovered my passion for development, and started building my path as a Web Developer. I share the valuable lessons I've learned so far, book recommendations, and sneak peeks of my very first project. You'll also see how I approach problem-solving, and how I continuously adapt and grow by exploring new ones.`,
  linkText: "Read my story",
  linkUrl: "/story",
};
