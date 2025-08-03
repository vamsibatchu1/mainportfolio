import React from 'react';
import SendButton from './SendButton';

interface InputAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
}

export default function InputArea({ value, onChange, onSubmit, placeholder = "Ask me anything" }: InputAreaProps) {
  return (
    <div className="bg-[#ECECEC] rounded-b-lg p-4">
      <form onSubmit={onSubmit} className="flex items-center space-x-3">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none font-sf-pro placeholder-gray-500"
        />
        <SendButton onClick={() => {}} />
      </form>
    </div>
  );
}