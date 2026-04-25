"use client";
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaWrench, FaCarSide, FaArrowRight } from 'react-icons/fa';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 font-sans selection:bg-red-600 selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-12">
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Page Header */}
        <header className="mb-16 border-b border-gray-800 pb-8 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 rounded-full filter blur-3xl opacity-50 pointer-events-none"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 relative z-10">
            Axle<span className="text-red-600">X</span> Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl relative z-10">
            Deep dives into vehicle diagnostics, full restorations, and custom 3D printed engineering solutions.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* C200 Project Card */}
          <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all hover:shadow-2xl hover:shadow-red-900/20 cursor-pointer">
            <div className="aspect-video bg-gray-950 flex flex-col items-center justify-center border-b border-gray-800 relative overflow-hidden">
               <span className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
               <FaCarSide className="text-7xl text-gray-800 mb-4 group-hover:text-gray-600 transition-colors" />
               <p className="text-gray-600 font-mono tracking-widest text-sm">/PROJECT-C200</p>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">2019 Mercedes-Benz C200</h2>
              <p className="text-lg text-gray-400 mb-8">
                Crash data resets, SRS module repairs, headlight configurations, and advanced diagnostics using Thinkdiag2 and Xentry.
              </p>
              <span className="text-red-500 font-semibold flex items-center gap-2 group-hover:text-red-400 transition-colors">
                Read Build Log <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </span>
            </div>
          </div>

          {/* XL250S Project Card */}
          <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all hover:shadow-2xl hover:shadow-red-900/20 cursor-pointer">
            <div className="aspect-video bg-gray-950 flex flex-col items-center justify-center border-b border-gray-800 relative overflow-hidden">
               <span className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
               <FaWrench className="text-7xl text-gray-800 mb-4 group-hover:text-gray-600 transition-colors" />
               <p className="text-gray-600 font-mono tracking-widest text-sm">/PROJECT-XL250S</p>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Honda XL250S Restoration</h2>
              <p className="text-lg text-gray-400 mb-8">
                Complete teardown, custom 3D printed modifications, and bringing a classic motorcycle back to life.
              </p>
              <span className="text-red-500 font-semibold flex items-center gap-2 group-hover:text-red-400 transition-colors">
                Read Build Log <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}