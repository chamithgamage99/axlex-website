"use client";
import React from 'react';
import Link from 'next/link'; // <-- ADDED THIS IMPORT
import {
  FaCar,
  FaCube,
  FaToolbox,
  FaArrowRight,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import { MdEngineering, MdOutlineDesignServices } from 'react-icons/md';

/* --- Main Page Component --- */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}

// ... (HeroSection and AboutSection are unchanged) ...

// 2. Hero Section
const HeroSection = () => (
  <section
    id="hero"
    className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    style={{
      background: 'radial-gradient(ellipse at bottom, #2d0300 0%, #000000 70%)'
    }}
  >
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/50 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-700/50 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter">
        Axle<span className="text-red-600">X</span>
      </h1>
      <p className="text-xl md:text-5xl text-gray-300 font-light mt-4">
        Engineering the <span className="text-red-600">Next Affordable Drive</span>
      </p>
      <p className="mt-2 text-3xl text-white-100 max-w-lg">
        The first Engineering driven Automotive Parts Manufacturing Service in Sri Lanka.       </p>
      <p className="mt-2 text-3xl text-red-500 max-w-lg">
        Why pay more for Nothing, Pay for the Quality
      </p>
      <a
        href="#about"
        className="mt-10 flex items-center gap-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white/5 hover:border-gray-500 transition-all"
      >
        Learn More
      </a>
    </div>
  </section>
);

// 3. About Section
const AboutSection = () => (
  <section id="about" className="py-24 bg-gray-950/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-64 md:h-96 rounded-lg p-6 flex items-center justify-center bg-gray-900 border border-gray-800 overflow-hidden">
        <span className="absolute top-0 left-0 w-full h-full bg-red-900/10 filter blur-3xl"></span>
        <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-t border-l border-red-500/20 animate-spin-slow"></span>
        <MdEngineering className="text-gray-700 text-9xl opacity-50" />
        <p className="absolute text-lg font-bold text-white/40 tracking-widest uppercase">Precision</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">
          Engineering the <span className="text-red-600">Next Affordable Drive</span>.
        </h2>
        <p className="text-2xl -gray-400 mb-4">
AxleX is driven by a passion for precision engineering and automotive design. We’re Sri Lanka’s first brand combining advanced 3D printing with expert craftsmanship to redefine what’s possible.
        </p>
        <p className="text-2xl -gray-400">
Our mission is to redefine automotive design by creating custom parts, bodykits, and restorations that deliver top performance and style.
        </p>
      </div>
    </div>
  </section>
);


// 4. Services Section (Updated)
const services = [
  {
    title: "3D Printing & Prototyping",
    description: "High-precision 3D printing for custom parts, prototypes, and one-off components.",
    icon: <FaCube size={32} />
  },
  {
    title: "Automotive Parts Design",
    description: "Custom component design and reverse engineering, tailored for perfect fit and performance.",
    icon: <MdOutlineDesignServices size={32} />,
    link: "/parts" // <-- ADDED THIS LINK PROPERTY
  },
  {
    title: "Custom Bodykit Manufacturing",
    description: "Please wait, these are still tinkering",
    icon: <FaCar size={32} />
  },
  {
    title: "Full Vehicle Restoration",
    description: "Please wait, these are still tinkering",
    icon: <FaToolbox size={32} />
  }
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-black/80 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Our <span className="text-red-600">Capabilities</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          // This is the card component.
          const card = (
            <div
              className="relative p-6 bg-gray-900 rounded-lg border border-gray-800 transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-900/20 transform hover:-translate-y-2 overflow-hidden group h-full" // Added h-full
            >
              <span className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <div className="text-red-500 mb-5 pt-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-xl -gray-400 text-sm">{service.description}</p>
            </div>
          );

          // If the service has a link, wrap the card in a Link tag.
          // Otherwise, just return the card.
          return service.link ? (
            <Link href={service.link} key={service.title} className="h-full">
              {card}
            </Link>
          ) : (
            <div key={service.title}>
              {card}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);


// 5. Gallery Section
const GallerySection = () => (
  <section id="gallery" className="py-24 bg-gray-950/80 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Our <span className="text-red-600">Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <GalleryImagePlaceholder title="Tinkering in Progress" icon={<FaCube size={64} />} id="001" />
        <GalleryImagePlaceholder title="Welding in Progress" icon={<FaCar size={64} />} id="002" />
        <GalleryImagePlaceholder title="Restoration in Progress" icon={<FaToolbox size={64} />} id="003" />
      </div>
    </div>
  </section>
);

const GalleryImagePlaceholder = ({ title, icon, id }: { title: string, icon: React.ReactNode, id: string }) => (
  <div className="relative aspect-square bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center text-gray-700 overflow-hidden group cursor-pointer">
    <span className="absolute z-10 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {title}
    </span>
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    {icon}
    <span className="absolute bottom-3 right-3 text-xs text-red-600/50 font-mono tracking-widest">/PROJECT-{id}</span>
  </div>
);

// 6. Contact Section
const ContactSection = () => (
  <section id="contact" className="py-24 bg-black/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Let's Build Something<span className="text-red-600"> Extraordinary</span>.
        </h2>
        <p className="text-xl -gray-400 mb-8">
Got a project in mind? From custom parts to complete vehicle transformations, our engineers are ready to bring your vision to life.
        </p>
        <div className="space-y-4">
          <a href="mailto:axlex@axlex.tech" className="flex items-center gap-4 text-gray-300 hover:text-red-500 transition-colors group">
            <FaEnvelope size={20} className="text-gray-600 group-hover:text-red-500 transition-colors" />
            <span>axlex@axlex.tech</span>
          </a>
          <a href="https://wa.me/94719686487" className="flex items-center gap-4 text-gray-300 hover:text-green-500 transition-colors group">
            <FaWhatsapp size={20} className="text-gray-600 group-hover:text-green-500 transition-colors" />
            <span>WhatsApp Orders & Inquiries</span>
          </a>
        </div>
      </div>
      <form
        action="https://formspree.io/f/mnnopyne"
        method="POST"
        className="space-y-6"
      >
        <div className="relative">
          <label htmlFor="name" className="absolute -top-2.5 left-4 px-1 bg-black text-xl text-gray-400">Name</label>
          <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all" />
        </div>
        <div className="relative">
          <label htmlFor="email" className="absolute -top-2.5 left-4 px-1 bg-black text-xl text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all" />
        </div>
        <div className="relative">
          <label htmlFor="message" className="absolute -top-2.5 left-4 px-1 bg-black text-xl text-gray-400">Project Details</label>
          <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all"></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-xl -white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
        >
          Send Inquiry <FaArrowRight />
        </button>
      </form>
    </div>
  </section>
);