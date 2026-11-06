export const ProjectDetailsData = [
  {
    projectId: 1,
    projectTitle: "Webhook Relay",
    projectSubtitle:
      "A backend service for storing webhooks, delivering them asynchronously, and keeping track of what happens when delivery fails.",
    techStack: [
      "Go",
      "PostgreSQL",
      "sqlc",
      "Goose",
      "JWT",
      "Testcontainers",
    ],
    liveLink: "https://webhook-relay-production-5e97.up.railway.app/",
    demoCredentials: {
    email: "user@demo.com",
    password: "password1234",
    note: "This account is shared with other visitors. Its data may change.",
    },
    githubLink: "https://github.com/CamilleOnoda/webhook-relay",
    heroImage: "",
    projectSections: [
      {
        sectionTitle: "What it does",
        sectionContent:
          "The service receives webhook events, stores them in PostgreSQL, and delivers them to configured endpoints through background workers. Authenticated APIs let users manage their endpoints and inspect events and delivery attempts.",
      },
      {
        sectionTitle: "Designing for failed delivery",
        sectionContent:
          "Receiving an event and delivering it are separate steps. Keeping events and delivery records in the database makes failed work visible and gives retries a persistent record to work from. Delivery logs include attempt status, HTTP response codes, and retry times.",
      },
      {
        sectionTitle: "Implementation",
        sectionContent:
          "The backend uses Go HTTP handlers, PostgreSQL data models, sqlc queries, and Goose migrations. Authentication uses Argon2id password hashing and JWTs. Background workers handle delivery and retry scheduling.",
      },
      {
        sectionTitle: "Testing",
        sectionContent:
          "Integration tests exercise application behavior against PostgreSQL in containerized test environments. This checks the interaction between HTTP handlers, database queries, and migrations using real dependencies.",
      },
      {
        sectionTitle: "Ongoing work",
        sectionContent:
          "I continue to develop the service and investigate its operational behavior. Current areas of interest include observability, delivery security, and running the application on Linux.",
      },
    ],
  },
  {
    projectId: 2,
    projectTitle: "HTTP server from scratch",
    projectSubtitle:
      "Building an HTTP/1.1 server directly with Python sockets to understand how a connection becomes a request and a response.",
    techStack: ["Python", "Sockets", "TCP", "HTTP/1.1", "Threading"],
    liveLink: "",
    githubLink: "https://github.com/CamilleOnoda/http-server-python",
    heroImage: "",
    projectSections: [
      {
        sectionTitle: "Purpose",
        sectionContent:
          "Built through the CodeCrafters HTTP server challenge, this project explores the behavior usually handled by a web framework. Working directly with sockets makes request parsing, response formatting, and connection handling explicit.",
      },
      {
        sectionTitle: "Implemented behavior",
        sectionContent:
          "The server handles routing, request headers, GET and HEAD requests, file endpoints, gzip compression, and persistent connections. Threads and a semaphore support concurrent request handling.",
      },
      {
        sectionTitle: "The questions behind the code",
        sectionContent:
          "The implementation required thinking about the boundary between a TCP connection and an HTTP message: how to interpret incoming bytes, format a valid response, and handle multiple requests over a connection.",
      },
      {
        sectionTitle: "Validation and explanation",
        sectionContent:
          "Automated tests validate the server’s behavior. I also published Building an HTTP Server From Scratch in Python, explaining the implementation and the HTTP concepts behind it.",
      },
    ],
  },
  {
  projectId: 3,
  projectTitle: "Webhook Relay on Ubuntu",
  projectSubtitle:
    "Restoring a hosted PostgreSQL database on Ubuntu, resolving authentication, and verifying the Go application against its local data.",
  techStack: [
    "Ubuntu",
    "Go",
    "PostgreSQL 18",
    "pg_dump",
    "pg_restore",
    "PostgreSQL authentication",
  ],
  liveLink: "",
  githubLink: "https://github.com/CamilleOnoda/webhook-relay",
  heroImage: "",
  projectSections: [
    {
      sectionTitle: "Why a second environment?",
      sectionContent:
        "I wanted to take the Webhook Relay beyond its hosted setup and understand the environment around it. Running a local copy on Ubuntu meant working directly with PostgreSQL installation, database roles, authentication rules, and application configuration. The goal was to restore the existing data and verify that the application could use it through a complete workflow.",
    },
    {
      sectionTitle: "Restoring the database",
      sectionContent:
        "I installed PostgreSQL 18 to match the hosted database and created a custom-format backup with pg_dump. Before restoring it, I inspected the archive with pg_restore to check its contents. I then created a dedicated local database and application role and restored the backup without preserving the original ownership, using local ownership and credentials instead of reproducing the hosted environment’s roles.",
    },
    {
      sectionTitle: "Investigating an authentication failure",
      sectionContent:
        "A connection attempt failed with a peer authentication error. PostgreSQL was checking the operating-system user, while I expected to authenticate using database credentials. I investigated the connection method and the applicable pg_hba.conf rule, then configured the relevant rule to use scram-sha-256. I pointed the Go application at the local PostgreSQL instance over TCP at 127.0.0.1:5432, making the destination, database role, and authentication method explicit.",
    },
    {
      sectionTitle: "Verifying more than a page load",
      sectionContent:
        "I logged in with an account from the restored database, opened an existing failed webhook delivery, and triggered a retry. I then checked the local database and confirmed that its delivery attempt count had increased. This provided evidence that the application was using the restored data and executing its retry logic. The increased count confirmed another recorded attempt; it did not, by itself, prove successful delivery to the destination.",
    },
    {
      sectionTitle: "Current scope and limitations",
      sectionContent:
        "The Go application runs locally on Ubuntu against the restored PostgreSQL database. This exercise verified database restoration, application connectivity, login, and a delivery retry. Automatic application startup, service supervision, and recovery after a VM reboot remain to be verified. The setup is a local operational practice environment.",
    },
    {
      sectionTitle: "Next: service management and recovery",
      sectionContent:
        "The next step is to manage the application with systemd, using a dedicated service account and explicit configuration. I want to verify startup, inspect application output through the journal, and investigate what happens when the process stops or PostgreSQL becomes unavailable.",
    },
  ],
},
  {
    projectId: 4,
    projectTitle: "Quintle",
    projectSubtitle:
      "A browser-based word puzzle built with a remote team during Chingu Voyage 61.",
    techStack: ["Go", "React", "REST APIs", "Git", "GitHub"],
    liveLink: "",
    githubLink: "https://github.com/chingu-voyages/V61-tier3-team-35",
    heroImage: "",
    projectSections: [
      {
        sectionTitle: "The application",
        sectionContent:
          "Quintle gives players six attempts to guess a hidden five-letter word. It includes daily and practice game modes, with a React frontend communicating with a Go backend.",
      },
      {
        sectionTitle: "My contribution",
        sectionContent:
          "I contributed to backend endpoints for the daily and practice modes and worked on the API contracts connecting the frontend and backend. Request examples helped make endpoint behavior concrete during development.",
      },
      {
        sectionTitle: "Remote collaboration",
        sectionContent:
          "The project involved planning, technical discussions, and asynchronous coordination through GitHub. As the team became smaller, agreeing on scope and keeping the interface between components clear became particularly important.",
      },
    ],
  },
  {
    projectId: 5,
    projectTitle: "Open source: basis-cli",
    projectSubtitle:
      "An installer dependency check with a regression test that reproduces an environment where curl is unavailable.",
    techStack: ["Bash", "ShellCheck", "Regression testing"],
    liveLink: "",
    githubLink: "https://github.com/basis-network/basis-cli/pull/32",
    githubLinkText: "View merged pull request",
    heroImage: "",
    projectSections: [
      {
        sectionTitle: "The issue",
        sectionContent:
          "The installation script attempted to use curl without checking whether it was installed. A missing dependency therefore caused a failure at the download step instead of an early, actionable explanation.",
      },
      {
        sectionTitle: "The change",
        sectionContent:
          "I added a command availability check before downloading. When curl is missing, the installer exits with an error message explaining which dependency is required.",
      },
      {
        sectionTitle: "Reproducing the failure",
        sectionContent:
          "The regression test uses a controlled PATH containing the utilities needed by the script, while deliberately excluding curl. It checks that the installer exits with status 1, reports the missing dependency, and downloads nothing.",
      },
      {
        sectionTitle: "Validation and upstream merge",
        sectionContent:
          "The regression test failed against the original script and passed with my change. All 31 tests and ShellCheck passed. The contribution addressed issue #16 and was merged upstream through PR #32 on October 7, 2026, with attribution in the CHANGELOG.",
      },
      {
        sectionTitle: "Working in a new codebase",
        sectionContent:
          "This was practical Bash experience beyond my own projects: reading the existing script and test suite, following the project’s contribution rules, and placing the check so it preserved the existing checksum-tool validation and ran before any files were written."
      },
    ],
  },
];