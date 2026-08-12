import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { StarField } from "@/components/ui/StarField";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spurti | Software Engineer",
  description:
    "Building software systems—from distributed backends to intelligent applications.",
  openGraph: {
    title: "Spurti | Software Engineer",
    description:
      "Building software systems—from distributed backends to intelligent applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StarField />
        <Navbar />
        <main
          className="relative flex-1 w-full max-w-[900px] mx-auto px-6 sm:px-10 pt-32 md:pt-48 pb-32"
          style={{ zIndex: 2 }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
