import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <-- This line is the most important part

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AxleX",
  description: "Automotive Solutions - First Ever in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{ children:React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}