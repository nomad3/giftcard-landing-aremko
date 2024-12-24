import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img 
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
        alt="Spa ambiente relajante"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">Encuentra tu momento de paz</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto space-y-2">
            <span className="block">A sólo 23 km del centro de Puerto Varas, junto al Río Pescado</span>
            <span className="block">Descubre un oasis de tranquilidad y bienestar</span>
          </p>
        </div>
      </div>
    </div>
  );
}