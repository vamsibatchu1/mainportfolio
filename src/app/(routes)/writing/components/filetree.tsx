"use client"

import { useState } from "react"
import { ChevronRight, Folder, File } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { jakartaFont } from "../../../fonts"

type Node = {
  name: string
  nodes?: Node[]
}

interface FilesystemItemProps {
  node: Node
  animated?: boolean
  onFileSelect?: (fileName: string) => void
  selectedFile?: string | null
  openFolders?: Set<string>
  onFolderToggle?: (folderName: string) => void
}

export function FilesystemItem({
  node,
  animated = false,
  onFileSelect,
  selectedFile,
  openFolders,
  onFolderToggle,
}: FilesystemItemProps) {
  // Use controlled state from parent instead of local state
  const isOpen = openFolders?.has(node.name) || false;

  // Общий контент для обоих вариантов
  const ChevronIcon = () =>
    animated ? (
      <motion.span
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="flex"
      >
        <ChevronRight className="size-4 text-gray-500" />
      </motion.span>
    ) : (
      <ChevronRight
        className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
      />
    )

  const ChildrenList = () => {
    const children = node.nodes?.map((node) => (
      <FilesystemItem 
        node={node} 
        key={node.name} 
        animated={animated} 
        onFileSelect={onFileSelect}
        selectedFile={selectedFile}
        openFolders={openFolders}
        onFolderToggle={onFolderToggle}
      />
    ))

    if (animated) {
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="pl-6 overflow-hidden flex flex-col justify-end list-none"
            >
              {children}
            </motion.ul>
          )}
        </AnimatePresence>
      )
    }

    return isOpen && <ul className="pl-6 list-none">{children}</ul>
  }

  return (
    <li key={node.name} className="list-none" style={{ listStyle: 'none' }}>
      {node.nodes && node.nodes.length > 0 ? (
        // FOLDER RENDERING
        <>
          <div className="flex items-center gap-1.5 py-1">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                e.nativeEvent.stopImmediatePropagation();
                if (onFolderToggle) {
                  onFolderToggle(node.name);
                }
              }} 
              className="p-1 -m-1 z-10 relative"
            >
              <ChevronIcon />
            </button>
            <Folder className="size-6 text-sky-500 fill-sky-500" />
            <span className={jakartaFont.className}>
              {node.name}
            </span>
          </div>
          <ChildrenList />
        </>
      ) : (
        // FILE RENDERING - Completely separate from folder logic
        <div 
          className="flex items-center gap-1.5 py-1 cursor-pointer hover:text-blue-600"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            if (onFileSelect) {
              onFileSelect(node.name);
            }
          }}
        >
          <File className="ml-[22px] size-6 text-gray-900" />
          <span className={`${jakartaFont.className} ${selectedFile === node.name ? 'font-bold text-blue-600' : ''}`}>
            {node.name}
          </span>
        </div>
      )}
    </li>
  )
}
