import { Oswald, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
