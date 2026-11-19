const HeroSection = () => (
  <section
    id="hero"
    className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    style={{
      background: 'radial-gradient(ellipse at bottom, #2d0300 0%, #000000 70%)'
    }}
  >
    {/* Background Layer: Existing blurs + Merged Logo Watermark */}
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      {/* Merged Background Logo */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="w-[90vw] max-w-5xl h-auto object-contain opacity-[0.07] mix-blend-screen select-none"
      />

      {/* Original Ambient Blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/50 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-700/50 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </div>

    {/* Foreground Content */}
    <div className="relative z-10 flex flex-col items-center">
      <img
        src="/logo.png"
        alt="AxleX Logo"
        className="w-72 md:w-[450px] h-auto object-contain mb-2 animate-fade-in"
      />

      <p className="text-xl md:text-5xl text-gray-300 font-light mt-4">
        Hard-to-Find Automotive Parts for <span className="text-red-600">Classic & European Cars</span>
      </p>

      <p className="mt-2 text-3xl text-white-100 max-w-lg">
        3D Printed & Custom Fabricated Parts. Fast Delivery in Sri Lanka.
      </p>

      <p className="mt-2 text-3xl text-red-500 max-w-lg">
        Specialized in Honda, Mitsubishi, Nissan, Toyota classics and Mercedes C-Class servicing.
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
