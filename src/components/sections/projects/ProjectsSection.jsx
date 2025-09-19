"use client";
import React from "react";
import ProjectCard from "../../ui/ProjectCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const animate = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={animate}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{
        duration: 1.2,
      }}
      className="mt-10 mb-20 flex scroll-mt-20 flex-col gap-10 lg:mt-60"
    >
      <h2 className="text-7xl">PROJECTS.</h2>
      <div className="flex w-full flex-col justify-between">
        <p className="text-2xl lg:w-1/2">
          A few examples of projects I've built during my studies and in my free
          time.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
