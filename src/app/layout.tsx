import type { Metadata } from "next";
import "./globals.css";
import {Urbanist} from "next/font/google"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
const urbanist = Urbanist({subsets:["latin"]});
export const metadata: Metadata = {
  title: "Portfolio Francisco Lopez Villa",
  description: "Portfolio Francisco Lopez Villa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className} 
      >
      <Header/>
      <Navbar/>
        {children}
      </body> 
    </html>
  );
}
