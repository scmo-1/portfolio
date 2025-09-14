import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import MenuIcon from "@/assets/MenuIcon.svg";

function Header() {
  return (
    <header className="fixed flex w-full justify-between px-3 py-8 text-lg">
      <Link href={"#"}>
        <Logo className="text-red-500" />
      </Link>
      <span className="hidden lg:block">
        Based in <br /> Gävle, Sweden
      </span>
      <div className="hidden lg:flex lg:flex-col">
        <span>Say hello:</span>
        <a href="#">hello@scmo.dev</a>
      </div>
      <div>
        <MenuIcon className="lg:hidden" />
      </div>
      <ul className="hidden lg:flex lg:flex-col lg:gap-2 lg:text-xl">
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
