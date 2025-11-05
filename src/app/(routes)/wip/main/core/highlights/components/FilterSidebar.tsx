'use client';

import React, { useState } from 'react';
import { interFont, ebGaramondFont } from '@/app/fonts';

interface FilterOption {
  id: string;
  label: string;
  isActive: boolean;
}

interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  onFiltersChange: (filters: string[]) => void;
  onViewModeChange: (viewMode: 'tiny' | 'compact' | 'relaxed') => void;
}

export default function FilterSidebar({ onFiltersChange, onViewModeChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterCategory[]>([
    {
      id: 'categories',
      title: 'Categories',
      options: [
        { id: '0-1-products', label: '0-1 products', isActive: false },
        { id: 'enterprise', label: 'enterprise', isActive: false },
        { id: 'mobile', label: 'mobile', isActive: false },
        { id: 'consumer', label: 'consumer', isActive: false },
        { id: 'big-bets', label: 'big bets', isActive: false },
      ],
    },
    {
      id: 'screens',
      title: 'Screens',
      options: [
        { id: 'content', label: 'content', isActive: false },
        { id: 'data', label: 'data', isActive: false },
        { id: 'utility', label: 'utility', isActive: false },
        { id: 'actions', label: 'actions', isActive: false },
        { id: 'home', label: 'home', isActive: false },
        { id: 'settings', label: 'settings', isActive: false },
        { id: 'dashboards', label: 'dashboards', isActive: false },
        { id: 'ai', label: 'AI', isActive: false },
        { id: 'finance', label: 'finance', isActive: false },
        { id: 'social', label: 'social', isActive: false },
        { id: 'user-collections', label: 'user collections', isActive: false },
      ],
    },
    {
      id: 'ui-elements',
      title: 'UI elements',
      options: [
        { id: 'cards', label: 'cards', isActive: false },
        { id: 'buttons', label: 'buttons', isActive: false },
        { id: 'visualizations', label: 'visualizations', isActive: false },
        { id: 'tables', label: 'tables', isActive: false },
        { id: 'navigation', label: 'navigation', isActive: false },
        { id: 'modals', label: 'modals', isActive: false },
        { id: 'drawers', label: 'drawers', isActive: false },
        { id: 'tabs', label: 'tabs', isActive: false },
      ],
    },
  ]);

  // Combine all options into a flat list
  const allOptions = filters.flatMap(category => 
    category.options.map(option => ({
      ...option,
      categoryId: category.id,
    }))
  );

  const handleFilterChange = (categoryId: string, optionId: string) => {
    setFilters(prev => {
      const updated = prev.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            options: category.options.map(option => 
              option.id === optionId ? { ...option, isActive: !option.isActive } : option
            ),
          };
        }
        return category;
      });
      
      // Extract all active filter IDs
      const activeFilters = updated
        .flatMap(category => category.options)
        .filter(option => option.isActive)
        .map(option => option.id);
      
      onFiltersChange(activeFilters);
      return updated;
    });
  };

  return (
    <div className="flex flex-row gap-8 w-full items-start">
      {/* Column 1: Text Content - 30% */}
      <div className="flex flex-col gap-4 w-[30%] min-w-0">
        <div className={`${ebGaramondFont.className} font-normal text-[48px] text-black leading-[110%]`}>
          Every interaction tells a story—filter through screens, systems, and products that shipped.
        </div>
      </div>

      {/* Column 2: Combined Chips - 70% */}
      <div className="flex flex-col gap-6 w-[70%] min-w-0">
        {/* Combined Chips - All categories, screens, and UI elements */}
        <div className="flex flex-wrap gap-2">
          {allOptions.map((option) => (
            <button
              key={`${option.categoryId}-${option.id}`}
              onClick={() => handleFilterChange(option.categoryId, option.id)}
              className={`${ebGaramondFont.className} px-3 py-1.5 border border-black transition-colors ${
                option.isActive
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:opacity-70'
              }`}
              style={{ width: 'auto', fontSize: '32px' }}
            >
              #{option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
