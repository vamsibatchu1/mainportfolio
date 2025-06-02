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
      <div className="rounded-[10px] rounded-tl-[4px] px-4 py-3 max-w-[85%] border" 
           style={{ 
             backgroundColor: 'rgba(23, 23, 25, 0.53)',
             borderColor: '#3c3c3c'
           }}>
        <div className={`${interFont.className} text-sm leading-relaxed`} style={{ color: '#B0B0B0' }}>
          {text}
        </div>
      </div>
    </motion.div>
  );
};

// Suggestion chip component
const SuggestionChip = ({ 
  text, 
  onClick 
}: { 
  text: string; 
  onClick: () => void; 
}) => {
  return (
    <button
      onClick={onClick}
      className={`${interFont.className} px-3 py-2 text-xs rounded-md border backdrop-blur-sm hover:bg-[#0D74CE]/10 hover:border-[#0D74CE]/50 transition-all duration-200 text-[#fff] whitespace-nowrap`}
      style={{
        backgroundColor: 'rgba(23, 23, 25, 0.53)',
        borderColor: '#3c3c3c'
      }}
    >
      {text}
    </button>
  );
};

// Custom shimmer placeholder component
const ShimmerPlaceholder = ({ 
  text, 
  show 
}: { 
  text: string; 
  show: boolean; 
}) => {
  if (!show) return null;
  
  return (
    <motion.div 
      className="absolute inset-0 flex items-start pl-4 py-4 pointer-events-none"
      style={{ fontFamily: interFont.style.fontFamily }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TextShimmerWave 
        className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] text-sm'
        duration={2}
        spread={0.8}
      >
        {text}
      </TextShimmerWave>
    </motion.div>
  );
};

const DemoOne = ({ onSend }: { onSend: (message: string, files?: File[]) => void }) => {
  const [hasStartedTyping, setHasStartedTyping] = React.useState(false);
  const [showInputBox, setShowInputBox] = React.useState(false);
  const [showChips, setShowChips] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const suggestionQuestions = [
    "What are you currently working on?",
    "What are your colleagues saying about you?"  ];

  // Choreographed animation sequence
  React.useEffect(() => {
    // Start input box animation first
    const inputTimer = setTimeout(() => {
      setShowInputBox(true);
    }, 400);

    // Start chips animation after input box
    const chipsTimer = setTimeout(() => {
      setShowChips(true);
    }, 800);

    // Show hint last - after everything else is in place
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 1200);

    return () => {
      clearTimeout(inputTimer);
      clearTimeout(chipsTimer);
      clearTimeout(hintTimer);
    };
  }, []);

  const handleSend = (message: string, files?: File[]) => {
    onSend(message, files);
  };

  const handleChipClick = (question: string) => {
    setHasStartedTyping(true); // Hide hint
    setShowChips(false); // Hide chips when one is clicked
    handleSend(question);
  };

  // Track when user starts typing by listening to focus events
  React.useEffect(() => {
    const handleInputFocus = () => {
      setHasStartedTyping(true); // Only hide the hint, not the chips
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('focusin', handleInputFocus);
      
      return () => {
        document.removeEventListener('focusin', handleInputFocus);
      };
    }
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-3 p-2">
      <AnimatePresence>
        {showChips && (
          <motion.div
            className="flex flex-wrap gap-2 w-full justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {suggestionQuestions.map((question) => (
              <SuggestionChip
                key={question}
                text={question}
                onClick={() => handleChipClick(question)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="w-full relative"
        initial={{ opacity: 0, y: 60 }}
        animate={showInputBox ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <PromptInputBox 
          onSend={handleSend}
          placeholder=""
        />
        <ShimmerPlaceholder 
          text="Ask anything that you want to know about me" 
          show={showHint && !hasStartedTyping}
        />
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
                className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] text-sm'
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