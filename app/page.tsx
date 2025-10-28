import React from 'react';

// A speedometer icon, fitting for "coming soon" and "automotive"
const SpeedometerIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white mb-6"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" />
    <path d="M12 12l4-4" />
    <path d="M16 12H8" />
  </svg>
);

// Social media icons with hover effects
const SocialIcons = () => (
  <div className="flex gap-6 mt-10">
    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-red-500 transition-colors">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
      </svg>
    </a>
    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-red-500 transition-colors">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04-.78-.84-1.9-1.36-3.14-1.36-2.38 0-4.3 1.92-4.3 4.3 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.02 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z" />
      </svg>
    </a>
    <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-500 transition-colors">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.76C18.26 5 12 5 12 5s-6.26 0-7.82.43c-.86.23-1.52.9-1.76 1.76C2 8.75 2 12 2 12s0 3.25.43 4.81c.23.86.9 1.52 1.76 1.76C5.74 19 12 19 12 19s6.26 0 7.82-.43c.86-.23 1.52-.9 1.76-1.76C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z" />
      </svg>
    </a>
  </div>
);

export default function Home() {
  return (
    <div
      // New background: A sleek dark gradient
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
      style={{
        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
      }}
    >
      <main
        className="flex flex-col items-center w-full text-center"
        style={{
          maxWidth: "600px",
          zIndex: 10,
        }}
      >
        {/* Replaced Rocket with Speedometer */}
        <SpeedometerIcon />

        <h1
          // Bigger, bolder text
          className="font-extrabold text-5xl md:text-7xl mb-4 text-white drop-shadow-lg tracking-tight"
        >
          We are coming soon
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-300 font-medium max-w-lg">
          We are almost there! Get notified when the website goes live.
        </p>

        <form
          className="w-full max-w-lg flex flex-col md:flex-row gap-3"
          // Don't forget to add your Formspree URL here
          // action="https://formspree.io/f/YOUR_ID" method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            // Styled input: dark, with a focus ring
            className="flex-1 w-full px-5 py-3 rounded-lg text-white bg-gray-800 border border-gray-700 placeholder-gray-500 shadow-md outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            // Styled button: bold red (automotive feel)
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-colors"
          >
            Notify Me!
          </button>
        </form>

        <SocialIcons />
      </main>

      <footer className="w-full text-center text-xs text-gray-600 mt-12 p-4">
        &copy; {new Date().getFullYear()} AxleX – All rights reserved.
      </footer>
    </div>
  );
}