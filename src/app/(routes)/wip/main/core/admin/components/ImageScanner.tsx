'use client';

import React, { useState } from 'react';
import { fourFont } from '@/app/fonts';

interface ImageInfo {
  id: string;
  url: string;
  page: string;
  src: string;
  alt?: string;
  fileName: string;
  localPath: string;
}

interface ImageScannerProps {
  websiteUrl: string;
  onScanComplete: (images: ImageInfo[]) => void;
  isScanning: boolean;
  setIsScanning: (scanning: boolean) => void;
}

export default function ImageScanner({
  websiteUrl,
  onScanComplete,
  isScanning,
  setIsScanning,
}: ImageScannerProps) {
  const [localUrl, setLocalUrl] = useState(websiteUrl);

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/admin/scan-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: localUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        onScanComplete(data.images || []);
      } else {
        alert('Failed to scan website');
        setIsScanning(false);
      }
    } catch (error) {
      console.error('Error scanning website:', error);
      alert('Error scanning website');
      setIsScanning(false);
    }
  };

  return (
    <div className={`w-full bg-white border border-gray-200 rounded-lg p-6 ${fourFont.className}`}>
      <h2 className={`${fourFont.className} font-semibold text-xl text-black mb-4`}>
        Scan Website for Images
      </h2>
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className={`${fourFont.className} text-sm text-gray-600 mb-2 block`}>
            Website URL
          </label>
          <input
            type="text"
            value={localUrl}
            onChange={(e) => setLocalUrl(e.target.value)}
            className={`${fourFont.className} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
            style={{ fontFamily: 'var(--font-four), monospace' }}
            placeholder="https://www.batchu.com"
            disabled={isScanning}
          />
        </div>
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`${fourFont.className} px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
        >
          {isScanning ? 'Scanning...' : 'Scan Images'}
        </button>
      </div>
      {isScanning && (
        <div className={`${fourFont.className} mt-4 text-sm text-gray-500`}>
          Scanning website and extracting images...
        </div>
      )}
    </div>
  );
}

