'use client';

import React from 'react';
import { Plus, FileText, FolderOpen, RotateCcw, Check } from 'lucide-react';
import { interFont } from '@/app/fonts';

interface SlashMenuItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
  hasCheck?: boolean;
}

interface SlashMenuProps {
  onItemClick?: (item: SlashMenuItem) => void;
  className?: string;
}

export function SlashMenu({ onItemClick, className = '' }: SlashMenuProps) {
  const menuItems: SlashMenuItem[] = [
    {
      id: 'add-project',
      icon: Plus,
      label: 'Add new project'
    },
    {
      id: 'view-case-studies',
      icon: FileText,
      label: 'View case studies'
    },
    {
      id: 'open-portfolio',
      icon: FolderOpen,
      label: 'Open portfolio files'
    },
    {
      id: 'reset-context',
      icon: RotateCcw,
      label: 'Reset context',
      isActive: true,
      hasCheck: true
    }
  ];

  const handleItemClick = (item: SlashMenuItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div className={`bg-background border border-border border-solid box-border content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] w-[240px] max-w-[240px] z-50 ${className}`} data-slash-menu>
      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Separator before reset context */}
          {index === 3 && (
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[8px] items-start px-0 py-[4px] relative shrink-0 w-full">
              <div className="absolute h-0 left-[-4px] right-[-4px] top-[calc(50%+0.5px)] translate-y-[-50%]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-border"></div>
              </div>
            </div>
          )}
          
          {/* Menu Item */}
          <div 
            className={`group box-border content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0 w-full cursor-pointer hover:bg-[#F5F5F5] hover:text-foreground focus:bg-[#F5F5F5] focus:text-foreground transition-colors ${
              item.isActive ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
            onClick={() => handleItemClick(item)}
          >
            <div className="overflow-clip relative shrink-0 size-[10.667px]">
              <item.icon className={`w-[10.667px] h-[10.667px] transition-colors ${
                item.isActive ? 'text-accent-foreground' : 'text-muted-foreground group-hover:text-foreground'
              }`} />
            </div>
            <p className={`${interFont.className} font-normal leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap ${
              item.isActive ? 'text-accent-foreground' : 'text-foreground'
            }`}>
              {item.label}
            </p>
            {item.hasCheck && (
              <div className="overflow-clip relative shrink-0 size-[10.667px]">
                <Check className={`w-[10.667px] h-[10.667px] transition-colors ${
                  item.isActive ? 'text-accent-foreground' : 'text-muted-foreground group-hover:text-foreground'
                }`} />
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
