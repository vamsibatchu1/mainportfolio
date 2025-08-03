import React from 'react';

interface SuggestionOptionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  visible: boolean;
}

export default function SuggestionOptions({ suggestions, onSuggestionClick, visible }: SuggestionOptionsProps) {
  if (!visible) return null;

  return (
    <div className="flex flex-col space-y-2 mt-4">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className="text-left text-gray-500 hover:text-gray-700 font-sf-pro text-sm px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer w-fit bg-white"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}