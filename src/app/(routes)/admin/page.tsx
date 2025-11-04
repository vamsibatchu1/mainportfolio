'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageScanner from '../wip/main/core/admin/components/ImageScanner';
import ImageDatabase from '../wip/main/core/admin/components/ImageDatabase';
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
        alert('Image replaced successfully! Refresh the page to see changes.');
        // Optionally re-scan or update the image list
        setSelectedImage(null);
      } else {
        const error = await response.json();
        alert(`Failed to replace image: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error replacing image:', error);
      alert('Error replacing image');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .admin-page input::placeholder {
          font-family: var(--font-four), monospace !important;
        }
        .admin-page input {
          font-family: var(--font-four), monospace !important;
        }
        .admin-page * {
          font-family: var(--font-four), monospace !important;
        }
      `}} />
      <div className={`fixed inset-0 bg-white overflow-y-auto ${fourFont.className} admin-page`}>
        <div className="w-full min-h-full flex flex-col p-10 pt-10 gap-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      >
        <h1 className={`${fourFont.className} font-bold text-4xl text-black mb-2`}>
          Portfolio Admin
        </h1>
        <p className={`${fourFont.className} text-gray-600 text-lg`}>
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
      </div>
    </>
  );
}

