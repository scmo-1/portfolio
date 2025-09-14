import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="mt-50">
      <h2 className="text-9xl"> ABOUT.</h2>
      <div className="flex justify-between">
        <article className="w-1/2">
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
      <div className="mt-20 flex flex-col gap-5">
        <h2 className="text-9xl">TOOLBOX.</h2>
        <p className="w-1/2 text-3xl">
          A selection of the technologies and tools I use to build modern web
          solutions.
        </p>
        <div className="flex gap-30">
          <ul className="text-3xl font-bold text-neutral-600">
            <h3 className="text-4xl text-stone-900">frontend</h3>
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Motion</li>
          </ul>
          <ul className="text-3xl font-bold text-neutral-600">
            <h3 className="text-4xl text-stone-900">backend</h3>
            <li>Node.js</li>
            <li>AWS</li>
            <li>MongoDB</li>
          </ul>
          <ul className="text-3xl font-bold text-neutral-600">
            <h3 className="text-4xl text-stone-900">tools</h3>
            <li>Figma</li>
            <li>Git</li>
            <li>NPM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
