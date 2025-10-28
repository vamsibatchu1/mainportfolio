import React from 'react';
import { WipLanding } from './components/WipLanding';

// Force this page to be dynamic
export const dynamic = 'force-dynamic';

export default function WipPage() {
  return (
    <div className="min-h-screen">
      <WipLanding />
    </div>
  );
}
