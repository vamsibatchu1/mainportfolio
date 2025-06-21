import React from 'react';

export const PersonIcon: React.FC = () => {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row gap-2 items-center justify-end">
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-row gap-2 items-center justify-end p-2">
            <div className="relative shrink-0 w-5 h-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5"/>
                <path d="M20 21a8 8 0 0 0-16 0"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 