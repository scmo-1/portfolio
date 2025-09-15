"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

function ProjectCard({ classname }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={"#"}
      className={`relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={hover ? { opacity: 1 } : { opacity: 0 }}
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-4 py-1 text-2xl text-white"
        >
          View more
        </motion.span>
        <motion.div
          initial={{ borderRadius: "0px", filter: "blur(0px)", scale: 1 }}
          animate={
            hover
              ? { borderRadius: "20px", filter: "blur(2px)", scale: 0.99 }
              : { borderRadius: "0px", filter: "blur(0px)", scale: 1 }
          }
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
      <div className="mt-2">
        <h4 className="text-4xl">Title</h4>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className="mt-2 w-fit rounded-full border-2 border-neutral-600 px-5 py-1"
      >
        <span>React</span> + <span>Next.js</span> + <span>TailwindCSS</span>
      </motion.div>
    </Link>
  );
}

export default ProjectCard;
