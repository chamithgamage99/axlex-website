import React from 'react';

// This is a simple placeholder component for a grid item
const PartCard = ({ name, id, imageUrl }: { name: string, id: string, imageUrl?: string }) => (
  <div className="relative aspect-square bg-gray-900 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-gray-700 overflow-hidden group cursor-pointer p-4">
    {/* You can add an <Image> tag here when you have images */}
    {/* <Image src={imageUrl} layout="fill" objectFit="cover" alt={name} /> */}
    <span className="absolute z-10 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span className="text-4xl">?</span> {/* Placeholder icon */}
    <span className="absolute bottom-3 right-3 text-xs text-red-600/50 font-mono tracking-widest">ID:{id}</span>
    <span className="absolute top-3 left-3 text-sm text-white/50">{name}</span>
  </div>
);

export default function PartsCatalogue() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Parts <span className="text-red-600">Catalogue</span>
      </h1>
      <p className="text-lg text-gray-400 mb-12">
        Browse our in-house designed and 3D-printed automotive parts.
      </p>

      {/* Parts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Replace these with your actual parts */}
        <PartCard name="Custom Spoiler" id="AX-001" />
        <PartCard name="Widebody Fender" id="AX-002" />
        <PartCard name="Intake Manifold" id="AX-003" />
        <PartCard name="Bumper Lip" id="AX-004" />
        <PartCard name="Side Skirt" id="AX-005" />
        <PartCard name="Rear Diffuser" id="AX-006" />
        <PartCard name="Custom Emblem" id="AX-007" />
        <PartCard name="Vent Cover" id="AX-008" />
      </div>
    </div>
  );
}