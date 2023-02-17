"use client";
import "./globals.css";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-quickSand",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${quicksand.className}`}>{children}</body>
    </html>
  );
}
