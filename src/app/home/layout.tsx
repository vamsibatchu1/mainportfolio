import React from 'react';
import { Metadata } from 'next';
import { louize } from '../fonts';

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
    <div className={`${louize.variable} min-h-screen overflow-hidden`}>
      {children}
    </div>
  );
} 