'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { jakartaFont, interFont } from '@/app/fonts';

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
        { id: 'recents', label: 'Recents', isActive: true },
        { id: 'home', label: 'Home', isActive: true },
        { id: 'applications', label: 'Applications', isActive: false },
        { id: 'desktop', label: 'Desktop', isActive: false },
        { id: 'downloads', label: 'Downloads', isActive: false },
        { id: 'documents', label: 'Documents', isActive: false },
      ],
    },
    {
      id: 'screens',
      title: 'Screens',
      options: [
        { id: 'recents', label: 'Recents', isActive: true },
        { id: 'home', label: 'Home', isActive: true },
        { id: 'applications', label: 'Applications', isActive: false },
        { id: 'desktop', label: 'Desktop', isActive: false },
        { id: 'downloads', label: 'Downloads', isActive: false },
        { id: 'documents', label: 'Documents', isActive: false },
      ],
    },
    {
      id: 'ui-elements',
      title: 'UI Elements',
      options: [
        { id: 'recents', label: 'Recents', isActive: true },
        { id: 'home', label: 'Home', isActive: true },
        { id: 'applications', label: 'Applications', isActive: false },
        { id: 'desktop', label: 'Desktop', isActive: false },
        { id: 'downloads', label: 'Downloads', isActive: false },
        { id: 'documents', label: 'Documents', isActive: false },
      ],
    },
    {
      id: 'flows',
      title: 'Flows',
      options: [
        { id: 'recents', label: 'Recents', isActive: true },
        { id: 'home', label: 'Home', isActive: true },
        { id: 'applications', label: 'Applications', isActive: false },
        { id: 'desktop', label: 'Desktop', isActive: false },
        { id: 'downloads', label: 'Downloads', isActive: false },
        { id: 'documents', label: 'Documents', isActive: false },
      ],
    },
  ]);

  const handleFilterChange = (categoryId: string, optionId: string, checked: boolean) => {
    setFilters(prev => {
      const updated = prev.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            options: category.options.map(option => 
              option.id === optionId ? { ...option, isActive: checked } : option
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
        <div key={category.id} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col w-full">
            <div className={`${interFont.className} font-normal text-sm text-neutral-500 leading-5 w-full`}>
              {category.title}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {category.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${category.id}-${option.id}`}
                  checked={option.isActive}
                  onCheckedChange={(checked) => 
                    handleFilterChange(category.id, option.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={`${category.id}-${option.id}`}
                  className={`${interFont.className} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
