'use client';

import React, { useState } from 'react';
import { PortfolioButton } from '@/app/components/portfolio_button';
import { jakartaFont, interFont, ebGaramondFont } from '@/app/fonts';
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
    <div className="flex flex-row gap-8 w-full max-w-[1440px] mx-auto items-start">
      {/* Column 1: Text Content Only */}
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <div className={`${ebGaramondFont.className} font-normal text-[32px] text-black leading-[120%]`}>
          Every interaction tells a story—filter through screens, systems, and products that shipped.
        </div>
      </div>

      {/* Column 2: Choose View + Categories */}
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        {/* Choose view slider */}
        <div className="flex flex-col gap-2">
          <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5`}>
            Choose view
          </div>
          <div className="flex items-center w-full">
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

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 mb-2`}>
            {filters.find(c => c.id === 'categories')?.title || 'Categories'}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.find(c => c.id === 'categories')?.options.map((option) => (
              <PortfolioButton
                key={option.id}
                variant={option.isActive ? 'default-selected' : 'default'}
                onClick={() => handleFilterChange('categories', option.id)}
                className="h-[36px] flex-shrink-0"
              >
                {option.label}
              </PortfolioButton>
            ))}
          </div>
        </div>
      </div>

      {/* Column 3: Screens + UI Elements */}
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        {/* Screens - Reduced items */}
        <div className="flex flex-col gap-2">
          <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 mb-2`}>
            {filters.find(c => c.id === 'screens')?.title || 'Screens'}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.find(c => c.id === 'screens')?.options.slice(0, 6).map((option) => (
              <PortfolioButton
                key={option.id}
                variant={option.isActive ? 'default-selected' : 'default'}
                onClick={() => handleFilterChange('screens', option.id)}
                className="h-[36px] flex-shrink-0"
              >
                {option.label}
              </PortfolioButton>
            ))}
          </div>
        </div>

        {/* UI Elements - Reduced items */}
        <div className="flex flex-col gap-2">
          <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 mb-2`}>
            {filters.find(c => c.id === 'ui-elements')?.title || 'UI elements'}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.find(c => c.id === 'ui-elements')?.options.slice(0, 6).map((option) => (
              <PortfolioButton
                key={option.id}
                variant={option.isActive ? 'default-selected' : 'default'}
                onClick={() => handleFilterChange('ui-elements', option.id)}
                className="h-[36px] flex-shrink-0"
              >
                {option.label}
              </PortfolioButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
