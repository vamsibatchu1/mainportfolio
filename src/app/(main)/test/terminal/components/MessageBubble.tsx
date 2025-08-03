import React from 'react';

interface Message {
  id: string;
  type: 'command' | 'output';
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`flex ${message.type === 'command' ? 'justify-end' : 'justify-start'}`}>
      {message.type === 'command' ? (
        // User message (right side, blue background, white text)
        <div className="bg-[#007AFF] text-white px-3 py-2 rounded-lg max-w-[80%] font-sf-pro text-sm">
          {message.content}
        </div>
      ) : (
        // System/AI response (left side, no background, black text)
        <div className="text-black max-w-[80%] font-sf-pro text-sm">
          {message.content}
        </div>
      )}
    </div>
  );
}