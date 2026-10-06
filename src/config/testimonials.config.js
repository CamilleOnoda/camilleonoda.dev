export const TestimonialHeading = {
  heading: {
    title: "Projects & contributions",
    homeTitle: "Projects & contributions",
  },
};

export const TestimonialsData = [
  {
    name: "Webhook Relay",
    role: "Go · PostgreSQL · reliable delivery",
    text: "A backend service that stores incoming webhooks, delivers them through background workers, retries failures, and records each attempt. Built with authenticated APIs and integration tests against PostgreSQL.",
    image: "",
    link: "https://github.com/CamilleOnoda/webhook-relay",
    linkText: "Explore the project",
  },
  {
    name: "HTTP server from scratch",
    role: "Python · TCP · HTTP/1.1",
    text: "An HTTP server built directly on Python sockets to work through request parsing, routing, persistent connections, compression, and concurrent requests.",
    image: "",
    link: "https://github.com/CamilleOnoda/http-server-python",
    linkText: "Explore the code",
  },
  {
    name: "Open source contribution",
    role: "Bash · testing · basis-cli",
    text: "A fix for an installer that tried to use curl without checking whether it was available, with a regression test that runs under a controlled PATH.",
    image: "",
    link: "https://github.com/basis-network/basis-cli/pulls",
    linkText: "View the contribution",
  },
];