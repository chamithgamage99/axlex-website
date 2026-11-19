import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import "./globals.css";

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-share-tech",
});

export const metadata: Metadata = {
  title: "AxleX - Engineering the Next Affordable Drive",
  description: "The first Engineering driven Automotive Parts Manufacturing & Diagnostics Service in Sri Lanka.",
};

// 1. NAVIGATION BAR (Updated with Diagnostics link + mobile quick access)
const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      <Link href="/#hero" className="flex items-center">
        <h1 className="text-3xl font-extrabold text-white">
          Axle<span className="text-red-600">X</span>
        </h1>
      </Link>

      {/* Mobile Quick Links */}
      <div className="flex md:hidden items-center gap-2">
        <Link
          href="/diagnostics"
          className="border border-red-600/60 bg-red-950/40 px-3 py-1.5 rounded-md text-sm text-white font-semibold hover:bg-red-600 transition-colors"
        >
          Diagnostics
        </Link>
        <Link
          href="/parts"
          className="bg-red-600 px-3 py-1.5 rounded-md text-sm text-white font-semibold hover:bg-red-700 transition-colors"
        >
          Parts
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="/#about" className="text-xl text-gray-300 hover:text-red-500 transition-colors">About</Link>
        <Link href="/#services" className="text-xl text-gray-300 hover:text-red-500 transition-colors">Services</Link>
        <Link href="/diagnostics" className="text-xl text-red-400 hover:text-red-300 transition-colors">Diagnostics</Link>
        <Link href="/#gallery" className="text-xl text-gray-300 hover:text-red-500 transition-colors">Gallery</Link>
        <Link href="/#contact" className="text-xl text-gray-300 hover:text-red-500 transition-colors">Get a Quote</Link>
        
        <Link
          href="/parts"
          className="bg-red-600 px-5 py-2 rounded-md text-xl text-white font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
        >
          Parts Catalogue
        </Link>
      </div>
    </div>
  </nav>
);

// 7. FOOTER
const Footer = () => (
  <footer className="relative z-10 py-12 bg-gray-950/60 backdrop-blur-md border-t border-gray-800/50">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-extrabold text-white">
        Axle<span className="text-red-600">X</span>
      </h3>
      <p className="text-gray-500 text-sm mt-2">
        Engineering the <span className="text-red-600">Next Affordable Drive</span>. First time in Sri Lanka.
      </p>
      <div className="flex gap-6 my-8 justify-center">
        {/*
        <a href="https://www.instagram.com/your_instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
        <a href="https://www.facebook.com/your_facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><FaFacebook size={24} /></a>
        <a href="https://www.youtube.com/your_youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><FaYoutube size={24} /></a>
        <a href="https://www.tiktok.com/@your_tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a>
        */}
        <a href="https://wa.me/94719686487" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors"><FaWhatsapp size={24} /></a>
      </div>
      <p className="text-xs text-gray-600">
        &copy; {new Date().getFullYear()} AxleX – All rights reserved.
      </p>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shareTech.variable} scroll-smooth`}>
      <body className="bg-black">
        <div className="relative min-h-screen w-full text-gray-300 font-sans overflow-x-hidden flex flex-col">
          {/* FIXED GLOBAL BACKGROUND */}
          <div
            className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at bottom, #2d0300 0%, #000000 70%)'
            }}
          >
            {/* Giant Background Logo Watermark */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="w-[90vw] max-w-5xl h-auto object-contain opacity-[0.07] mix-blend-screen select-none"
            />

            {/* Ambient Glow Blurs */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/50 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-700/50 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>

          <Navbar />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
