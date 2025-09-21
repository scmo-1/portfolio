import React from "react";
import Star from "@/assets/Star.svg";

function Toolbox({ content }) {
  return (
    <section className="mt-15 flex flex-col gap-10 lg:mt-1">
      <h2 className="text-7xl uppercase">{content.title}</h2>
      <p className="text-2xl lg:w-1/2">{content.intro}</p>
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <ul className="flex-1 text-3xl font-bold text-neutral-600">
            <h3 className="text-4xl text-stone-900">
              {content.frontend.title}
            </h3>
            {content.frontend.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <ul className="flex flex-1 flex-col items-end text-3xl font-bold text-neutral-600 lg:items-start">
            <h3 className="text-4xl text-stone-900">{content.backend.title}</h3>
            {content.backend.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <ul className="flex-1 text-3xl font-bold text-neutral-600">
            <h3 className="text-4xl text-stone-900">{content.tools.title}</h3>
            {content.tools.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="ms-auto mt-5 flex gap-3 self-end">
          <Star className="text-orange-600" />
          <Star className="text-orange-600" />
        </div>
      </div>
    </section>
  );
}

export default Toolbox;
