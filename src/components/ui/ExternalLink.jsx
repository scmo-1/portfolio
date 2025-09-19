"use client";
import React from "react";
import { motion } from "motion/react";
import Arrow from "@/assets/Arrow.svg";

function ExternalLink({ children, href }) {
  return (
    <motion.div
      className={`flex w-max cursor-pointer items-center gap-3 text-2xl`}
      initial="initial"
      whileHover="hover"
    >
      <motion.a
        variants={{
          initial: { color: "#1c1917" },
          hover: { color: "#ea580c", scale: 0.98 },
        }}
        href={href}
        className="inline-block"
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
              transition: { ease: "easeInOut" },
            },
          }}
          className=""
        >
          <Arrow className="h-3 w-3 rotate-90 stroke-3 text-stone-900" />
        </motion.div>
        <motion.div
          variants={{
            initial: {
              x: "-120%",
              y: "120%",
              transition: { ease: "easeInOut" },
            },
            hover: { y: 0, x: 0 },
          }}
          className="absolute inset-0"
        >
          <Arrow className="h-3 w-3 rotate-90 stroke-3 text-stone-900" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExternalLink;
