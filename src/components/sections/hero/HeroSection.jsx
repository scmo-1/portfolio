"use client";
import React from "react";
import ArrowIcon from "@/assets/ArrowIcon.svg";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";

function HeroSection() {
  return (
    <section className="flex h-screen w-full">
      <div className="w-full flex-col lg:flex lg:flex-row lg:justify-between">
        <h1 className="mt-auto flex flex-col pb-10">
          <Reveal delay={0.3}>
            <span className="block text-8xl md:text-9xl lg:text-[200px]">
              SIMON
            </span>
          </Reveal>
          <Reveal delay={0.5}>
            <span className="block text-8xl md:text-9xl lg:text-[200px]">
              OLSSON
            </span>
          </Reveal>
          <Reveal delay={0.7}>
            <span className="text-outline block py-5 text-5xl md:text-8xl lg:text-9xl">
              Web Developer.
            </span>
          </Reveal>
        </h1>
        <motion.div
          initial={{
            opacity: 0,
            rotate: 100,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-auto mb-5 self-end text-orange-600"
        >
          <ArrowIcon />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
