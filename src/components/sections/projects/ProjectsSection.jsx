import React from "react";
import ProjectCard from "../../ui/ProjectCard";

function ProjectsSection() {
  return (
    <section className="mt-10 mb-20 flex flex-col gap-10 lg:mt-30">
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
    </section>
  );
}

export default ProjectsSection;
