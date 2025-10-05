'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import MainLayout from '../../layout/MainLayout';
import { FilesystemItem } from './components/filetree';
import ExampleScrollArea from './components/tinyscroll';
import { jakartaFont } from '../../fonts';

// Sample file tree data
const fileTreeData = {
  name: "writing",
  nodes: [
    {
      name: "drafts",
      nodes: [
        {
          name: "product-thinking.md",
          nodes: []
        },
        {
          name: "design-systems.md",
          nodes: []
        },
        {
          name: "user-research.md",
          nodes: []
        }
      ]
    },
    {
      name: "published",
      nodes: [
        {
          name: "building-better-ux.md",
          nodes: []
        },
        {
          name: "design-process.md",
          nodes: []
        }
      ]
    },
    {
      name: "ideas",
      nodes: [
        {
          name: "future-of-design.md",
          nodes: []
        },
        {
          name: "accessibility-notes.md",
          nodes: []
        }
      ]
    }
  ]
};

export default function WritingPage() {
  const [fileTreeHeight, setFileTreeHeight] = useState(243); // Default height
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showScrollArea, setShowScrollArea] = useState(false);
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['writing'])); // Track open folders
  const fileTreeRef = useRef<HTMLDivElement>(null);

  // Update height function
  const updateHeight = useCallback(() => {
    if (fileTreeRef.current) {
      const height = fileTreeRef.current.scrollHeight;
      setFileTreeHeight(prevHeight => {
        // Only update if height actually changed to prevent unnecessary re-renders
        if (prevHeight !== height) {
          return height;
        }
        return prevHeight;
      });
      
      // Show scroll area if any folders are expanded (height > initial collapsed height)
      const hasExpandedFolders = height > 100; // Approximate collapsed height
      setShowScrollArea(hasExpandedFolders);
    }
  }, []);

  // Initial height measurement
  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  // Update height when folders change (not on every DOM change)
  useEffect(() => {
    // Use a small delay to let animations complete
    const timeoutId = setTimeout(updateHeight, 100);
    return () => clearTimeout(timeoutId);
  }, [openFolders, updateHeight]);

  // Handle file selection with useCallback to prevent re-renders
  const handleFileSelect = useCallback((fileName: string) => {
    setSelectedFile(fileName);
  }, []);

  // Handle folder toggle with accordion behavior (only one folder open at a time)
  const handleFolderToggle = useCallback((folderName: string) => {
    setOpenFolders(prev => {
      // If clicking on the currently open folder, close it
      if (prev.has(folderName)) {
        return new Set(['writing']); // Keep only the root folder open
      }
      
      // If clicking on a different folder, close all others and open this one
      return new Set(['writing', folderName]);
    });
  }, []);

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-[96px]">
        {/* Drafts Component */}
        <div className="content-stretch flex gap-[40px] items-start relative size-full">
          {/* Main Text Column */}
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start leading-[1.1] min-h-px min-w-px relative self-stretch shrink-0 text-black">
            <p className={`${jakartaFont.className} font-medium min-w-full relative shrink-0 text-[38px] w-[min-content]`}>
              read through the drafts that are currently work in progress
            </p>
            <p className={`${jakartaFont.className} font-medium relative shrink-0 text-[15.875px] text-nowrap whitespace-pre`}>
              click on any folder to see read the drafts
            </p>
          </div>
          
          {/* File Tree Column */}
          <div 
            ref={fileTreeRef}
            className="relative shrink-0 w-[278px]"
            style={{ height: 'auto', minHeight: '243px' }}
          >
            <div className="w-full">
              <FilesystemItem 
                node={fileTreeData} 
                animated={true} 
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                openFolders={openFolders}
                onFolderToggle={handleFolderToggle}
              />
            </div>
          </div>
          
          {/* Scroll Area Column */}
          <div 
            className="relative shrink-0 w-[426px]"
            style={{ height: `${fileTreeHeight}px` }}
          >
            {showScrollArea && (
              <div className="animate-in fade-in duration-300">
                <ExampleScrollArea 
                  height={fileTreeHeight} 
                  selectedFile={selectedFile}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}