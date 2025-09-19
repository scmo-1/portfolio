"use client";
import React from "react";
import { motion } from "motion/react";
import Arrow from "@/assets/Arrow.svg";

const sizeClasses = {
  lg: "text-2xl",
  md: "text-lg",
  sm: "text-md",
};

const colors = {
  dark: "text-stone-900",
  light: "text-stone-300",
};

function ExternalLink({ children, href, size = "md", color = "dark" }) {
  return (
    <motion.div
      className={`flex w-max items-center gap-3 ${sizeClasses[size]}`}
      initial="initial"
      whileHover="hover"
    >
      <motion.a
        variants={{
          initial: { color: "inherit" },
          hover: {
            color: "#ea580c",
            scale: 0.98,
            transition: { ease: "easeInOut", duration: 0.3 },
          },
        }}
        href={href}
        className={`inline-block ${colors[color]}`}
      >
        {children}
      </motion.a>

      <div className="relative inline-block overflow-hidden">
        <motion.div
          variants={{
            initial: { y: 0, x: 0 },
            hover: {
              x: "120%",
              y: "-120%",
              transition: { ease: "easeInOut", duration: 0.3 },
            },
          }}
        >
          <Arrow className={`h-3 w-3 rotate-90 stroke-3 ${colors[color]}`} />
        </motion.div>
        <motion.div
          variants={{
            initial: {
              x: "-120%",
              y: "120%",
              transition: { ease: "easeInOut", duration: 0.3 },
            },
            hover: {
              y: 0,
              x: 0,
              transition: { ease: "easeInOut", duration: 0.3 },
            },
          }}
          className="absolute inset-0"
        >
          <Arrow className={`h-3 w-3 rotate-90 stroke-3 ${colors[color]}`} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExternalLink;
