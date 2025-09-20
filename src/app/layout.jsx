"use client";
import { Oswald, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";

const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const BricolageFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.scrollTo(0);
  }, [children]);

  return (
    <html
      lang="en"
      className={`${OswaldFont.variable} ${BricolageFont.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
