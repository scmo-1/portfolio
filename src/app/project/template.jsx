"use client";
import React from "react";
import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <div className="relative">
      {/* Overlay som täcker hela skärmen */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          mass: 0.8,
        }}
        className="absolute inset-0 z-50 origin-top bg-stone-900"
      />

      {/* Innehåll */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageTransition;
