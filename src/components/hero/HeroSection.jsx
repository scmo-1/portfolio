import React from "react";
import ArrowIcon from "@/assets/ArrowIcon.svg";

function HeroSection() {
  return (
    <section className="flex min-h-screen w-full justify-between py-30">
      <div className="flex w-full justify-between">
        <h1 className="flex flex-col self-end">
          <span className="text-[200px]">SIMON</span>
          <span className="-mt-32 text-[200px]">OLSSON</span>
          <span className="text-outline -mt-15 text-9xl">Web Developer.</span>
        </h1>
        <div className="self-end">
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
