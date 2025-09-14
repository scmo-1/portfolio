import React from "react";

function HeroSection() {
  return (
    <section className="mx-auto flex h-[90%] w-full max-w-screen-2xl justify-between self-end px-10 pb-10">
      <div className="flex w-full justify-between self-end">
        <h1 className="flex flex-col">
          <span className="text-[200px] font-bold">SIMON</span>
          <span className="-mt-30 text-[200px] font-bold">OLSSON</span>
          <span className="text-outline -mt-15 text-9xl font-bold">
            Web Developer.
          </span>
        </h1>
        <div className="self-end"> Button </div>
      </div>
    </section>
  );
}

export default HeroSection;
