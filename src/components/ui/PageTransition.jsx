"use client";
import React from "react";
import { motion } from "motion/react";

function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-orange-600"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "bottom" }}
    />
  );
}

export default PageTransition;
