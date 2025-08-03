import React from 'react';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export default function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div className="flex justify-start">
      <div className="text-black max-w-[70%] font-sf-pro text-sm flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
        <span>Thinking...</span>
      </div>
    </div>
  );
}