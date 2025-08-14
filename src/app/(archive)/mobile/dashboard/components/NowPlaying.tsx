import React from 'react';
import { Pause, MoreVertical, CreditCard, MessageCircle, Home, TrendingUp } from 'lucide-react';

export const NowPlaying: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-8">
        {/* Now Playing Section */}
        <div className="px-6">
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h2 className="font-jakarta font-semibold text-[20px] leading-[20px] text-[#111111]">
              Now playing
            </h2>
            
            {/* Current Playing Card */}
            <div className="bg-[#000000] rounded-2xl p-4">
              {/* Song Info */}
              <div className="flex gap-2 items-center mb-4">
                {/* Album Art */}
                <div className="w-12 h-12 bg-[#de3341] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    alt="Rocket logo"
                    className="w-8 h-8"
                    src="/images/rocketlogo.svg"
                  />
                </div>
                
                {/* Song Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-semibold text-[16px] leading-[24px] text-white truncate">
                    Enterprise design leader
                  </h3>
                  <p className="font-jakarta font-medium text-[14px] leading-[20px] text-[#838383]">
                    Trading platform, AI experiences
                  </p>
                </div>
                
                {/* Pause Button */}
                <Pause size={24} className="text-white flex-shrink-0" />
              </div>
              
              {/* Progress Bar */}
              <div className="flex flex-col gap-1.5">
                <div className="bg-[#777777] h-1 rounded w-full relative">
                  <div className="absolute bg-white h-1 left-0 rounded top-0 w-32"></div>
                </div>
                <p className="font-jakarta font-medium text-[13px] leading-[20px] text-[#838383]">
                  Since 4 years at Rocket Mortgage
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* More from this album Section */}
        <div className="px-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-jakarta font-semibold text-[18px] leading-normal text-black">
              More from this album
            </h2>
            
            {/* Album Items */}
            <div className="flex flex-col gap-4 pr-3">
              {/* Item 1 - Rocket Logic XP */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#e7e7e7] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-[#000000]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-semibold text-[18px] leading-[24px] text-[#111111] truncate">
                    Rocket Logic XP
                  </h3>
                  <p className="font-jakarta font-medium text-[14px] leading-[20px] text-[#545454]">
                    Transforming banking experiences
                  </p>
                </div>
                <MoreVertical size={24} className="text-gray-600 flex-shrink-0" />
              </div>

              {/* Item 2 - Synopsis */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#e7e7e7] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#000000]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-semibold text-[18px] leading-[24px] text-[#111111] truncate">
                    Synopsis
                  </h3>
                  <p className="font-jakarta font-medium text-[14px] leading-[20px] text-[#545454]">
                    An AI powered banking chat
                  </p>
                </div>
                <MoreVertical size={24} className="text-gray-600 flex-shrink-0" />
              </div>

              {/* Item 3 - Home buying plan */}
              <div className="flex gap-4 items-center">
                <div className="bg-[#e7e7e7] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-[#000000]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-semibold text-[18px] leading-[24px] text-[#111111] truncate">
                    Home buying plan
                  </h3>
                  <p className="font-jakarta font-medium text-[14px] leading-[20px] text-[#545454]">
                    0-1 nurturing product for home buyers
                  </p>
                </div>
                <MoreVertical size={24} className="text-gray-600 flex-shrink-0" />
              </div>

              {/* Item 4 - Try Again */}
                <div className="flex gap-4 items-center">
                <div className="bg-[#E7E7E7] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#000000]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-jakarta font-semibold text-[18px] leading-[24px] text-[#111111] truncate">
                   Rocket Pro
                  </h3>
                  <p className="font-jakarta font-medium text-[14px] leading-[20px] text-[#545454]">
                    Redesigning the broker experience
                  </p>
                </div>
                <MoreVertical size={24} className="text-gray-600 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 