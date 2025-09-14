import React from "react";
import ArrowIcon from "@/assets/ArrowIcon.svg";

function HeroSection() {
  return (
    <section className="flex h-screen w-full">
      <div className="lg: flex w-full flex-col lg:flex-row lg:justify-between">
        <h1 className="mt-auto flex flex-col pb-10">
          <span className="text-8xl md:text-9xl lg:text-[200px]">SIMON</span>
          <span className="text-8xl md:text-9xl lg:text-[200px]">OLSSON</span>
          <span className="text-outline text-5xl md:text-8xl lg:text-9xl">
            Web Developer.
          </span>
        </h1>
        <div className="mt-auto mb-5 self-end text-orange-600">
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
