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
    <div className={`bg-gray-100 min-h-screen flex items-center justify-center ${jakartaFont.variable}`}>
      {/* Mobile Container - 393px width with full screen height */}
      <div className="bg-white relative w-[393px] max-w-full h-screen max-h-screen overflow-hidden flex flex-col">
        
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