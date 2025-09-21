"use client";
import { Oswald, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const BricolageFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
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
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

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
