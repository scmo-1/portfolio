import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio for webdeveloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
