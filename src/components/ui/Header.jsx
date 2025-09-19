import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import MenuIcon from "@/assets/MenuIcon.svg";
import AppLink from "./AppLink";
import { motion } from "motion/react";

function Header() {
  return (
    <header className="fixed z-99 flex w-full justify-between px-5 py-3 text-lg backdrop-blur-sm">
      <Link href="/">
        <Logo className="h-10 w-20 text-stone-900" />
      </Link>

      <ul className="hidden lg:flex lg:justify-center lg:gap-15 lg:text-xl">
        <li>
          <AppLink href="/#about">About</AppLink>
        </li>
        <li>
          <AppLink href="/#projects">Projects</AppLink>
        </li>
        <li>
          <AppLink href="#">Contact</AppLink>
        </li>
      </ul>

      <div className="hidden lg:flex lg:flex-col">
        <span className="text-xl">Say hello:</span>
        <AppLink href="mailto:hello@scmo.dev">hello@scmo.dev</AppLink>
      </div>
      <div className="lg:hidden">
        <MenuIcon className="h-10 w-10" />
      </div>
    </header>
  );
}

export default Header;
