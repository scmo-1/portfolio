import React from "react";

function HeroSection() {
  return (
    <section className="flex h-[90%] w-full justify-between pb-10">
      <div className="flex w-full justify-between self-center">
        <h1 className="flex flex-col">
          <span className="text-[200px]">SIMON</span>
          <span className="-mt-30 text-[200px]">OLSSON</span>
          <span className="text-outline -mt-15 text-9xl">Web Developer.</span>
        </h1>
        <div className="self-end"> Button </div>
      </div>
    </section>
  );
}

export default HeroSection;
