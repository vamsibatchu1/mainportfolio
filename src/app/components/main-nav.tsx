'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { interFont } from '../fonts';
import { Button } from '../../components/ui/button';
import { Github, Sun, Search, ArrowUpRight, CircleFadingPlus, FileInput, FolderPlus } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../../components/ui/command';
import { motion } from 'framer-motion';
import { useHomepageAnimation } from '../context/HomepageAnimationContext';

interface NavItem {
  title: string;
  path: string;
}

interface MainNavProps {
  className?: string;
}

export function MainNav({ className = "" }: MainNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { hasAnimated, setHasAnimated, isInitialized } = useHomepageAnimation();

  // Check if we should animate (only on home page and first visit, after initialization)
  const shouldAnimate = pathname === '/home' && isInitialized && !hasAnimated;

  // Mark as animated after a delay to ensure it only happens once
  React.useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 5000); // After all animations complete (increased to account for all delays)
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, setHasAnimated]);

  const navItems: NavItem[] = [
    { title: "Home", path: "/home" },
    { title: "Work", path: "/work" },
    { title: "Highlights", path: "/highlights" },
    { title: "Play", path: "/play" },
    { title: "Writing", path: "/writing" },
    { title: "About", path: "/about" },
  ];

  const handleNavClick = (path: string, title: string) => {
    console.log('Nav clicked:', title);
    router.push(path);
  };

  const isActive = (path: string) => pathname === path;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className={`w-[1440px] mx-auto box-border content-stretch flex items-center justify-between py-[16px] relative size-full ${className}`}>
        {/* Left side - Navigation items */}
        <div className="content-stretch flex gap-[24px] items-center justify-start relative shrink-0">
          <div className="content-center flex flex-wrap gap-[20px] items-center justify-start relative shrink-0">
            {navItems.map((item, index) => {
              const active = isActive(item.path);
              
              return (
                <motion.div 
                  key={item.path} 
                  className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0"
                  initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: shouldAnimate ? 3.3 + (index * 0.10) : 0,
                    ease: "easeOut" 
                  }}
                >
                  <button
                    onClick={() => handleNavClick(item.path, item.title)}
                    className={`${interFont.variable} font-inter font-normal leading-[20px] relative shrink-0 text-[18px] text-nowrap transition-colors duration-300 ${
                      active ? 'text-neutral-990' : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    {item.title}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0">
          {/* GitHub Button */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: shouldAnimate ? 3.80 : 0,
              ease: "easeOut" 
            }}
          >
            <Button variant="ghost" size="default" className="h-[36px] px-[16px] py-[8px]">
              <Github className="w-4 h-4 mr-2" />
              <span className={`${interFont.variable} font-inter font-medium text-[14px] leading-[20px]`}>
                GitHub
              </span>
            </Button>
          </motion.div>

          {/* Search Button */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: shouldAnimate ? 3.90 : 0,
              ease: "easeOut" 
            }}
          >
            <button
              className={`${interFont.variable} font-inter inline-flex h-9 w-fit rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20`}
              onClick={() => setOpen(true)}
            >
              <span className="flex grow items-center">
                <Search
                  className="-ms-1 me-3 text-muted-foreground/80"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className={`${interFont.variable} font-inter font-normal text-muted-foreground/70`}>Search</span>
              </span>
              <kbd className={`${interFont.variable} font-inter -me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 text-[0.625rem] font-medium text-muted-foreground/70`}>
                ⌘K
              </kbd>
            </button>
          </motion.div>

          {/* Brightness Toggle Button */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: shouldAnimate ? 4.00 : 0,
              ease: "easeOut" 
            }}
          >
            <Button variant="outline" size="icon" className="w-[36px] h-[36px] bg-neutral-100 border-neutral-200 shadow-sm">
              <Sun className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Command Dialog - Moved outside the main container */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." className={`${interFont.variable} font-inter`} />
        <CommandList className={`${interFont.variable} font-inter`}>
          <CommandEmpty className={`${interFont.variable} font-inter`}>No results found.</CommandEmpty>
          <CommandGroup heading="Quick start" className={`${interFont.variable} font-inter`}>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <FolderPlus size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
              <span>New folder</span>
              <CommandShortcut className={`${interFont.variable} font-inter justify-center`}>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <FileInput size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
              <span>Import document</span>
              <CommandShortcut className={`${interFont.variable} font-inter justify-center`}>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <CircleFadingPlus
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Add block</span>
              <CommandShortcut className={`${interFont.variable} font-inter justify-center`}>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation" className={`${interFont.variable} font-inter`}>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <ArrowUpRight size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
              <span>Go to dashboard</span>
            </CommandItem>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <ArrowUpRight size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
              <span>Go to apps</span>
            </CommandItem>
            <CommandItem className={`${interFont.variable} font-inter`}>
              <ArrowUpRight size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
              <span>Go to connections</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
