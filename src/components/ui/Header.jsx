import React from "react";

function Header() {
  return (
    <header className="flex w-full justify-between px-10 py-5">
      <div>SCMO</div>
      <span>
        Based in <br /> Gävle, Sweden
      </span>
      <div className="flex flex-col">
        <span>Say hello:</span>
        <a href="#">hello@scmo.dev</a>
      </div>
      <ul className="flex flex-col gap-2 text-lg">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
