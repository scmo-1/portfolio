"use client";
import React from "react";
import Logo from "@/assets/Logo.svg";
import ExternalLink from "./ExternalLink";
import AppLink from "./AppLink";

function Footer() {
  return (
    <footer className="fixed bottom-0 -z-1 flex w-full flex-col bg-stone-900 px-5 pt-80 text-white">
      <div className="flex w-full max-w-[1024px] flex-col self-center">
        <h5 className="text-lg lg:w-1/2 lg:text-2xl">
          I'm always happy to connect and hear from people. Feel free to reach
          out for any questions or just to say hello.
        </h5>
        <div className="my-10 flex flex-col justify-between lg:flex-row">
          <ul className="flex flex-col gap-5">
            <li>
              <ExternalLink href={"mailto:hello@scmo.dev"} color="light">
                hello@scmo.dev
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={"https://github.com/scmo-1 "} color="light">
                Github
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={"https://www.linkedin.com/in/simon-olsson-3a7208173/"}
                color="light"
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={
                  "https://www.instagram.com/sxolsson/?utm_source=ig_web_button_share_sheet"
                }
                color="light"
              >
                Instagram
              </ExternalLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-5 border-t-1 border-t-stone-600 pt-5 lg:border-t-0 lg:pt-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
          </ul>
        </div>
        <Logo className="mt-5 text-stone-950" />
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
