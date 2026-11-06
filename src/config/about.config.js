import profileImage from "../Assets/inuyama-sakura.webp";
import storyImage from "../Assets/golden-torii.webp";
import cvLink from "../Assets/Camille_Onoda_CV.pdf";
import React from "react";

// 1. INTRODUCTION

export const aboutIntro = {
  image: profileImage,
  badge: {
    emoji: "",
    text: "",
    description: "",
  },
  cvLink,
  cvText: "Download CV",
  heading: {
    title: "Building backend software. Understanding how it runs.",
  },
  description:
    "I’m a backend-focused software engineer working with Go, Python, and PostgreSQL, with a growing focus on Linux and infrastructure. My projects cover asynchronous webhook delivery, HTTP server implementation, and running an application against a restored database on Ubuntu. I’m interested in the connection between application code and its operating environment: how requests move through a system, how failures appear, and what evidence helps explain them.",
};

// 2. EDUCATION AND APPROACH

export const educationData = {
  heading: { title: "Education and training" },
  education: [
    {
      degree: "Backend Developer Career Path · Boot.dev",
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
      degree: "CS50’s Introduction to Computer Science & Programming with Python · Harvard",
      year: "2023 - 2024",
    },
    {
      degree: "Master’s Degree in English–French Translation",
      year: "2019",
    },
  ],
  achievementsHeading: { title: "How I approach the work" },
  achievements: [
    {
      title: "Investigate",
      description:
        "Start with the symptom, establish what is happening, and use logs, database state, and targeted checks to narrow down the cause.",
    },
    {
      title: "Verify",
      description:
        "Look for observable evidence: a response from a test endpoint, a changed delivery record, or a service listening where expected.",
    },
    {
      title: "Document",
      description:
        "Record the reasoning as well as the fix, including unsuccessful attempts, remaining questions, and the limits of what was verified.",
    },
    {
      title: "Collaborate",
      description:
        "Clarify expectations, raise questions early, and communicate decisions through written exchanges, API contracts, and review.",
    },
  ],
};

// 3. PROFESSIONAL BACKGROUND

export const workExperience = {
  heading: { title: "Professional background" },
  jobs: [
    {
      role: "Freelance translator & reviewer",
      company: "International clients · Remote from Japan",
      period: "2019 - Present",
      description:
        "Translate and review English and Japanese content into French, including technical documentation, software interfaces, policies, and training materials. Work includes projects for humanitarian and international organisations. Resolve ambiguous instructions, maintain terminology, and coordinate questions and deadlines with clients. This experience informs how I document technical work and communicate across languages.",
    },
  ],
};

// 4. TECHNICAL SKILLS

export const skillsData = {
  heading: { title: "Technologies used in my projects and practice" },
  skills: [
    "Go",
    "Python",
    "PostgreSQL",
    "SQL",
    "HTTP / REST APIs",
    "sqlc",
    "Goose",
    "httptest",
    "Testcontainers",
    "Linux / Ubuntu",
    "Bash",
    "systemd / journalctl",
    "SSH",
    "Docker",
    "Docker Compose",
    "Git / GitHub",
  ],
};

// 5. LINK TO PERSONAL STORY

export const storyData = {
  image: storyImage,
  heading: { title: "A little further from the keyboard" },
  text: (
  <>
    I first came to Japan on a working holiday in 2014–2015 and returned
    in 2018. Outside technical work, I play the piano, am learning the{" "}
    <a
      href="https://en.wikipedia.org/wiki/Mbira"
      target="_blank"
      rel="noopener noreferrer"
    >
      kalimba
    </a>
    , and would love to learn the violin. I also enjoy detective fiction,
    karaoke, and reading in Japanese. I also love long hikes and long days on my road bike!
  </>
),
  linkText: "Read my story",
  linkUrl: "/story",
};