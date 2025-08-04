import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageList from './MessageList';
import LoadingIndicator from './LoadingIndicator';
import SuggestionOptions from './SuggestionOptions';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
  suggestionOptions: string[];
  onSuggestionClick: (suggestion: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  showContent?: boolean;
}

export default function ChatArea({ 
  messages, 
  isLoading, 
  suggestionOptions, 
  onSuggestionClick, 
  messagesEndRef,
  showContent = true
}: ChatAreaProps) {
  return (
    <div className="bg-[#fff] h-[400px] overflow-y-auto p-4 font-mono text-sm">
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MessageList messages={messages} />
              
              <LoadingIndicator isLoading={isLoading} />
            </motion.div>

            <SuggestionOptions 
              suggestions={suggestionOptions}
              onSuggestionClick={onSuggestionClick}
              visible={messages.length === 1 && !isLoading}
            />
          </>
        )}
      </AnimatePresence>
      
      <div ref={messagesEndRef} />
    </div>
  );
}