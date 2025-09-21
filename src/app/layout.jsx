import { Oswald, Bricolage_Grotesque } from "next/font/google";
import ScrollHandler from "@/components/ScrollHandler";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

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
  return (
    <html
      lang="en"
      className={`${OswaldFont.variable} ${BricolageFont.variable}`}
    >
      <body>
        <ScrollHandler />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
