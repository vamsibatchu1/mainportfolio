"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Current from './current';
import StatusCard from './components/StatusCard';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      // If first visit, start from the past page
      sessionStorage.setItem('hasVisited', 'true');
      router.push('/experiments/old-home/past');
    }
  }, [router]);

  return (
    <main>
      <StatusCard />
      <Current />
    </main>
  );
} 