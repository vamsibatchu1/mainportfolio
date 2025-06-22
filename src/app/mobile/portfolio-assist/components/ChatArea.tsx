import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPrompt } from './UserPrompt';
import { Response, ResponseContent } from './Response';
import { LoadingComponent } from './LoadingComponent';

export interface ChatMessage {
  id: string;
  type: 'user' | 'response';
  content: string | ResponseContent;
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatAreaProps {
  messages: ChatMessage[];
}



// Animation variants
const messageVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const loadingToContentVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message when new messages are added
  useEffect(() => {
    if (messages.length > 0) {
      // Add a small delay to ensure DOM is updated and animations have started
      setTimeout(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 150);
    }
  }, [messages]);

  // Additional scroll specifically for when loading completes
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'response' && !lastMessage.isLoading) {
      setTimeout(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 300);
    }
  }, [messages]);

  return (
    <div 
      ref={chatContainerRef}
      className="w-full px-6 flex-1 overflow-y-auto"
    >
      <div className="flex flex-col gap-10 items-start justify-start w-full">
        {messages.length === 0 ? (
          <motion.div 
            className="text-center text-gray-500 w-full py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div 
                key={message.id} 
                className="w-full"
                ref={index === messages.length - 1 ? lastMessageRef : null}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                {message.type === 'user' ? (
                  <UserPrompt message={message.content as string} />
                ) : (
                  <div className="relative shrink-0 w-full">
                    <div className="relative size-full">
                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-0 pr-20 py-0 relative w-full">
                        <AnimatePresence mode="wait">
                          {message.isLoading ? (
                            <motion.div
                              key="loading"
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <LoadingComponent />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="content"
                              variants={loadingToContentVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <Response content={message.content as ResponseContent} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}; 