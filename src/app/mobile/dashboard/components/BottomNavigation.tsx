import React from 'react';
import { Home, Rocket, MapPin, Search, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="w-full h-[78px] bg-white/80 backdrop-blur-md border-t border-gray-200 py-3 px-4">
      <div className="flex justify-between items-center h-full">
        {/* Home - Active */}
        <div className="flex flex-col items-center justify-center">
          <Home size={24} strokeWidth={1.5} className="text-black" />
        </div>

        {/* Search */}
        <div className="flex flex-col items-center justify-center">
          <Search size={24} strokeWidth={1.5} className="text-gray-400" />
        </div>

        {/* Rocket Assist */}
        <div className="flex flex-col items-center justify-center">
          <Rocket size={24} strokeWidth={1.5} className="text-gray-400" />
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center justify-center">
          <MapPin size={24} strokeWidth={1.5} className="text-gray-400" />
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center justify-center">
          <User size={24} strokeWidth={1.5} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation; 