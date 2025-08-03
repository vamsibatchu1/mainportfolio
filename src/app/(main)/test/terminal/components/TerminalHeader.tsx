import React from 'react';
import { RotateCcw, MessageSquare, Search, HelpCircle, Folder } from 'lucide-react';

interface TerminalHeaderProps {
  onMouseDown: (e: React.MouseEvent) => void;
  onRefresh: () => void;
}

export default function TerminalHeader({ onMouseDown, onRefresh }: TerminalHeaderProps) {
  return (
    <div 
      className="bg-[#f6f6f6] rounded-t-lg border-b border-gray-300 px-4 py-3 flex items-center justify-between cursor-move"
      onMouseDown={onMouseDown}
    >
      {/* Traffic Lights */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-[#ff5f57] rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-[#28ca42] rounded-full cursor-pointer"></div>
      </div>

      {/* Title */}
      <div className="flex-1 text-center">
        <span className="text-gray-700 font-medium text-sm font-sf-pro">Untitled</span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3">
        <RotateCcw className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" onClick={onRefresh} />
        <MessageSquare className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Search className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        <HelpCircle className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        <div className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 font-sf-pro">
          <Folder className="w-3 h-3" />
          <span>_vamsi</span>
        </div>
      </div>
    </div>
  );
}