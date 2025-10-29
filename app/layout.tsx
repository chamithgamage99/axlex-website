import type { Metadata } from "next";
import { Share_Tech } from "next/font/google";
import Link from 'next/link';
import {
  FaCar,
  FaCube,
  FaToolbox,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaArrowRight,
  FaEnvelope
} from 'react-icons/fa';
import { MdEngineering, MdOutlineDesignServices } from 'react-icons/md';
import "./globals.css";

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-share-tech", // This creates the variable
});

export const metadata: Metadata = {
  title: "AxleX - Engineering the Next Affordable Drive",
  description: "The first Engineering driven Automotive Parts Manufacturing Service in Sri Lanka.",
};

// 1. NAVIGATION BAR (Updated)
const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      <Link href="/#hero" className="flex items-center">
        <h1 className="text-3xl font-extrabold text-white">
          Axle<span className="text-red-600">X</span>
        </h1>
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {/* Regular links */}
        <Link href="/#about" className="text-xl -gray-300 hover:text-red-500 transition-colors">About</Link>
        <Link href="/#services" className="text-xl -gray-300 hover:text-red-500 transition-colors">Services</Link>
        <Link href="/#gallery" className="text-xl -gray-300 hover:text-red-500 transition-colors">Gallery</Link>
        {/* "Get a Quote" is now a regular-style link */}
        <Link href="/#contact" className="text-xl -gray-300 hover:text-red-500 transition-colors">Get a Quote</Link>
        
        {/* "Parts Catalogue" is now the special, rightmost button */}
        <Link
          href="/parts"
          className="bg-red-600 px-5 py-2 rounded-md text-xl -white font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
        >
          Parts Catalogue
        </Link>
      </div>
    </div>
  </nav>
);

// 7. FOOTER (No changes)
const Footer = () => (
  <footer className="py-12 bg-gray-950 border-t border-gray-800/50">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-extrabold text-white">
        Axle<span className="text-red-600">X</span>
      </h3>
      <p className="text-xl -gray-500 text-sm mt-2">
        Engineering the <span className="text-red-600">Next Affordable Drive</span>. First time in Sri Lanka.
      </p>
      {/* Social Icons */}
      <div className="flex gap-6 my-8 justify-center">
        <a href="https://www.instagram.com/your_instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
        <a href="https://www.facebook.com/your_facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><FaFacebook size={24} /></a>
        <a href="https://www.youtube.com/your_youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><FaYoutube size={24} /></a>
        <a href="https://www.tiktok.com/@your_tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a>
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
      <body>
        <div className="min-h-screen w-full bg-black text-gray-300 font-sans overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}