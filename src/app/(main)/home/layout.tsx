import React from 'react';
import { Metadata } from 'next';
import { secFont } from '@/lib/config/fonts';

export const metadata: Metadata = {
  title: 'Vamsi Batchu | Product Design Leader',
  description: 'Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.',
};

export default function HomeNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${secFont.variable} min-h-screen overflow-hidden px-4 lg:px-12 bg-black lg:bg-black`}>
      {children}
    </div>
  );
} 