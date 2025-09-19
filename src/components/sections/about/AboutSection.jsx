"use client";
import React from "react";
import Image from "next/image";
import Signature from "@/assets/signature.svg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="mt-30 scroll-mt-20 lg:mt-50"
    >
      <motion.h2 variants={item} className="text-7xl">
        ABOUT.
      </motion.h2>

      <div className="relative flex flex-col lg:flex-row lg:justify-between">
        <motion.article variants={item} className="flex flex-col lg:w-1/2">
          <p className="mt-5 text-2xl">
            I'm a web developer who enjoys turning ideas into responsive,
            accessible, and well-structured websites. My work combines modern
            frontend frameworks with backend know-how to deliver complete
            solutions.
          </p>
          <div className="mt-10">
            <span className="text-2xl font-bold">Get in touch</span>
            <ul className="flex flex-col gap-5 text-lg md:flex-row lg:flex-row">
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.article>
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center"
        >
          <div className="relative inline-block h-[350px] w-[300px] overflow-hidden rounded-4xl border-2 border-orange-600 lg:h-[450px] lg:w-[400px]">
            <Image src={"/images/pic.webp"} fill className="" alt="Portrait" />
          </div>
          <div className="">
            <Signature className="h-30 w-50 text-orange-600" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
