"use client";
import React from 'react';
// Import all the icons we'll need
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

/* --- Main Page Component --- */
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-gray-300 font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

/* --- Re-usable Components for the Page --- */

// 1. Navigation Bar
const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-white">
        Axle<span className="text-red-600">X</span>
      </h1>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a>
        <a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
        <a href="#gallery" className="text-gray-300 hover:text-red-500 transition-colors">Gallery</a>
        <a 
          href="#contact" 
          className="bg-red-600 px-5 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
        >
          Get a Quote
        </a>
      </div>
    </div>
  </nav>
);

// 2. Hero Section
const HeroSection = () => (
  <section 
    id="hero" 
    className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    // Dark red gradient background
    style={{
      background: 'radial-gradient(ellipse at bottom, #2d0300 0%, #000000 70%)'
    }}
  >
    {/* Glowing accent lines */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/50 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-700/50 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </div>
    
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter">
        Axle<span className="text-red-600">X</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 font-light mt-4">
        Redefining Automotive Craft
      </p>
      <p className="mt-2 text-base text-gray-500 max-w-lg">
        The first engineering-driven 3D printing, bodykit, and restoration brand in Sri Lanka.
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
  <section id="about" className="py-24 bg-gray-950">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-64 md:h-96 rounded-lg p-6 flex items-center justify-center bg-gray-900 border border-gray-800 overflow-hidden">
        {/* Metallic/glowing accent lines */}
        <span className="absolute top-0 left-0 w-full h-full bg-red-900/10 filter blur-3xl"></span>
        <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-t border-l border-red-500/20 animate-spin-slow"></span>
        <MdEngineering className="text-gray-700 text-9xl opacity-50" />
        <p className="absolute text-lg font-bold text-white/40 tracking-widest uppercase">Precision</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">
          Engineering the <span className="text-red-600">Next Drive</span>.
        </h2>
        <p className="text-gray-400 mb-4">
          AxleX is born from a passion for precision engineering and automotive artistry. We are Sri Lanka's first brand dedicated to pushing the boundaries of what's possible, merging state-of-the-art 3D printing technology with meticulous craftsmanship.
        </p>
        <p className="text-gray-400">
          Our mission is to redefine automotive craft, providing bespoke parts, custom bodykits, and full-scale restoration projects that meet the highest standards of performance and aesthetics.
        </p>
      </div>
    </div>
  </section>
);

// 4. Services Section
const services = [
  { 
    title: "3D Printing & Prototyping", 
    description: "High-precision 3D printing for custom parts, prototypes, and one-off components.", 
    icon: <FaCube size={32} /> 
  },
  { 
    title: "Automotive Parts Design", 
    description: "Bespoke component design and reverse engineering, optimized for performance and fit.", 
    icon: <MdOutlineDesignServices size={32} /> 
  },
  { 
    title: "Custom Bodykit Manufacturing", 
    description: "From concept to reality. We design and manufacture unique bodykits that redefine your vehicle's look.", 
    icon: <FaCar size={32} /> 
  },
  { 
    title: "Full Vehicle Restoration", 
    description: "Meticulous, engineering-driven restoration projects to bring classic and modern vehicles back to life.", 
    icon: <FaToolbox size={32} /> 
  }
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Our <span className="text-red-600">Capabilities</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.title} 
            // Card with metallic border and hover effect
            className="relative p-6 bg-gray-900 rounded-lg border border-gray-800 transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-900/20 transform hover:-translate-y-2 overflow-hidden group"
          >
            {/* Glowing accent line on hover (like car lighting) */}
            <span className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <div className="text-red-500 mb-5 pt-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 5. Gallery Section
const GallerySection = () => (
  <section id="gallery" className="py-24 bg-gray-950">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Our <span className="text-red-600">Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* IMPORTANT: These are placeholders. 
          Replace <div> with <Image> component and your 'src' path.
        */}
        <GalleryImagePlaceholder title="3D Printed Manifold" icon={<FaCube size={64} />} id="001" />
        <GalleryImagePlaceholder title="Custom Widebody Kit" icon={<FaCar size={64} />} id="002" />
        <GalleryImagePlaceholder title="Classic Restoration" icon={<FaToolbox size={64} />} id="003" />
      </div>
    </div>
  </section>
);

// Placeholder component for the gallery
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
  <section id="contact" className="py-24 bg-black">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Let's <span className="text-red-600">Build</span> Something.
        </h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind? From a single 3D-printed part to a full-scale restoration, our engineers are ready to discuss your project.
        </p>
        <div className="space-y-4">
          <a href="mailto:axlex@axlex.tech" className="flex items-center gap-4 text-gray-300 hover:text-red-500 transition-colors group">
            <FaEnvelope size={20} className="text-gray-600 group-hover:text-red-500 transition-colors" />
            <span>axlex@axlex.tech</span>
          </a>
          <a href="https://wa.me/YOUR_NUMBER" className="flex items-center gap-4 text-gray-300 hover:text-green-500 transition-colors group">
            <FaWhatsapp size={20} className="text-gray-600 group-hover:text-green-500 transition-colors" />
            <span>WhatsApp Orders & Inquiries</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
<form 
  action="https://formspree.io/f/mnnopyne"  // <-- PASTE YOUR URL HERE
  method="POST"                                // <-- ADD THIS LINE
  className="space-y-6"
>
        <div className="relative">
          <label htmlFor="name" className="absolute -top-2.5 left-4 px-1 bg-black text-xs text-gray-400">Full Name</label>
          <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all" />
        </div>
        <div className="relative">
          <label htmlFor="email" className="absolute -top-2.5 left-4 px-1 bg-black text-xs text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all" />
        </div>
        <div className="relative">
          <label htmlFor="message" className="absolute -top-2.5 left-4 px-1 bg-black text-xs text-gray-400">Project Details</label>
          <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-all"></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
        >
          Send Inquiry <FaArrowRight />
        </button>
      </form>
    </div>
  </section>
);

// 7. Footer
const Footer = () => (
  <footer className="py-12 bg-gray-950 border-t border-gray-800/50">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-extrabold text-white">
        Axle<span className="text-red-600">X</span>
      </h3>
      <p className="text-gray-500 text-sm mt-2">
        Engineering the Next Drive. First in Sri Lanka.
      </p>
      
      {/* Social Icons */}
      <div className="flex gap-6 my-8 justify-center">
        <a href="https://www.instagram.com/your_instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
        <a href="https://www.facebook.com/your_facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><FaFacebook size={24} /></a>
        <a href="https://www.youtube.com/your_youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><FaYoutube size={24} /></a>
        <a href="https://www.tiktok.com/@your_tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a>
        <a href="https://wa.me/YOUR_NUMBER" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors"><FaWhatsapp size={24} /></a>
      </div>

      <p className="text-xs text-gray-600">
        &copy; {new Date().getFullYear()} AxleX – All rights reserved.
      </p>
    </div>
  </footer>
);