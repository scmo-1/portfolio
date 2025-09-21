"use client";
import React from "react";
import ArrowIcon from "@/assets/ArrowIcon.svg";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";

function HeroSection() {
  return (
    <section className="flex h-screen min-h-screen w-full">
      <div className="mt-40 mb-30 flex w-full flex-col lg:flex-row lg:justify-between">
        <h1 className="mt-auto flex w-full flex-col pb-5 lg:w-3/4">
          <Reveal delay={0.2}>
            <span className="text-8xl md:text-[150px] lg:text-[200px]">
              SIMON
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <span className="text-8xl md:text-[150px] lg:text-[200px]">
              OLSSON
            </span>
          </Reveal>
          <Reveal delay={0.6}>
            <span className="text-outline 2xl: block text-7xl md:text-[150px] lg:text-[150px] xl:text-[180px]">
              Web
            </span>
          </Reveal>
          <Reveal delay={0.8}>
            <span className="text-outline 2xl: block pb-8 text-7xl md:text-[150px] lg:text-[150px] xl:text-[180px]">
              Developer.
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
          className="mt-auto self-end text-orange-600"
        >
          <ArrowIcon />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
