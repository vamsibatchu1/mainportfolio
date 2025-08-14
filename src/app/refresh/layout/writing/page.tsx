'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jakartaFont } from '../../../fonts';
import { PenTool, StickyNote, Type, Sparkles, Plus } from 'lucide-react';

interface StickyNote {
  id: number;
  x: number;
  y: number;
  color: string;
  text: string;
  width: number;
  height: number;
  isSelected: boolean;
}

export default function WritingPage() {
  const [selectedTool, setSelectedTool] = useState('cursor');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#3B82F6'); // Light blue default
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>([]);
  const [isPlacingSticky, setIsPlacingSticky] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, stickyX: 0, stickyY: 0 });
  const [editingStickyId, setEditingStickyId] = useState<number | null>(null);

  const colors = [
    '#FFFFFF', '#F3F4F6', '#FECACA', '#FED7AA', '#FEF3C7', 
    '#D1FAE5', '#A7F3D0', '#BFDBFE', '#C7D2FE', '#F3E8FF'
  ];

  const handleToolClick = (tool: string) => {
    setSelectedTool(tool);
    if (tool === 'sticky') {
      setShowColorPicker(true);
      setIsPlacingSticky(false); // Don't start placing immediately, wait for color selection
    } else {
      setShowColorPicker(false);
      setIsPlacingSticky(false);
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setShowColorPicker(false);
    setIsPlacingSticky(true); // Start placing after color is selected
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    // Unselect all sticky notes when clicking on canvas
    setStickyNotes(stickyNotes.map(sticky => ({ ...sticky, isSelected: false })));
    
    if (isPlacingSticky) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newSticky: StickyNote = {
        id: Date.now(),
        x,
        y,
        color: selectedColor,
        text: '',
        width: 200,
        height: 150,
        isSelected: false
      };
      
      setStickyNotes([...stickyNotes, newSticky]);
      setShowColorPicker(false);
      setIsPlacingSticky(false);
      setSelectedTool('cursor');
    }
  };

  const handleStickyClick = (e: React.MouseEvent, stickyId: number) => {
    e.stopPropagation();
    setStickyNotes(stickyNotes.map(sticky => 
      sticky.id === stickyId 
        ? { ...sticky, isSelected: !sticky.isSelected }
        : { ...sticky, isSelected: false }
    ));
  };

  const handleStickyDoubleClick = (e: React.MouseEvent, stickyId: number) => {
    e.stopPropagation();
    setEditingStickyId(stickyId);
    setStickyNotes(stickyNotes.map(sticky => 
      sticky.id === stickyId 
        ? { ...sticky, isSelected: true }
        : { ...sticky, isSelected: false }
    ));
  };

  const handleStickyMouseDown = (e: React.MouseEvent, stickyId: number) => {
    e.stopPropagation();
    const sticky = stickyNotes.find(s => s.id === stickyId);
    if (!sticky) return;
    
    // Only start dragging if not editing
    if (editingStickyId === stickyId) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      stickyX: sticky.x,
      stickyY: sticky.y
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setStickyNotes(prevStickyNotes => prevStickyNotes.map(s => 
        s.id === stickyId 
          ? { ...s, x: dragStart.stickyX + deltaX, y: dragStart.stickyY + deltaY }
          : s
      ));
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleStickyTextChange = (stickyId: number, text: string) => {
    setStickyNotes(stickyNotes.map(sticky => 
      sticky.id === stickyId ? { ...sticky, text } : sticky
    ));
  };





  const handleResizeStart = (e: React.MouseEvent, stickyId: number, corner: string) => {
    e.stopPropagation();
    const sticky = stickyNotes.find(s => s.id === stickyId);
    if (!sticky) return;
    
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: sticky.width,
      height: sticky.height
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      let newWidth = resizeStart.width;
      let newHeight = resizeStart.height;
      
      // Adjust size based on corner being dragged
      if (corner.includes('right')) {
        newWidth = Math.max(100, resizeStart.width + deltaX);
      }
      if (corner.includes('bottom')) {
        newHeight = Math.max(80, resizeStart.height + deltaY);
      }
      
      setStickyNotes(stickyNotes.map(s => 
        s.id === stickyId ? { ...s, width: newWidth, height: newHeight } : s
      ));
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <motion.div 
      className={`w-full h-screen relative overflow-hidden ${isPlacingSticky ? 'cursor-crosshair' : 'cursor-default'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `
          radial-gradient(circle, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px'
      }}
      onClick={handleCanvasClick}
    >
      {/* FigJam-style dotted canvas background */}
      
      {/* Sticky Notes */}
      {stickyNotes.map((sticky) => (
        <div
          key={sticky.id}
          className={`absolute ${sticky.isSelected ? 'ring-2 ring-blue-500' : ''}`}
          style={{
            left: sticky.x,
            top: sticky.y,
            width: sticky.width,
            height: sticky.height,
            backgroundColor: sticky.color,
            cursor: isDragging ? 'grabbing' : (editingStickyId === sticky.id ? 'text' : 'grab')
          }}
          onClick={(e) => handleStickyClick(e, sticky.id)}
          onDoubleClick={(e) => handleStickyDoubleClick(e, sticky.id)}
          onMouseDown={(e) => handleStickyMouseDown(e, sticky.id)}
        >
          <div className="w-full h-full p-3 relative">
            <textarea
              className={`${jakartaFont.className} w-full h-full bg-transparent border-none outline-none resize-none text-black placeholder-gray-600`}
              value={sticky.text}
              onChange={(e) => handleStickyTextChange(sticky.id, e.target.value)}
              placeholder="Type anything..."
              style={{ fontSize: '14px' }}
              readOnly={editingStickyId !== sticky.id}
              onBlur={() => setEditingStickyId(null)}
            />
            
            {/* Resize Handles - only show when selected */}
            {sticky.isSelected && (
              <>
                {/* Top-left corner */}
                <div 
                  className="absolute -top-1 -left-1 w-3 h-3 bg-white border-2 border-blue-500 cursor-nw-resize"
                  onMouseDown={(e) => handleResizeStart(e, sticky.id, 'top-left')}
                />
                {/* Top-right corner */}
                <div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-blue-500 cursor-ne-resize"
                  onMouseDown={(e) => handleResizeStart(e, sticky.id, 'top-right')}
                />
                {/* Bottom-left corner */}
                <div 
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border-2 border-blue-500 cursor-sw-resize"
                  onMouseDown={(e) => handleResizeStart(e, sticky.id, 'bottom-left')}
                />
                {/* Bottom-right corner */}
                <div 
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border-2 border-blue-500 cursor-se-resize"
                  onMouseDown={(e) => handleResizeStart(e, sticky.id, 'bottom-right')}
                />
              </>
            )}
          </div>
        </div>
      ))}
      
      {/* Color Picker */}
      {showColorPicker && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white rounded-[20px] p-4 shadow-lg">
            <div className="flex items-center gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-purple-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleColorSelect(color);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Dock Element */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-[20px] p-5 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div 
                className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer ${
                  selectedTool === 'pen' ? 'bg-purple-500' : ''
                }`}
                onClick={() => handleToolClick('pen')}
              >
                <PenTool size={20} className={selectedTool === 'pen' ? 'text-white' : 'text-gray-600'} />
              </div>
              <div className={`${jakartaFont.className} absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                Pen
              </div>
            </div>
            <div className="relative group">
              <div 
                className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer ${
                  selectedTool === 'sticky' ? 'bg-purple-500' : ''
                }`}
                onClick={() => handleToolClick('sticky')}
              >
                <StickyNote size={20} className={selectedTool === 'sticky' ? 'text-white' : 'text-gray-600'} />
              </div>
              <div className={`${jakartaFont.className} absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                Sticky Note
              </div>
            </div>
            <div className="relative group">
              <div 
                className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer ${
                  selectedTool === 'text' ? 'bg-purple-500' : ''
                }`}
                onClick={() => handleToolClick('text')}
              >
                <Type size={20} className={selectedTool === 'text' ? 'text-white' : 'text-gray-600'} />
              </div>
              <div className={`${jakartaFont.className} absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                Text
              </div>
            </div>
            <div className="relative group">
              <div 
                className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer ${
                  selectedTool === 'magic' ? 'bg-purple-500' : ''
                }`}
                onClick={() => handleToolClick('magic')}
              >
                <Sparkles size={20} className={selectedTool === 'magic' ? 'text-white' : 'text-gray-600'} />
              </div>
              <div className={`${jakartaFont.className} absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                Magic
              </div>
            </div>
            <div className="relative group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Plus size={20} className="text-gray-600" />
              </div>
              <div className={`${jakartaFont.className} absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
