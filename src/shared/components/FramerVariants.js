export const slideFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, // updated to 1 second
      ease: [0.42, 0, 0.58, 1],
      delay: 0.1, // consistent delay
    },
  },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, // updated to 1 second
      ease: [0.42, 0, 0.58, 1],
      delay: 0.1, // consistent delay
    },
  },
};

export const fadeUpItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.1,
    },
  },
};

export const containerStagger = {
  animate: {
    transition: {
      delayChildren: 0.1, // smooth stagger
      staggerChildren: 0.15, // evenly timed
    },
  },
};
