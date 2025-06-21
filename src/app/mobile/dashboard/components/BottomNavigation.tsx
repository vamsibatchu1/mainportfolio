import React from 'react';
import { Home, Rocket, MapPin, Search, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="w-full h-[78px] bg-white/80 backdrop-blur-md border-t border-gray-200 py-3 px-4">
      <div className="flex justify-between items-center h-full">
        {/* Home - Active */}
        <Home size={24} strokeWidth={1.5} className="text-black" />

        {/* Search */}
        <Search size={24} strokeWidth={1.5} className="text-gray-400" />

        {/* Rocket Assist */}
        <Rocket size={24} strokeWidth={1.5} className="text-gray-400" />

        {/* Explore */}
        <MapPin size={24} strokeWidth={1.5} className="text-gray-400" />

        {/* Profile */}
        <User size={24} strokeWidth={1.5} className="text-gray-400" />
      </div>
    </div>
  );
};

export default BottomNavigation; 