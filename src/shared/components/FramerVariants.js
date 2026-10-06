// Slide in from left
export const slideFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1], // smooth easing
      delay: 0.1, // start delay
    },
  },
};

// Slide in from right
export const slideFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.1,
    },
  },
};

// Fade up effect
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

// Container variant to stagger child animations
export const containerStagger = {
  animate: {
    transition: {
      delayChildren: 0.1, // start stagger after 0.1s
      staggerChildren: 0.15, // each child delayed by 0.15s
    },
  },
};
