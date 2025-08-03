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
      className="bg-black text-white rounded-full hover:bg-gray-800 transition-colors w-8 h-8 flex items-center justify-center text-xs"
    >
      ▶
    </button>
  );
}