import React from "react";
import Image from "next/image";
import Signature from "@/assets/signature.svg";
import Star from "@/assets/Star.svg";

function AboutSection() {
  return (
    <section className="mt-30 lg:mt-50">
      <h2 className="text-7xl"> ABOUT.</h2>

      <div className="relative flex flex-col lg:flex-row lg:justify-between">
        <article className="flex flex-col lg:w-1/2">
          <p className="mt-5 text-2xl">
            I'm a web developer who enjoys turning ideas into responsive,
            accessible, and well-structured websites. My work combines modern
            frontend frameworks with backend know-how to deliver complete
            solutions.
          </p>
          <ul className="mt-10 flex flex-col gap-5 text-lg font-bold lg:flex-row">
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </article>
        <div className="relative mt-10 h-[280px] w-[250px] lg:right-20 lg:h-[400] lg:w-[350]">
          <Image
            src={"/images/portrait.png"}
            fill
            className="z-5"
            alt="Portrait"
          />
          <span className="lg:absolute lg:top-5 lg:left-20 lg:h-100 lg:w-80 lg:border-2 lg:border-orange-600"></span>
        </div>
        <div className="absolute bottom-1 left-40 z-10 lg:left-0">
          <Signature className="h-30 w-50 text-orange-600" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
