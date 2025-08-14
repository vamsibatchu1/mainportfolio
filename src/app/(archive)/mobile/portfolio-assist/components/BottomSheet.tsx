import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TONES = [
  'Serious',
  'Roast me',
  'Funny',
  'Talk to me like a product manager',
];
const SUMMARIES = [
  'Short',
  'Detail',
  'Action points',
];

export default function BottomSheet({
  open,
  onClose,
  selectedTone,
  setSelectedTone,
  selectedSummary,
  setSelectedSummary,
}: {
  open: boolean;
  onClose: () => void;
  selectedTone: string;
  setSelectedTone: (tone: string) => void;
  selectedSummary: string;
  setSelectedSummary: (summary: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-full max-w-md mx-auto rounded-t-3xl bg-[#f7f7f7] shadow-2xl p-6 pb-10 relative"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          >
            {/* Close Button */}
            
            {/* Intro */}
            <div className="mb-6 text-left">
              <div className="flex flex-row items-center justify-between w-full mb-2">
                <div className="font-kodemono text-[18px] text-[#111]">ABOUT THIS EXPERIMENT</div>
                <button
                  className="bg-[#ededed] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e1e1e1] transition-colors"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-[#222]" />
                </button>
              </div>

              <div className="font-jakarta text-[#545454] text-[15px] leading-snug font-medium">
                This playful chatbot was built to explore creative, interactive AI for portfolios.
                Try different tones and summary types to see how the assistant adapts.
                Have fun experimenting with the responses!
              </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#ededed] mb-6"></div>

            {/* Tone Selection */}
            <div className="mb-6">
              <div className="font-kodemono text-[18px] text-[#222] mb-3">SELECT YOUR TONE</div>
              <div className="flex flex-row gap-2 flex-wrap">
                {TONES.map(tone => (
                  <button
                    key={tone}
                    className={`px-5 py-2 rounded-full font-jakarta font-medium text-[14px] border transition-all duration-150 ${selectedTone === tone ? 'bg-[#222] text-white border-[#222]' : 'bg-[#ededed] text-[#222] border-[#ededed] hover:bg-[#e1e1e1]'}`}
                    onClick={() => setSelectedTone(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#ededed] mb-6"></div>

            {/* Summary Type Selection */}
            <div>
              <div className="font-kodemono text-[18px] text-[#222] mb-3">CHOOSE YOUR SUMMARY TYPE</div>
              <div className="flex flex-row gap-2 flex-wrap">
                {SUMMARIES.map(summary => (
                  <button
                    key={summary}
                    className={`px-5 py-2 rounded-full font-jakarta font-medium text-[14px] border transition-all duration-150 ${selectedSummary === summary ? 'bg-[#222] text-white border-[#222]' : 'bg-[#ededed] text-[#222] border-[#ededed] hover:bg-[#e1e1e1]'}`}
                    onClick={() => setSelectedSummary(summary)}
                  >
                    {summary}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 