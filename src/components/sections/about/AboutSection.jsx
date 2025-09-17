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
          <div className="mt-10">
            <span className="text-2xl font-bold">Get in touch</span>
            <ul className="flex flex-col gap-5 text-lg md:flex-row lg:flex-row">
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-xl transition duration-300 ease-in-out hover:text-orange-600"
                  href="#"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </article>
        <div className="mt-10 flex flex-col items-center">
          <div className="relative inline-block h-[350px] w-[300px] overflow-hidden rounded-4xl border-2 border-orange-600 lg:h-[450px] lg:w-[400px]">
            <Image src={"/images/pic.webp"} fill className="" alt="Portrait" />
          </div>
          <div className="">
            <Signature className="h-30 w-50 text-orange-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
