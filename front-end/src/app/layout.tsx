import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Book Oracle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.className} bg-[#EAEDF0] antialiased dark:bg-[#0F1215]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
