const storyData = {
  title: "Following the questions",
  subtitle:
    "Technical translation, backend software, and Linux. The thread connecting them is my curiosity about how things work and how to make sense of them.",

  images: [],

  description:
    "I started studying computer science in 2022, alongside my work as a freelance translator and reviewer. Backend development caught my attention, and building my own services brought Linux into the picture. I found myself just as interested in what happened after the code started running: which process was listening, where the data went, and why something that worked yesterday had stopped today.",

  sections: [
    {
      sectionTitle: "What translation taught me",
      sectionDescriptions: [
        "Since 2019, I’ve translated and reviewed content across technical documentation, user interfaces, and training materials. Getting the words right starts with understanding the subject. An ambiguous instruction or an inconsistent term can mean going back to the source, checking the context, and asking a precise question.",
        "Those habits carry into my technical work. I pay attention to details, check my assumptions, and think about the person who will need to use what I’ve written, whether that is a translated instruction, an API, or a troubleshooting note.",
      ],
    },
    {
      sectionTitle: "Building something I could investigate",
      sectionDescriptions: [
        "CS50 gave me a foundation in computer science, and the Boot.dev backend path took me further into Python, Go, SQL, and HTTP. I was particularly drawn to the parts of an application that users depend on without necessarily seeing: request handling, data storage, and background work.",
        "My webhook relay gave those interests a concrete shape. I built a Go service backed by PostgreSQL that stores incoming events, delivers them through background workers, and records and retries failed attempts. It pushed me to think beyond whether a request succeeded: what should happen if delivery fails, or the service restarts before the work is finished?",
        "I also built an HTTP server directly on Python sockets. Working through the connection, request parsing, and response handling helped me connect the protocol to the code that implements it.",
      ],
    },
    {
      sectionTitle: "Following the application into Linux",
      sectionDescriptions: [
        "Running software brought a new set of questions. Which process owns this port? What permissions does it need? Where should I look when it fails to start? Linux gives me a way to inspect those things, and I enjoy piecing together the answers.",
        "Moving a copy of my webhook relay onto Ubuntu was a satisfying example. After restoring the PostgreSQL database and resolving an authentication problem, I logged in and retried a failed delivery. Watching the attempt count increase in the local database confirmed that the application and its delivery logic were working against the restored environment.",
        "That connection between code and the system around it is where I want to take my work: backend services, Linux, and the investigation needed to keep them running reliably.",
      ],
    },
    {
      sectionTitle: "Making the picture clearer",
      sectionDescriptions: [
        "A technical definition does not always give me a picture I can reason with. Sometimes I need something much simpler first: a familiar object, an everyday situation, or a sketch. Once I have that starting point, I can add the details and see where the comparison breaks down.",
        "That is the approach behind my writing. I want readers to leave with a clear mental picture, whether they need an accessible introduction or want to follow me into the technical details. My translation background has made me attentive to how explanations land; working with software gives me something to test them against.",
      ],
    },
    {
      sectionTitle: "Away from the screen",
      sectionDescriptions: [
        "I’m French and live in Japan, with French, English, and Japanese woven into my daily life. Away from work, I enjoy road cycling, detective fiction, and 80s music.",
        "A long ride is a good reason to leave the computer alone. A detective story tends to bring back the questions, usually with considerably more suspicious characters.",
      ],
    },
  ],
};

export default storyData;