import profileImage from "../Assets/inuyama-sakura.jpg";
import storyImage from "../Assets/golden-torii.png";

// 1. BANNER

export const aboutIntro = {
  image: profileImage,
  badge: {
    emoji: "",
    text: "",
    description: "",
  },
  cvLink: "/assets/Camille_Onoda_CV.pdf",
  cvText: "Download CV",
  heading: {
    title: "Backend software, Linux, and a habit of investigating",
  },
  description:
    "I'm drawn to work that gives me something to figure out. I build backend software with Go and Python, and I want to understand what happens once it's running. A failed delivery, an unexpected response, or a service that stops working gives me a reason to look closer. Years of technical translation and review have shaped how I approach that work: paying attention to details, asking precise questions, and making sense of complex information.",
};

// 2. EDUCATION + APPROACH
// Existing export names and fields are kept for component compatibility.

export const educationData = {
  heading: { title: "Education and training" },
  education: [
    {
      degree: "Backend Engineering Program · Boot.dev",
      year: "Nov 2024 - Jun 2026",
    },
    {
      degree: "AWS Certified Cloud Practitioner",
      year: "Apr 2024",
    },
    {
      degree: "PCEP · Certified Entry-Level Python Programmer",
      year: "Nov 2024",
    },
    {
      degree: "CS50 Computer Science & CS50 Python · Harvard University",
      year: "2023 - 2024",
    },
    {
      degree: "Master's Degree in English - French Translation",
      year: "2019",
    },
  ],
  achievementsHeading: { title: "How I work" },
  achievements: [
    {
      title: "Investigate",
      description:
        "Follow a problem from its symptoms toward the cause, using logs, tests, and observed behavior to check assumptions.",
    },
    {
      title: "Test",
      description:
        "Check what happens when requests fail, dependencies are unavailable, or background work is interrupted.",
    },
    {
      title: "Explain",
      description:
        "Make technical information clear enough for someone else to understand the decisions and continue the work.",
    },
    {
      title: "Collaborate",
      description:
        "Bring experience working remotely with international clients, managing deadlines, and resolving questions across languages.",
    },
  ],
};

// 3. PROFESSIONAL EXPERIENCE

export const workExperience = {
  heading: { title: "Professional background" },
  jobs: [
    {
      role: "Freelance technical translator & reviewer",
      company: "International clients · Japan / Remote",
      period: "2019 - Present",
      description:
        "Translate and review technical and software-related content from English and Japanese into French. Investigate ambiguities, identify inconsistencies, and work with clients to clarify meaning. Independently manage terminology, deadlines, and quality requirements across international projects.",
    },
  ],
};

// 4. TECHNICAL SKILLS

export const skillsData = {
  heading: { title: "Tools and technologies I work with" },
  skills: [
    "Go",
    "Python",
    "PostgreSQL",
    "SQL",
    "HTTP",
    "REST APIs",
    "Integration testing",
    "Linux",
    "Bash",
    "systemd",
    "SSH",
    "Docker",
    "Docker Compose",
    "Git",
    "GitHub",
  ],
};

// 5. PERSONAL CONTEXT

export const storyData = {
  image: storyImage,
  heading: { title: "Beyond the technical work" },
  text:
    "I'm French and based in Japan, working across French, English, and Japanese. Outside software, I enjoy road cycling, detective fiction, and 80s music. A good mystery tends to hold my attention, whether it's in a book or somewhere between a failed request and a system log.",
  linkText: "More about my path",
  linkUrl: "/story",
};