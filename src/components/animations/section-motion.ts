import type { Variants } from "motion/react";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionMotionProps = {
  variants: sectionVariants,
  initial: "hidden",
  // Trigger fade/slide once when section enters the viewport.
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
};

export { itemVariants, sectionMotionProps };
