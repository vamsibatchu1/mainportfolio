import React from 'react';
import ActionBar from '../../home/components/ActionBar';

export default function ActionBarWrapper() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50" style={{ bottom: '20px' }}>
      {/* This wrapper creates additional bottom spacing */}
      <ActionBar />
    </div>
  );
} 