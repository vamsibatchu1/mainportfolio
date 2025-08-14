import {RefreshCwIcon,MoreVerticalIcon } from 'lucide-react';
import { kodeMonoFont } from '@/app/fonts';
import HeaderAnimation from '../../examples/ascii-cube';
import React, { useState } from 'react';
import BottomSheet from './BottomSheet';

interface HeaderProps {
  onRefresh?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState('Serious');
  const [selectedSummary, setSelectedSummary] = useState('Short');

  return (
    <>
      <div className="relative shrink-0 w-full px-6 pt-3 border-b border-gray-200">
        <div className="flex flex-col gap-3 items-start justify-start pb-3 leading-[0] text-left w-full">
          {/* Portfolio Agent Title */}
          <div className="flex flex-row items-center gap-4 justify-between w-full">
            <div className="flex flex-row items-center gap-3 justify-start w-full">
              {/* Header Animation */}
              <div className="flex-shrink-0">
                <HeaderAnimation 
                  speed={150}
                />
              </div>
              {/* Text */}
              <div className={`${kodeMonoFont.variable} font-kodemono font-regular text-[#111111] text-[24px] text-left tracking-[-0.96px] overflow-hidden flex-1`}>
                <p className="leading-[32px] text-nowrap overflow-ellipsis">
ASK VAMSI          
                </p>
              </div>
            </div>
            <div 
              className="bg-[#EDEDED] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-[#d1d1d1] transition-colors"
              onClick={onRefresh}
            >
              <RefreshCwIcon className="w-5 h-5 text-[#000000]" />
            </div>
            <div
              className="bg-[#EDEDED] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-[#d1d1d1] transition-colors"
              onClick={() => setSheetOpen(true)}
            >
              <MoreVerticalIcon className="w-5 h-5 text-[#000000]" />
            </div>
          </div>
        </div>
      </div>
      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        selectedTone={selectedTone}
        setSelectedTone={setSelectedTone}
        selectedSummary={selectedSummary}
        setSelectedSummary={setSelectedSummary}
      />
    </>
  );
}; 