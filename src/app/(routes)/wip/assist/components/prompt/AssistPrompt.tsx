'use client';

import React from 'react';
import { Send, AppWindow, Code, ChevronsUpDown, Filter } from 'lucide-react';
import { interFont } from '@/app/fonts';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SlashMenu } from './SlashMenu';
import { SlashChip } from './SlashChip';

interface AssistPromptProps {
  // Assist Selections
  slashChips: Array<{ id: string; command: string }>;
  onChipRemove: (chipId: string) => void;
  showSlashMenu: boolean;
  onSlashMenuItemClick: (item: any) => void;
  
  // Assist Prompt
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSend: () => void;
  
  // Assist Tools
  activeTab: 'agent' | 'code';
  onTabChange: (value: string) => void;
  selectedPersona: string;
  onPersonaChange: (value: string) => void;
  isPersonaOpen: boolean;
  onPersonaOpenChange: (open: boolean) => void;
  personas: Array<{ value: string; label: string }>;
  selectedTone: string;
  onToneChange: (value: string) => void;
  isToneOpen: boolean;
  onToneOpenChange: (open: boolean) => void;
  tones: Array<{ value: string; label: string }>;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  isFilterOpen: boolean;
  onFilterOpenChange: (open: boolean) => void;
  filters: Array<{ value: string; label: string }>;
}

