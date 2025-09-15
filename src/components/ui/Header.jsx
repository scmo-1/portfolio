import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import MenuIcon from "@/assets/MenuIcon.svg";
import HoverLink from "./HoverLink";

function Header() {
  return (
    <header className="fixed z-99 flex w-full justify-between px-5 py-3 text-lg backdrop-blur-sm">
      <Link href={"#"}>
        <Logo className="text-stone-900 mix-blend-difference" />
      </Link>
      <ul className="hidden lg:flex lg:justify-center lg:gap-15 lg:text-xl">
        <li>
          <HoverLink href="#">About</HoverLink>
        </li>
        <li>
          <HoverLink href="#">Projects</HoverLink>
        </li>
        <li>
          <HoverLink href="#">Contact</HoverLink>
        </li>
      </ul>

      <div className="hidden lg:flex lg:flex-col">
        <span className="text-xl">Say hello:</span>
        <HoverLink href="#">hello@scmo.dev</HoverLink>
      </div>
      <div className="lg:hidden">
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
