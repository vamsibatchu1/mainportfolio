'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PromptInputBox } from '../components/ai-prompt-box';
import { TextShimmerWave } from '../components/text-shimmer-wave';
import { interFont } from '@/app/fonts';

const contentSpring = { type: "spring", stiffness: 150, damping: 25 };

// Loading animation component
const LoadingDots = () => (
  <div className="flex items-center gap-1 py-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

// Chat bubble response component
const ChatBubbleResponse = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex items-start gap-3 w-full"
    >
      {/* Avatar */}
      
      {/* Message bubble */}
      <div className="rounded-[10px] rounded-tl-[4px] px-4 py-3 max-w-[85%] bg-gradient-to-r from-[#0D74CE] to-[#5EB1EF]">
        <div className={`${interFont.className} text-sm leading-relaxed`} style={{ color: '#fff' }}>
          {text}
        </div>
      </div>
    </motion.div>
  );
};

const DemoOne = ({ onSend }: { onSend: (message: string, files?: File[]) => void }) => {
  const [hasStartedTyping, setHasStartedTyping] = React.useState(false);
  const [showInputBox, setShowInputBox] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  // Choreographed animation sequence
  React.useEffect(() => {
    // Start input box animation after content loads
    const inputTimer = setTimeout(() => {
      setShowInputBox(true);
    }, 400);

    // Start hint animation after input box
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 800);

    return () => {
      clearTimeout(inputTimer);
      clearTimeout(hintTimer);
    };
  }, []);

  const handleSend = (message: string, files?: File[]) => {
    onSend(message, files);
    // Don't reset hasStartedTyping - hint should never come back
  };

  // Track when user starts typing by listening to focus events
  React.useEffect(() => {
    const handleInputFocus = () => setHasStartedTyping(true);
    const handleInputBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'TEXTAREA' && (target as HTMLTextAreaElement).value.trim() === '') {
        setHasStartedTyping(false);
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('focusin', handleInputFocus);
      document.addEventListener('focusout', handleInputBlur);
      
      return () => {
        document.removeEventListener('focusin', handleInputFocus);
        document.removeEventListener('focusout', handleInputBlur);
      };
    }
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-3 p-2">
      <AnimatePresence>
        {!hasStartedTyping && showHint && (
          <motion.div 
            className="w-full text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: interFont.style.fontFamily }}
          >
            <TextShimmerWave 
              className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]'
              duration={2}
              spread={0.8}
            >
              Ask me anything that you want to know about Vamsi Batchu            
            </TextShimmerWave>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={showInputBox ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <PromptInputBox onSend={handleSend} />
      </motion.div>
    </div>
  );
};

const ExperimentsContent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [aiResponse, setAiResponse] = React.useState('');
  const [showResponse, setShowResponse] = React.useState(false);

  const demoResponse = "Hello! I'm an AI assistant. This is a demo response showing the chat bubble style. I can help answer questions about Vamsi Batchu and provide information in a clean, modern chat interface.";

  const handleSend = (message: string, files?: File[]) => {
    console.log('Message received:', message, files);
    
    // Always show loading and response for any message
    setIsLoading(true);
    setShowResponse(false);
    setAiResponse('');
    
    // Show loading for 1.5 seconds, then show full response immediately
    setTimeout(() => {
      setIsLoading(false);
      setAiResponse(demoResponse);
      setShowResponse(true);
    }, 1500);
  };

  return (
    <motion.div
      key="experiments-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="flex flex-col items-start justify-between w-full h-[320px]"
    >
      <div id="ai-response-container" className="w-full min-h-[60px] p-2">
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ fontFamily: interFont.style.fontFamily }}
              className="flex items-start gap-2"
            >
              <TextShimmerWave 
                className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]'
                duration={1.5}
                spread={0.6}
              >
                Thinking
              </TextShimmerWave>
              <LoadingDots />
            </motion.div>
          )}
          
          {showResponse && aiResponse && (
            <motion.div
              key="response"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <ChatBubbleResponse text={aiResponse} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <DemoOne onSend={handleSend} />
    </motion.div>
  );
};

export default ExperimentsContent; 