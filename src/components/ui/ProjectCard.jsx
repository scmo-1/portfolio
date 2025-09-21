"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

function ProjectCard({ title, href, image }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={`relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      passHref
    >
      <div className="relative overflow-hidden">
        <motion.h4 className="incline-flex relative mt-2 mb-2 w-full overflow-hidden font-bold whitespace-nowrap">
          <motion.div
            initial={{ y: 0 }}
            animate={hover ? { y: "100%" } : { y: 0 }}
            transition={{ ease: "easeOut" }}
            className="p-2 text-4xl"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={hover ? { y: 0 } : { y: "-100%" }}
            transition={{ ease: "easeOut" }}
            className="absolute inset-0 flex p-2 text-4xl"
          >
            {title}
          </motion.div>
        </motion.h4>

        <div className="relative overflow-hidden rounded-2xl bg-stone-900">
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
            initial={{ filter: "blur(0px)", scale: 1 }}
            animate={
              hover
                ? { filter: "blur(3px)", scale: 1.1 }
                : { filter: "blur(0px)" }
            }
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
            className="relative aspect-[8/5] w-full overflow-hidden"
          >
            <Image src={image} fill alt={title} className="object-cover" />
          </motion.div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
