import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingComponentProps {
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingComponent({ 
  message = "Here goes the loading message", 
  className,
  size = 'md'
}: LoadingComponentProps) {
  const sizeClasses = {
    sm: {
      container: 'gap-2',
      icon: 'w-3 h-3',
      text: 'text-sm'
    },
    md: {
      container: 'gap-[10px]',
      icon: 'w-4 h-4',
      text: 'text-base'
    },
    lg: {
      container: 'gap-3',
      icon: 'w-6 h-6',
      text: 'text-lg'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div 
      className={cn(
        'flex items-center relative w-full',
        currentSize.container,
        className
      )}
      data-name="loading"
    >
      <div 
        className={cn(
          'relative shrink-0',
          currentSize.icon
        )}
        data-name="loading-01"
      >
        <Loader2 
          className={cn(
            'animate-spin text-foreground',
            currentSize.icon
          )}
          data-name="Icon"
        />
      </div>
      <p 
        className={cn(
          'font-inter font-normal leading-5 not-italic relative shrink-0 text-gray-600 whitespace-pre',
          currentSize.text
        )}
        data-node-id="216:8746"
      >
        {message}
      </p>
    </div>
  );
}
