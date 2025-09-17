"use client";
import React from "react";
import Logo from "@/assets/Logo.svg";

function Footer() {
  return (
    <footer className="sticky bottom-0 -z-1 flex w-full flex-col bg-stone-900 px-5 pt-10 text-white">
      <div className="flex w-full max-w-[1024px] flex-col self-center">
        <h5 className="text-lg lg:w-1/2 lg:text-2xl">
          I'm always happy to connect and hear from people. Feel free to reach
          out for any questions or just to say hello.
        </h5>
        <div className="my-5 flex flex-col justify-between lg:flex-row">
          <ul className="flex flex-col gap-5">
            <li>
              <a href="">hello@scmo.dev</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>

          <ul className="mt-5 flex flex-col gap-5 border-t-1 border-t-stone-600 pt-5 lg:border-t-0 lg:pt-0">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <Logo className="text-stone-950" />
        <span className="mt-5 self-center text-sm text-stone-600">
          Copyright © 2025
        </span>
        <span className="self-center text-sm text-stone-600">
          Designed & built by <a href="">me</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
