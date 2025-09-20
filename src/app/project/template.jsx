"use client";
import React from "react";
import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <div className="relative">
      {/* Overlay som täcker hela skärmen */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: ["-100%", "0%", "100%"] }}
        exit={{ y: "100%" }}
        transition={{
          duration: 1.2,
          times: [0, 0.3, 1],
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-50 bg-stone-900"
      />

      {/* Innehåll */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageTransition;
