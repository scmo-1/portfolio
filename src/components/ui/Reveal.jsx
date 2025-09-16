"use client";
import { motion } from "motion/react";

const revealVariants = {
  hidden: { y: "100%" },
  show: (customDelay = 0) => ({
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      delay: customDelay,
    },
  }),
};

function Reveal({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={revealVariants}
        custom={delay}
        initial="hidden"
        animate="show"
        transition={{ ...revealVariants.show.transition, delay }}
        className="inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
