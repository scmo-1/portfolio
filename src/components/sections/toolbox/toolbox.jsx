import React from "react";
import Star from "@/assets/Star.svg";

function Toolbox() {
  return (
    <section className="mt-30 flex flex-col gap-10">
      <h2 className="text-7xl">TOOLBOX.</h2>
      <p className="text-2xl">
        A selection of the technologies and tools I use to build modern web
        solutions.
      </p>
      <div className="flex flex-col">
        <ul className="text-3xl font-bold text-neutral-600">
          <h3 className="text-4xl text-stone-900">frontend</h3>
          <li>React</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>Motion</li>
        </ul>
        <ul className="place-items-end text-3xl font-bold text-neutral-600">
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
        <div className="ms-auto mt-5 flex gap-3 self-end">
          <Star className="text-orange-600" />
          <Star className="text-orange-600" />
        </div>
      </div>
    </section>
  );
}

export default Toolbox;
