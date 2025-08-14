'use client';

import React from 'react';
import { TextGenerateEffect } from './textgenerate';
import { jakartaFont } from '../fonts';

const words = ` Currently at rocket mortgage. Leading 0 to 1 AI product experiences for enterprise products & creating next generation financial tools.`;

export function StableTextEffect() {
  return (
    <TextGenerateEffect 
      duration={2} 
      filter={false} 
      words={words}
      className={`${jakartaFont.className} font-bold text-[20px] leading-[90%] tracking-[-0.05em]`}
    />
  );
} 