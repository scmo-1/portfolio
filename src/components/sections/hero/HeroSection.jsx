import React from "react";
import ArrowIcon from "@/assets/ArrowIcon.svg";

function HeroSection() {
  return (
    <section className="h-screen w-full pt-60">
      <div className="flex h-full w-full flex-col">
        <h1 className="flex flex-col">
          <span className="text-8xl">SIMON</span>
          <span className="text-8xl">OLSSON</span>
          <span className="text-outline text-6xl">Web Developer.</span>
        </h1>
        <div className="mt-auto mb-5 self-end text-orange-600">
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

// <section className="flex min-h-screen w-full justify-between py-30">
//   <div className="flex w-full justify-between">
//     <h1 className="flex flex-col self-end">
//       <span className="text-[200px]">SIMON</span>
//       <span className="-mt-32 text-[200px]">OLSSON</span>
//       <span className="text-outline -mt-15 text-9xl">Web Developer.</span>
//     </h1>
//     <div className="self-end text-orange-600">
//       <ArrowIcon />
//     </div>
//   </div>
// </section>
