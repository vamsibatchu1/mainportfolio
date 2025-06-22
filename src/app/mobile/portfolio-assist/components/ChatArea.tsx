import React from 'react';
import { UserPrompt } from './UserPrompt';
import { Response, ResponseContent } from './Response';

export interface ChatMessage {
  id: string;
  type: 'user' | 'response';
  content: string | ResponseContent;
  timestamp: Date;
}

interface ChatAreaProps {
  messages: ChatMessage[];
}

export const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <div className="w-full px-6 flex-1 overflow-y-auto">
      <div className="flex flex-col gap-10 items-start justify-start w-full">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 w-full py-8">
            Start a conversation by asking a question below
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.type === 'user' ? (
                <UserPrompt message={message.content as string} />
              ) : (
                <Response content={message.content as ResponseContent} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}; 