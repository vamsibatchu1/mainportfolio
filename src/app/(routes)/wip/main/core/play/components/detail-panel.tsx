'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { CanvasCard } from './infinite-canvas';

interface DetailPanelProps {
  card: CanvasCard | null;
  onClose: () => void;
}

export default function DetailPanel({ card, onClose }: DetailPanelProps) {
  return (
    <AnimatePresence>
      {card && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="absolute top-0 right-0 w-[30%] h-full bg-white overflow-y-auto z-40 shadow-2xl"
        >
          <div className="p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close panel"
            >
              <X size={24} />
            </button>

            {/* Menu dropdown */}
            <div className="mb-8">
              <select className="text-sm text-gray-600 border-none bg-transparent cursor-pointer hover:text-gray-900 transition-colors">
                <option>Menu → References</option>
              </select>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{card.title}</h1>

            {/* Metadata */}
            <div className="space-y-3 mb-8 text-sm">
              {card.author && (
                <div>
                  <span className="font-semibold text-gray-700">AUTHOR:</span>{' '}
                  <span className="text-gray-600">{card.author}</span>
                </div>
              )}
              {card.year && (
                <div>
                  <span className="font-semibold text-gray-700">YEAR:</span>{' '}
                  <span className="text-gray-600">{card.year}</span>
                </div>
              )}
              {card.source && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">SOURCE:</span>
                  <span className="text-gray-600">{card.source}</span>
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors">
                    ARCHIVE
                  </button>
                </div>
              )}
              {card.keyStrength && (
                <div>
                  <span className="font-semibold text-gray-700">KEY STRENGTH:</span>{' '}
                  <span className="text-gray-600">{card.keyStrength}</span>
                </div>
              )}
              {card.type && (
                <div>
                  <span className="font-semibold text-gray-700">TYPE:</span>{' '}
                  <span className="text-gray-600">{card.type}</span>
                </div>
              )}
              {card.kind && (
                <div>
                  <span className="font-semibold text-gray-700">KIND:</span>{' '}
                  <span className="text-gray-600">{card.kind}</span>
                </div>
              )}
            </div>

            {/* Introduction */}
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              This entry sits within our library of influences; works we admire that inform our practice. Something out of place? Contact us.
            </p>

            {/* Description */}
            {card.description && (
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">DESCRIPTION</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

