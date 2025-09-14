import React from "react";
import Image from "next/image";

function ProjectCard({ classname }) {
  return (
    <div className={`relative`}>
      <div className="relative aspect-[8/5] w-full">
        <Image
          src={"/images/placeholder.png"}
          fill
          alt="Project"
          className="object-cover"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-4xl">Title</h4>
      </div>
      <div className="mt-2 w-fit rounded-full border-2 border-neutral-600 px-5 py-1">
        <span>React</span> + <span>Next.js</span> + <span>TailwindCSS</span>
      </div>
    </div>
  );
}

export default ProjectCard;
