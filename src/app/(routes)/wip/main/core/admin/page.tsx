'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageScanner from './components/ImageScanner';
import ImageDatabase from './components/ImageDatabase';
import { jakartaFont } from '@/app/fonts';

interface ImageInfo {
  id: string;
  url: string;
  page: string;
  src: string;
  alt?: string;
  fileName: string;
  localPath: string;
}

export default function AdminPage() {
  const [websiteUrl, setWebsiteUrl] = useState('https://www.batchu.com');
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);

  const handleScanComplete = (scannedImages: ImageInfo[]) => {
    setImages(scannedImages);
    setIsScanning(false);
  };

  const handleImageSelect = (image: ImageInfo | null) => {
    setSelectedImage(image);
  };

  const handleImageReplace = async (imageId: string, newImageFile: File) => {
    try {
      const formData = new FormData();
      formData.append('image', newImageFile);
      formData.append('imageId', imageId);
      formData.append('localPath', images.find(img => img.id === imageId)?.localPath || '');

      const response = await fetch('/api/admin/replace-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Refresh images after replacement
        alert('Image replaced successfully!');
        // Optionally re-scan or update the image list
      } else {
        alert('Failed to replace image');
      }
    } catch (error) {
      console.error('Error replacing image:', error);
      alert('Error replacing image');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-10 pt-10 gap-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      >
        <h1 className={`${jakartaFont.className} font-bold text-4xl text-black mb-2`}>
          Portfolio Admin
        </h1>
        <p className={`${jakartaFont.className} text-gray-600 text-lg`}>
          Manage and update images across your portfolio
        </p>
      </motion.div>

      {/* Image Scanner Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <ImageScanner
          websiteUrl={websiteUrl}
          onScanComplete={handleScanComplete}
          isScanning={isScanning}
          setIsScanning={setIsScanning}
        />
      </motion.div>

      {/* Image Database Section */}
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <ImageDatabase
            images={images}
            onImageSelect={handleImageSelect}
            onImageReplace={handleImageReplace}
            selectedImage={selectedImage}
          />
        </motion.div>
      )}
    </div>
  );
}

