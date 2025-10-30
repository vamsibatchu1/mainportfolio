'use client';

import React, { useState } from 'react';
import { PortfolioButton } from '../../../components/portfolio_button';
import { jakartaFont, interFont } from '../../../fonts';
import { Slider } from '@/components/ui/slider';

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

  // view mode: 0 -> tiny, 1 -> compact, 2 -> relaxed
  const [viewSliderValue, setViewSliderValue] = useState<number>(0);

  const viewValueToMode = (value: number): 'tiny' | 'compact' | 'relaxed' => {
    if (value <= 0) return 'tiny';
    if (value === 1) return 'compact';
    return 'relaxed';
  };

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
    <div className="flex flex-col gap-10 w-full">
      {/* Header */}
      <div className="flex gap-10 items-center w-full">
        <div className={`${jakartaFont.className} font-medium text-xl text-black leading-tight`}>
        Every interaction tells a story—filter through screens, systems, and products that shipped.
         </div>
      </div>

      {/* Choose view slider */}
      <div className="flex flex-col gap-2 w-full">
        <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 w-full`}>
          Choose view
        </div>
        <div className="flex items-center w-full mt-2">
          <Slider
            min={0}
            max={2}
            step={1}
            value={[viewSliderValue]}
            onValueChange={(v: number[]) => {
              const val = Array.isArray(v) ? v[0] : Number(v);
              const safeVal = Math.max(0, Math.min(2, Number(val)));
              setViewSliderValue(safeVal);
              onViewModeChange(viewValueToMode(safeVal));
            }}
            aria-label="choose view"
            className="w-full"
          />
        </div>
        <div className="flex justify-between w-full mt-1">
          <div className={`${interFont.className} text-xs text-neutral-500`}>tiny</div>
          <div className={`${interFont.className} text-xs text-neutral-500`}>compact</div>
          <div className={`${interFont.className} text-xs text-neutral-500`}>relaxed</div>
        </div>
      </div>

      {/* Filter Categories */}
      {filters.map((category) => (
        <div key={category.id} className="flex flex-col gap-2 w-full">
          <div className="flex flex-col w-full">
            <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 w-full`}>
              {category.title}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full">
            {category.options.map((option) => (
              <PortfolioButton
                key={option.id}
                variant={option.isActive ? 'default-selected' : 'default'}
                onClick={() => handleFilterChange(category.id, option.id)}
                className="h-[36px]"
              >
                {option.label}
              </PortfolioButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
