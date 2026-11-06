export const ProjectDetailsData = [
{
  projectId: 1,
  projectTitle: "Webhook Relay",
  projectSubtitle:
    "A Go service that persists incoming webhooks, delivers them asynchronously, and makes failed deliveries available for retry and investigation.",
  techStack: [
    "Go",
    "PostgreSQL",
    "sqlc",
    "Goose",
    "JWT",
    "httptest",
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
      sectionTitle: "Why I built it",
      sectionContent:
        "I wanted to understand what happens after a service sends a webhook, especially when its destination is unavailable. Building a relay gave me a concrete way to work through persistence, background processing, retry decisions, and the difference between accepting a request and completing its delivery.",
    },
    {
      sectionTitle: "From incoming event to outgoing delivery",
      sectionContent:
        "The HTTP handler validates the endpoint, stores the event payload and headers in PostgreSQL, and creates a pending delivery record before returning HTTP 202 Accepted. A background processor polls the database for pending deliveries and retries whose scheduled time has arrived. It sends the stored payload to the destination and updates the delivery record with the outcome. Reception and delivery are separate, so the sender does not have to wait for the destination to respond.",
    },
    {
      sectionTitle: "Deciding when to retry",
      sectionContent:
        "A 2xx response marks a delivery as successful. Transport errors and selected HTTP responses, including 408, 429, 500, 502, 503, and 504, are eligible for retry. The delay grows exponentially, with a small random variation to spread retry times. The application currently allows five attempts in total. Non-retryable failures and deliveries that exhaust their attempts enter a dead-letter state, where an administrator can inspect and replay them through the normal delivery workflow.",
    },
    {
      sectionTitle: "Recovering work after a restart",
      sectionContent:
        "Pending delivery records, attempt counts, and retry times live in PostgreSQL rather than only in memory. When the application starts again, its processor queries those records and resumes eligible work. This also exposes an important failure window: a destination may accept a webhook before the relay records success. If the process stops in between, the same event can be sent again. The relay includes an event identifier in the outgoing request, but the receiving application must decide how to detect and handle duplicates.",
    },
    {
      sectionTitle: "Making delivery outcomes visible",
      sectionContent:
        "Authenticated dashboards let users inspect their endpoints, events, and delivery state. Delivery records retain the attempt count and latest outcome, including response information and retry timing. Application logs identify the delivery, attempted destination, attempt number, HTTP result, and whether the state update was persisted. This helps distinguish a failed outgoing request from a failure to record its outcome. The database currently stores the latest delivery state rather than a separate historical row for every attempt.",
    },
    {
      sectionTitle: "Testing the boundaries",
      sectionContent:
        "The endpoint-creation integration test starts PostgreSQL with Testcontainers and applies Goose migrations before exercising the HTTP handler. It covers successful creation and invalid input. Separate delivery-processor tests use httptest destinations and a mock database to check successful delivery, retry scheduling after HTTP 500, and dead-letter handling at the attempt limit. These tests cover useful parts of the workflow, but do not yet verify the complete receive-to-deliver path or recovery after a real process restart against PostgreSQL.",
    },
    {
      sectionTitle: "Current limitations",
      sectionContent:
        "The processor currently handles each fetched batch sequentially, so slow destinations can delay other deliveries. It does not claim rows for exclusive processing across multiple application instances. Event creation and delivery creation are also separate database operations, leaving a possible gap if the second operation fails. Retry handling does not yet honour Retry-After headers, and webhook signatures and rate limiting remain future work. These are concrete boundaries of the current implementation, rather than guarantees of production readiness.",
    },
    {
      sectionTitle: "What I’m developing next",
      sectionContent:
        "My next focus is structured logging that makes a delivery easier to follow across reception, processing, retries, and database updates. I also want stronger database-backed delivery tests, including interrupted processing and failed state updates. Running a second copy on Ubuntu gives me an environment for investigating process behaviour, PostgreSQL connectivity, and service recovery alongside the application code.",
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