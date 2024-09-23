import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Francisco Lopez Villa",
  description: "Portfolio Francisco Lopez Villa",
  openGraph: {
    title: "Portfolio Francisco Lopez Villa",
    description: "Mirá mis proyectos y experiencia como desarrollador web.",
    url: "https://franciscolopezvilla.netlify.app/",
    type: "website",
    images: [
      {
        url: "/portada.jpeg",
        width: 1200,
        height: 630,
        alt: "Imagen de portada del portfolio de Francisco Lopez Villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Francisco Lopez Villa",
    description: "Mirá mis proyectos y experiencia como desarrollador web.",
    images: ["/portada.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
