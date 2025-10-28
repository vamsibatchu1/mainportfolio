'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Flame, Mic, MessageSquare, Handshake } from 'lucide-react';
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
  onItemSelect?: () => void;
  className?: string;
}

export function SlashMenu({ onItemClick, onItemSelect, className = '' }: SlashMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const menuItems: SlashMenuItem[] = [
    {
      id: 'roast-portfolio',
      icon: Flame,
      label: 'Roast my portfolio'
    },
    {
      id: 'generate-podcast',
      icon: Mic,
      label: 'Generate portfolio podcast'
    },
    {
      id: 'leave-feedback',
      icon: MessageSquare,
      label: 'Leave feedback'
    },
    {
      id: 'collaboration-request',
      icon: Handshake,
      label: 'Send collaboration request'
    }
  ];

  const handleItemClick = (item: SlashMenuItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (onItemSelect) {
      onItemSelect();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        break;
      case 'Enter':
        e.preventDefault();
        handleItemClick(menuItems[selectedIndex]);
        break;
      case 'Escape':
        e.preventDefault();
        // Close menu - you might want to add an onClose prop for this
        break;
    }
  };

  // Focus the menu when it mounts
  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.focus();
    }
  }, []);

  // Update refs array when menuItems change
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, menuItems.length);
  }, [menuItems.length]);

  return (
    <div 
      ref={menuRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`bg-background border border-border border-solid box-border content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] w-[240px] max-w-[240px] z-50 focus:outline-none ${className}`} 
      data-slash-menu
    >
      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div 
          key={item.id}
          ref={(el) => { itemRefs.current[index] = el; }}
          className={`group box-border content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0 w-full cursor-pointer transition-colors text-foreground ${
            selectedIndex === index 
              ? 'bg-[#F5F5F5] text-foreground' 
              : 'hover:bg-[#F5F5F5] hover:text-foreground focus:bg-[#F5F5F5] focus:text-foreground'
          }`}
          onClick={() => handleItemClick(item)}
        >
          <div className="overflow-clip relative shrink-0 size-[10.667px]">
            <item.icon className={`w-[10.667px] h-[10.667px] transition-colors ${
              selectedIndex === index 
                ? 'text-foreground' 
                : 'text-muted-foreground group-hover:text-foreground'
            }`} />
          </div>
          <p className={`${interFont.className} font-normal leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-foreground`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}