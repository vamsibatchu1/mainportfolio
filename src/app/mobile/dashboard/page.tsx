import React from 'react';
import { jakartaFont } from '@/app/fonts';
import { 
  Header,
  Hero,
  QuickActions,
  DesignPhilosophy,
  Widgets,
  RecentArticles,
  Specialties,
  BottomNavigation
} from './components';

export default function MobileDashboard() {
  return (
    <div className={`bg-gray-100 min-h-screen sm:flex sm:items-center sm:justify-center ${jakartaFont.variable}`}>
      {/* Mobile Container - Full width on mobile, capped at 393px on 600px+ screens */}
      <div className="bg-white relative w-full sm:w-[393px] sm:max-w-[393px] h-screen max-h-screen overflow-hidden flex flex-col">
        
        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto w-full">
          <div className="relative w-full h-full">
            <div className="flex flex-col gap-10 items-start justify-start pb-6 pt-6 px-6 relative w-full">
              
              {/* Header Section */}
              <Header />
              
              {/* Hero Section */}
              <Hero />
              
              {/* Quick Actions Section */}
              <QuickActions />
              
              {/* Design Philosophy Section */}
              <DesignPhilosophy />
              
              {/* Widgets Section */}
              <Widgets />
              
              {/* Recent Articles Section */}
              <RecentArticles />
              
              {/* Specialties Section */}
              <Specialties />
              
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation - Sticky */}
        <BottomNavigation />
      </div>
    </div>
  );
} 