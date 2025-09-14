import React from "react";
import ProjectCard from "../ui/ProjectCard";

function ProjectsSection() {
  return (
    <section className="mt-40 mb-20 flex flex-col gap-10">
      <h2 className="text-9xl">PROJECTS.</h2>
      <div className="flex w-full justify-between">
        <p className="w-1/2 text-3xl">
          A few examples of projects I've built during my studies and in my free
          time.
        </p>
        <a href="#" className="self-end">
          Explore More
        </a>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default ProjectsSection;
