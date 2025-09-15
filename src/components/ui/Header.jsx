import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import MenuIcon from "@/assets/MenuIcon.svg";

function Header() {
  return (
    <header className="fixed z-99 flex w-full justify-between px-5 py-3 text-lg backdrop-blur-sm">
      <Link href={"#"}>
        <Logo className="text-stone-900 mix-blend-difference" />
      </Link>
      <ul className="hidden lg:flex lg:justify-center lg:gap-8 lg:text-xl">
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

      <div className="hidden lg:flex lg:flex-col">
        <span>Say hello:</span>
        <a href="#">hello@scmo.dev</a>
      </div>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
