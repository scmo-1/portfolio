import React from "react";
import Image from "next/image";
import Signature from "@/assets/signature.svg";
import Star from "@/assets/Star.svg";

function AboutSection() {
  return (
    <section className="mt-30">
      <h2 className="text-9xl"> ABOUT.</h2>
      <div className="mt-10 flex justify-between">
        <article className="flex w-1/2 flex-col">
          <p className="text-3xl">
            I'm a web developer who enjoys turning ideas into responsive,
            accessible, and well-structured websites. My work combines modern
            frontend frameworks with backend know-how to deliver complete
            solutions.
          </p>
          <ul className="flex gap-10">
            <li>
              <a href="#">LN</a>
            </li>
            <li>
              <a href="#">GH</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
          </ul>
          <Signature className="mt-auto h-30 w-50 text-orange-600" />
        </article>
        <div className="relative">
          <Image
            src={"/images/portrait.png"}
            height={350}
            width={350}
            className="z-5"
            alt="Portrait"
          />
          <span className="absolute top-1 z-1 h-50 w-50 border-2 border-orange-600"></span>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default AboutSection;
