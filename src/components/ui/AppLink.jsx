"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

function AppLink({ href, children, color = "dark" }) {
  const router = useRouter();

  const isHashLink = href.startsWith("#");

  const handleClick = (e) => {
    if (isHashLink) {
      e.preventDefault();
      router.push("/" + href);
    }
  };

  const colors = {
    dark: "text-stone-900",
    light: "text-stone-300",
  };
  return (
    <a href={href} onClick={handleClick}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative w-fit items-center justify-center overflow-hidden text-xl whitespace-nowrap ${colors[color]}`}
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
            hovered: { y: 0 },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default AppLink;
