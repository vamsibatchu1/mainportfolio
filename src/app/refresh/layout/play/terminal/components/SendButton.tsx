import React from 'react';

interface SendButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function SendButton({ onClick, disabled = false }: SendButtonProps) {
  return (
    <button 
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full transition-colors w-8 h-8 flex items-center justify-center text-xs ${
        disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
      }`}
    >
      ▶
    </button>
  );
}