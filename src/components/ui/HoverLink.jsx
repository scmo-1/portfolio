"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

function HoverLink({ href, children }) {
  return (
    <Link href={"#"} className="">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="ineline-flex relative w-fit items-center justify-center overflow-hidden text-xl whitespace-nowrap text-stone-900"
      >
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-120%" },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: "110%" },
            hovered: { y: 0, color: "#ea580c" },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default HoverLink;