export function AssistPrompt({
  // Assist Selections
  slashChips,
  onChipRemove,
  showSlashMenu,
  onSlashMenuItemClick,
  
  // Assist Prompt
  inputValue,
  onInputChange,
  onKeyPress,
  onSend,
  
  // Assist Tools
  activeTab,
  onTabChange,
  selectedPersona,
  onPersonaChange,
  isPersonaOpen,
  onPersonaOpenChange,
  personas,
  selectedTone,
  onToneChange,
  isToneOpen,
  onToneOpenChange,
  tones,
  selectedFilter,
  onFilterChange,
  isFilterOpen,
  onFilterOpenChange,
  filters,
}: AssistPromptProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] pb-[24px] relative shrink-0 w-full">
      {/* Assist Selections - Chips Container */}
      <div className="relative">
        {slashChips.length > 0 && (
          <div className="flex flex-wrap gap-[6px]">
            {slashChips.map((chip) => (
              <SlashChip
                key={chip.id}
                command={chip.command}
                onRemove={() => onChipRemove(chip.id)}
              />
            ))}
          </div>
        )}
        
        {/* Slash Menu - Positioned absolutely over chips */}
        {showSlashMenu && (
          <div className="absolute top-[-72px] left-0 z-50">
            <SlashMenu onItemClick={onSlashMenuItemClick} />
          </div>
        )}
      </div>
      
      {/* Assist Prompt - Text Input and Send Button */}
      <div className="bg-popover border-[1.25px] border-border border-solid max-w-[640px] relative rounded-[12.5px] shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start max-w-inherit overflow-clip relative rounded-[inherit] w-full">
          {/* Command Main */}
          <div className="bg-transparent border-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-[10px] h-[80px] items-start overflow-clip px-[15px] pt-[15px] relative rounded-[inherit] w-full">
              <Textarea
                value={inputValue}
                onChange={onInputChange}
                onKeyPress={onKeyPress}
                placeholder="Ask anything to the portfolio assist"
                className={`basis-0 ${interFont.className} font-normal grow leading-[25px] min-h-px min-w-px overflow-y-auto relative shrink-0 text-[17.5px] text-muted-foreground resize-none border-none outline-none bg-transparent placeholder:text-muted-foreground h-full shadow-none focus:ring-0 focus:border-none focus:outline-none p-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  border: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  padding: '0'
                }}
                rows={4}
              />
              <div className={`border border-[#e8e8e8] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 size-[36px] transition-colors ${
                inputValue.trim() || slashChips.length > 0 ? 'bg-black' : 'bg-[#F5F5F5]'
              }`}>
                <Button
                  onClick={onSend}
                  size="icon"
                  variant="ghost"
                  className={`overflow-clip relative shrink-0 size-4 p-0 transition-colors ${
                    inputValue.trim() || slashChips.length > 0
                      ? 'hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white' 
                      : 'hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground'
                  }`}
                >
                  <Send className={`w-4 h-4 transition-colors ${
                    inputValue.trim() || slashChips.length > 0 ? 'text-white' : 'text-foreground'
                  }`} />
                </Button>
              </div>
            </div>
          </div>

          {/* Assist Tools - Tabs and Framework Dropdown */}
          <div className="box-border content-stretch flex flex-col items-start px-[10px] py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
             
              {/* Tool 1 - Persona Combobox */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]">
                <Popover open={isPersonaOpen} onOpenChange={onPersonaOpenChange}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isPersonaOpen}
                      className="bg-background border border-input border-solid h-[36px] relative rounded-[8px] shrink-0 w-full justify-between px-[16px] py-[8px] hover:bg-muted focus:bg-muted transition-colors"
                    >
                      <span className={`${interFont.className} font-medium leading-[20px] text-[14px] text-foreground`}>
                        {selectedPersona ? personas.find(p => p.value === selectedPersona)?.label : "Persona"}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 bg-background border border-border" align="start">
                    <Command className="bg-background">
                      <CommandInput 
                        placeholder="Search persona..." 
                        className={`${interFont.className} font-normal text-[14px]`}
                      />
                      <CommandList>
                        <CommandEmpty className={`${interFont.className} font-normal text-[14px]`}>
                          No persona found.
                        </CommandEmpty>
                        <CommandGroup>
                          {personas.map((persona) => (
                            <CommandItem
                              key={persona.value}
                              value={persona.value}
                              onSelect={(currentValue) => {
                                onPersonaChange(currentValue === selectedPersona ? "" : currentValue);
                                onPersonaOpenChange(false);
                              }}
                              className={`${interFont.className} font-medium leading-[20px] text-[14px] transition-colors`}
                              style={{
                                '--hover-bg': '#F5F5F5',
                                '--focus-bg': '#F5F5F5'
                              } as React.CSSProperties}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                            >
                              {persona.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Tool 2 - Tone Combobox */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]">
                <Popover open={isToneOpen} onOpenChange={onToneOpenChange}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isToneOpen}
                      className="bg-background border border-input border-solid h-[36px] relative rounded-[8px] shrink-0 w-full justify-between px-[16px] py-[8px] hover:bg-muted focus:bg-muted transition-colors"
                    >
                      <span className={`${interFont.className} font-medium leading-[20px] text-[14px] text-foreground`}>
                        {selectedTone ? tones.find(t => t.value === selectedTone)?.label : "Tone"}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 bg-background border border-border" align="start">
                    <Command className="bg-background">
                      <CommandInput 
                        placeholder="Search tone..." 
                        className={`${interFont.className} font-normal text-[14px]`}
                      />
                      <CommandList>
                        <CommandEmpty className={`${interFont.className} font-normal text-[14px]`}>
                          No tone found.
                        </CommandEmpty>
                        <CommandGroup>
                          {tones.map((tone) => (
                            <CommandItem
                              key={tone.value}
                              value={tone.value}
                              onSelect={(currentValue) => {
                                onToneChange(currentValue === selectedTone ? "" : currentValue);
                                onToneOpenChange(false);
                              }}
                              className={`${interFont.className} font-medium leading-[20px] text-[14px] transition-colors`}
                              style={{
                                '--hover-bg': '#F5F5F5',
                                '--focus-bg': '#F5F5F5'
                              } as React.CSSProperties}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                            >
                              {tone.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Tool 3 - Filter Combobox */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <Popover open={isFilterOpen} onOpenChange={onFilterOpenChange}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isFilterOpen}
                      className="bg-background border border-input border-solid h-[36px] w-[36px] relative rounded-[8px] shrink-0 justify-center px-0 py-0 hover:bg-muted focus:bg-muted transition-colors"
                    >
                      <Filter className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0 bg-background border border-border" align="start">
                    <Command className="bg-background">
                      <CommandInput 
                        placeholder="Search filter..." 
                        className={`${interFont.className} font-normal text-[14px]`}
                      />
                      <CommandList>
                        <CommandEmpty className={`${interFont.className} font-normal text-[14px]`}>
                          No filter found.
                        </CommandEmpty>
                        <CommandGroup>
                          {filters.map((filter) => (
                            <CommandItem
                              key={filter.value}
                              value={filter.value}
                              onSelect={(currentValue) => {
                                onFilterChange(currentValue === selectedFilter ? "" : currentValue);
                                onFilterOpenChange(false);
                              }}
                              className={`${interFont.className} font-medium leading-[20px] text-[14px] transition-colors`}
                              style={{
                                '--hover-bg': '#F5F5F5',
                                '--focus-bg': '#F5F5F5'
                              } as React.CSSProperties}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.backgroundColor = '#F5F5F5';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                              }}
                            >
                              {filter.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
