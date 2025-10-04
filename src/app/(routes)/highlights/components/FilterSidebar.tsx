'use client';

import React, { useState } from 'react';
import { PortfolioButton } from '../../../components/portfolio_button';
import { jakartaFont, interFont } from '../../../fonts';

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
}

export default function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterCategory[]>([
    {
      id: 'categories',
      title: 'Categories',
      options: [
        { id: '0-1-products', label: '0-1 products', isActive: true },
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
        { id: '0-1-products', label: '0-1 products', isActive: false },
        { id: 'enterprise', label: 'enterprise', isActive: false },
        { id: 'mobile', label: 'mobile', isActive: false },
        { id: 'consumer', label: 'consumer', isActive: false },
        { id: 'big-bets', label: 'big bets', isActive: false },
      ],
    },
    {
      id: 'ui-elements',
      title: 'UI elements',
      options: [
        { id: '0-1-products', label: '0-1 products', isActive: false },
        { id: 'enterprise', label: 'enterprise', isActive: false },
        { id: 'mobile', label: 'mobile', isActive: false },
        { id: 'consumer', label: 'consumer', isActive: false },
        { id: 'big-bets', label: 'big bets', isActive: false },
      ],
    },
    {
      id: 'flows',
      title: 'Flows',
      options: [
        { id: '0-1-products', label: '0-1 products', isActive: false },
        { id: 'enterprise', label: 'enterprise', isActive: false },
        { id: 'mobile', label: 'mobile', isActive: false },
        { id: 'consumer', label: 'consumer', isActive: false },
        { id: 'big-bets', label: 'big bets', isActive: false },
      ],
    },
  ]);

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
          Spearheaded the end-end redesign of Rocket Logic and the redesign involved running design sprints with bankers.
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
