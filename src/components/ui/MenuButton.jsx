import React, { useState } from "react";
import { motion } from "motion/react";

function MenuButton({ setOpen, open }) {
  const offset = 6;

  return (
    <motion.button
      onClick={() => setOpen(!open)}
      className="relative z-15 h-[40px] w-[40px] overflow-hidden"
    >
      <motion.div
        initial={{ rotateZ: 0, y: -offset }}
        animate={open ? { rotateZ: 45, y: 0 } : { rotateZ: 0, y: -offset }}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-5 border-stone-900"
      />

      <motion.div
        initial={{ rotateZ: 0, y: offset }}
        animate={open ? { rotateZ: -45, y: 0 } : { rotateZ: 0, y: offset }}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-5 border-stone-900"
      />
    </motion.button>
  );
}

export default MenuButton;
