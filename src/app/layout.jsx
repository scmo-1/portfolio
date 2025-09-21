"use client";
import { Oswald, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Web developer portfolio",
  description: "Portfolio for Simon Olsson - web developer",
  keywords: [
    "web",
    "developer",
    "frontend",
    "fullstack",
    "React",
    "Next.js",
    "portfolio",
    "JavaScript",
    "CSS",
    "HTML",
  ],

  authors: [{ name: "Simon Olsson", url: "https://scmo.dev" }],
  creator: "Simon Olsson",
  publisher: "Simon Olsson",
  applicationName: "Simon Olsson Portfolio",
  category: "Portfolio / Web Development",
  language: "en-US",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  metadataBase: new URL("https://scmo.dev"),
};

const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const BricolageFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [pathname]);

  return (
    <html
      lang="en"
      className={`${OswaldFont.variable} ${BricolageFont.variable}`}
    >
      <body>
        <Header />
        <main key={pathname}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
