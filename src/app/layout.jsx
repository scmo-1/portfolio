"use client";
import { Oswald, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

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
  }, []);

  return (
    <html
      lang="en"
      className={`${OswaldFont.variable} ${BricolageFont.variable}`}
    >
      <body>
        <Header />

        <motion.main>{children}</motion.main>

        <Footer />
      </body>
    </html>
  );
}
