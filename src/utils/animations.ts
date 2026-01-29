import { Variants } from "framer-motion";

export const luxuryEasings = {
  default: [0.25, 0.46, 0.45, 0.94] as const,
  slow: [0.16, 1, 0.3, 1] as const,
  elastic: [0.4, 0, 0.2, 1] as const, // Spring-like for magnetic
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.0, 
      ease: luxuryEasings.default 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 1.4, 
      ease: luxuryEasings.slow 
    } 
  },
};

// --- NEW 3D / CRAZY ANIMATIONS ---

export const reveal3D: Variants = {
  hidden: { rotateX: 90, opacity: 0, y: 50 },
  visible: { 
    rotateX: 0, 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: luxuryEasings.slow 
    } 
  },
};

export const letterStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const letterReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEasings.elastic }
  },
};
