import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AxleX - Redefining Automotive Craft", // Updated title
  description: "Sri Lanka's first engineering-driven 3D printing, bodykit, and restoration brand.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Add 'scroll-smooth' here
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}