"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { partsData, getUniqueModels } from '../lib/partsData';
import type { Part } from '../lib/partsData';
import { FaCar } from 'react-icons/fa';

const models = getUniqueModels();

export default function PartsCatalogue() {
  const [selectedModel, setSelectedModel] = useState('All');

  const filteredParts = useMemo(() => {
    if (selectedModel === 'All') {
      return partsData;
    }
    return partsData.filter(part => part.model === selectedModel);
  }, [selectedModel]);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
        <div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Parts <span className="text-red-600">Catalogue</span>
          </h1>
          <p className="text-lg text-gray-400">
            Browse our in-house designed and 3D-printed parts.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <label htmlFor="model-filter" className="block text-sm font-medium text-gray-400 mb-2">
            Filter by Vehicle Model
          </label>
          <select
            id="model-filter"
            name="model-filter"
            className="bg-gray-900 border border-gray-800 text-white rounded-lg p-3 focus:outline-none focus:border-red-600"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredParts.length > 0 ? (
          filteredParts.map((part: Part) => (
            <div
              key={part.id}
              className="relative bg-gray-900 rounded-lg border border-gray-800 overflow-hidden group transition-all hover:border-red-600/50"
            >
              <Link href={`/parts/${part.slug}`}>
                <div className="relative w-full aspect-square">
                  {part.imageUrl ? (
                    <Image
                      src={part.imageUrl}
                      alt={part.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <FaCar className="text-5xl text-gray-700" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500">{part.model}</p>
                  <h3 className="text-lg font-semibold text-white truncate">{part.name}</h3>
                  <p className="text-xl font-bold text-red-600 mt-2">
                    ${part.price.toFixed(2)}
                  </p>
                </div>
              </Link>

              <div className="px-4 pb-4">
                <a
                  href={`https://wa.me/94719686487?text=Hi%20AxleX%2C%20I%20am%20interested%20in%20${encodeURIComponent(part.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block w-full text-center bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 md:col-span-4">
            No parts found for this model.
          </p>
        )}
      </div>
    </div>
  );
}