"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

function ProjectCard({ content }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={"#"}
      className={`relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      passHref
    >
      <div className="relative overflow-hidden">
        <motion.span
          whileHover={{
            scale: 0.95,
            background: "#f97316",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            hover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-4 py-1 text-2xl text-white"
        >
          View more
        </motion.span>
        <motion.div
          initial={{ filter: "blur(0px)" }}
          animate={hover ? { filter: "blur(2px)" } : { filter: "blur(0px)" }}
          transition={{
            type: "linear",
          }}
          className="relative aspect-[8/5] w-full overflow-hidden"
        >
          <Image
            src={"/images/placeholder.png"}
            fill
            alt="Project"
            className="object-cover"
          />
        </motion.div>
      </div>
      <motion.h4 className="incline-flex relative mt-2 w-fit items-center justify-center overflow-hidden font-bold whitespace-nowrap">
        <motion.div
          initial={{ y: 0 }}
          animate={hover ? { y: "100%" } : { y: 0 }}
          className="text-5xl"
        >
          Title
        </motion.div>
        <motion.div
          initial={{ y: "-100%" }}
          animate={hover ? { y: 0 } : { y: "-100%" }}
          className="absolute inset-0 flex items-center justify-center text-5xl"
        >
          Title
        </motion.div>
      </motion.h4>
    </Link>
  );
}

export default ProjectCard;
