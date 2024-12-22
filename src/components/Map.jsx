import React, { useState } from 'react';
import { MapPin, ZoomIn, ZoomOut, Layers, Compass } from 'lucide-react';

const Map = () => {
  const [zoomLevel, setZoomLevel] = useState(5);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 1, 10));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="relative lg:w-1/2 w-full mt-16 h-[250px] bg-gray-200 lg:ml-96 rounded-lg overflow-hidden shadow-lg">
      {/* Placeholder for actual map */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin size={40 + zoomLevel * 4} className="text-red-500" />
        </div>
        {/* Simulated map grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {[...Array(64)].map((_, index) => (
            <div key={index} className="border border-gray-300 opacity-20"></div>
          ))}
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <ZoomOut size={20} />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Layers size={20} />
        </button>
      </div>

      {/* Compass */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
        <Compass size={24} />
      </div>

      {/* Zoom level indicator */}
      <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold">
        Zoom: {zoomLevel}x
      </div>
    </div>
  );
};

export default Map;

