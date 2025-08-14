'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Briefcase, FlaskConical, User, LucideMenu } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="w-full h-[78px] bg-white/80 backdrop-blur-md border-t border-gray-200 py-3 px-4">
      <div className="flex justify-between items-center h-full">
        {/* Home */}
        <button onClick={() => handleNavigation('/mobile/dashboard')}>
          <Home 
            size={24} 
            strokeWidth={1.5} 
            className={isActive('/mobile/dashboard') ? "text-black" : "text-gray-400"} 
          />
        </button>

        {/* Work */}
        <button onClick={() => handleNavigation('/mobile/work')}>
          <Briefcase 
            size={24} 
            strokeWidth={1.5} 
            className={isActive('/mobile/work') ? "text-black" : "text-gray-400"} 
          />
        </button>

        {/* About Me */}
        <button onClick={() => handleNavigation('/mobile/about-me')}>
          <User 
            size={24} 
            strokeWidth={1.5} 
            className={isActive('/mobile/about-me') ? "text-black" : "text-gray-400"} 
          />
        </button>

        {/* Portfolio Assist - Testtube/Experiments */}
        <button onClick={() => handleNavigation('/mobile/portfolio-assist')}>
          <FlaskConical 
            size={24} 
            strokeWidth={1.5} 
            className={isActive('/mobile/portfolio-assist') ? "text-black" : "text-gray-400"} 
          />
        </button>

        {/* Profile */}
        <button onClick={() => handleNavigation('/mobile/profile')}>
          <LucideMenu 
            size={24} 
            strokeWidth={1.5} 
            className={isActive('/mobile/profile') ? "text-black" : "text-gray-400"} 
          />
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation; 