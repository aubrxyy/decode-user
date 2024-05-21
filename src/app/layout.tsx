import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./css/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ScrollToTopBtn from "./_components/ScrollToTopBtn";
import Template from "./template";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warung Sate Beber",
  description: "Sate Legendaris Sejak 2015, menyajikan sate ayam dan kambing bakar bumbu rempah khas. Ada juga tongseng ayam, tongseng kambing, dan sop iga sapi. Suasananya nyaman dan ramah, cocok untuk makan bersama keluarga, teman, atau kolega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
          <Header />
          <Template>{children}</Template>
          <Footer />
        <ScrollToTopBtn />
      </body>
    </html>
  );
}
