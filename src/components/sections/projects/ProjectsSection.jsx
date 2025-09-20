"use client";
import React from "react";
import ProjectCard from "../../ui/ProjectCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function ProjectsSection({ content }) {
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
      className="mb-50 flex min-h-screen scroll-mt-20 flex-col gap-10 lg:mt-60"
    >
      <h2 className="text-7xl uppercase">{content.title}</h2>
      <div className="flex w-full flex-col justify-between">
        <p className="text-2xl lg:w-1/2">{content.intro}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {content.items.map((item, idx) => (
          <ProjectCard
            key={idx}
            title={item.title}
            href={item.href}
            image={item.image}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
