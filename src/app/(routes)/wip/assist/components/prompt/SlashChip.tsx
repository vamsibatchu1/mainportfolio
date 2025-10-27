'use client';

import React from 'react';
import { X } from 'lucide-react';
import { interFont } from '@/app/fonts';

interface SlashChipProps {
  command: string;
  onRemove?: () => void;
  className?: string;
}

export function SlashChip({ command, onRemove, className = '' }: SlashChipProps) {
  return (
    <div className={`inline-flex items-center gap-[6px] bg-[#F5F5F5] border border-[#e8e8e8] border-solid rounded-[6px] px-[8px] py-[4px] ${className}`}>
      <span className={`${interFont.className} text-[12px] font-medium text-foreground`}>
        /{command}
      </span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="flex items-center justify-center w-[14px] h-[14px] hover:bg-gray-300 rounded-full transition-colors"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}