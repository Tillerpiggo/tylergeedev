import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ModeProvider } from "@/contexts/mode-context";
import "./globals.css";

// geistSans and geistMono are already configured font objects/variables
// No need to call them as functions here

export const metadata: Metadata = {
  title: "Tyler Gee - Software Engineer",
  description: "stuff I've made",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      {/* Use .variable to access the CSS variable name */}
      <body className="font-sans"> {/* Ensure a default font-family is set if needed */}
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
