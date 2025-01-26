import { useEffect, useState } from 'react';
import { benne } from '@/app/fonts';

interface TypewriterTextProps {
  text: string;
}

export function TypewriterText({ text }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  
  // ... existing useEffect and logic ...

  return (
    <pre
      className={`
        ${benne.className} 
        whitespace-pre-wrap 
        text-[24px] md:text-[32px] lg:text-[40px]
        leading-tight
      `}
    >
      {displayText}
    </pre>
  );
} 