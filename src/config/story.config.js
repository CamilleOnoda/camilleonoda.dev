const storyData = {
  title: "Understanding what’s underneath",
  subtitle:
    "Technical translation, backend software, and Linux. Different kinds of work, connected by a need to understand the details and make sense of them.",

  images: [],

  description:
    "I started studying computer science in 2022 while working as a freelance translator and reviewer. Backend development held my attention, and running my own services brought Linux into the picture. I wanted to follow the whole path: from a request arriving to the process handling it, the data being stored, and the evidence left when something went wrong.",

  sections: [
    {
      id: "translation",
      sectionTitle: "Precision before programming",
      sectionDescriptions: [
        "Since 2019, I’ve translated and reviewed technical content, user interfaces, and training materials. An inconsistent term, a missing condition, or an ambiguous instruction can change what someone understands or does. Getting the wording right starts with understanding the subject.",
        {
          before:
            "That work taught me to check the source, question an assumption, and notice when an explanation leaves something unresolved. I bring those habits into software: ",
          emphasis: "paying attention to what does not quite fit",
          after:
            ", then investigating it closely enough to explain it clearly.",
        },
      ],
    },
    {
      id: "backend",
      sectionTitle: "Beyond a successful request",
      sectionDescriptions: [
        "CS50 gave me a foundation in computer science, and the Boot.dev backend path took me further into Python, Go, SQL, and HTTP. My projects gave me a place to put those ideas to work and see the consequences of my decisions.",
        {
          before:
            "My webhook relay stores events in PostgreSQL and delivers them through Go background workers, recording attempts and retrying failures. The interesting decisions were about ",
          emphasis: "what happens when delivery does not succeed",
          after:
            ": a destination is unavailable, work is interrupted, or the service restarts with deliveries still pending.",
        },
        "Building an HTTP/1.1 server directly on Python sockets let me examine a different layer. Request parsing, persistent connections, compression, and concurrent handling made the steps between a connection and a response visible.",
      ],
    },
    {
      id: "linux",
      sectionTitle: "The system around the code",
      sectionDescriptions: [
        "Linux extended the investigation beyond the application. Processes, ports, permissions, services, and logs became part of the same picture. I enjoy tracing a symptom through those layers and checking whether the evidence supports my explanation.",
        "Moving a copy of my webhook relay onto Ubuntu brought them together. I restored its PostgreSQL database, configured a dedicated application role, and resolved an authentication problem. Then I logged in, retried a failed delivery, and watched its attempt count increase in the local database. That confirmed the application was using the restored data and running its delivery logic.",
      ],
      callout: {
        label: "Where I’m heading",
        text:
          "Building backend services, understanding how they run, and investigating failures until I can explain what happened.",
      },
    },
    {
      id: "writing",
      sectionTitle: "Tech, made clear",
      sectionDescriptions: [
        {
          before: "I often need ",
          emphasis: "a simple mental picture",
          after:
            " before a technical definition becomes useful. A familiar object, an everyday situation, or a sketch gives me somewhere to start. Then I can add the detail and see where the comparison stops matching the real system.",
        },
        "My writing follows that approach. I want readers to come away with something they can picture and reason about, whether they need an introduction or want to go into the technical details. Translation taught me to consider the reader; working with software gives me a way to test whether the explanation holds up.",
      ],
    },
    {
      id: "personal",
      sectionTitle: "Away from the screen",
      variant: "personal",
      sectionDescriptions: [
        "I first came to Japan on a working holiday in 2014–2015 and moved back in 2018. I now live near Nagoya, but some of my favourite memories here involve being out on a mountain trail or somewhere far from home on my road bike. I used to hike and cycle like my life depended on it, and I want much more of both back in my life.",
        "Music takes up quite a bit of space too. I play the piano, I’m trying to learn the kalimba (a small instrument with metal tines you pluck with your thumbs), and I dream of playing the violin. I have a soft spot for 80s and 90s british music, but there’s plenty beyond that. Japan also introduced me to a love of karaoke. Singing in Japanese, reading in Japanese, and watching anime have become things I enjoy for their own sake, beyond studying the language.",
        "I also love detective fiction. Between books, music, instruments, and places I want to explore, I’m fairly good at finding another interest to make room for. The photographs on this site come from some of those moments: Miyajima in November 2015, cherry blossoms in Inuyama, and a bike that deserves to get out more often.",
      ],
    },
  ],
};

export default storyData;