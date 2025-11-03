'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
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

interface ImageAttributes {
  fileName?: string;
  type: string;
  dimensions: string;
  fileSize: string;
}

interface ImageDatabaseProps {
  images: ImageInfo[];
  onImageSelect: (image: ImageInfo) => void;
  onImageReplace: (imageId: string, newImageFile: File) => void;
  selectedImage: ImageInfo | null;
}

export default function ImageDatabase({
  images,
  onImageSelect,
  onImageReplace,
  selectedImage,
}: ImageDatabaseProps) {
  const [selectedPage, setSelectedPage] = useState<string>('all');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [currentImageAttrs, setCurrentImageAttrs] = useState<ImageAttributes | null>(null);
  const [newImageAttrs, setNewImageAttrs] = useState<ImageAttributes | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get unique pages
  const pages = ['all', ...Array.from(new Set(images.map(img => img.page)))];

  // Filter images by page
  const filteredImages = selectedPage === 'all'
    ? images
    : images.filter(img => img.page === selectedPage);

  // Get current image attributes when selected image changes
  useEffect(() => {
    if (selectedImage && showModal) {
      const img = new window.Image();
      img.onload = () => {
        // Get file extension
        const ext = selectedImage.fileName.split('.').pop()?.toUpperCase() || 'UNKNOWN';
        
        // Get file size (try to fetch and get size)
        fetch(selectedImage.src)
          .then(res => res.blob())
          .then(blob => {
            const size = blob.size;
            const sizeKB = (size / 1024).toFixed(2);
            setCurrentImageAttrs({
              type: ext,
              dimensions: `${img.width} × ${img.height}px`,
              fileSize: `${sizeKB} KB`,
            });
          })
          .catch(() => {
            setCurrentImageAttrs({
              type: ext,
              dimensions: `${img.width} × ${img.height}px`,
              fileSize: 'Unknown',
            });
          });
      };
      img.src = selectedImage.src;
    }
  }, [selectedImage, showModal]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadFile(file);

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setNewImagePreview(previewUrl);

      // Get image dimensions
      const img = new window.Image();
      img.onload = () => {
        const ext = file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN';
        const sizeKB = (file.size / 1024).toFixed(2);
        setNewImageAttrs({
          fileName: file.name,
          type: ext,
          dimensions: `${img.width} × ${img.height}px`,
          fileSize: `${sizeKB} KB`,
        });
      };
      img.src = previewUrl;
    }
  };

  const handleImageClick = (image: ImageInfo) => {
    onImageSelect(image);
    setShowModal(true);
    setUploadFile(null);
    setNewImagePreview(null);
    setCurrentImageAttrs(null);
    setNewImageAttrs(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUploadFile(null);
    if (newImagePreview) {
      URL.revokeObjectURL(newImagePreview);
    }
    setNewImagePreview(null);
    setCurrentImageAttrs(null);
    setNewImageAttrs(null);
    onImageSelect(null);
  };

  const handleReplace = () => {
    if (selectedImage && uploadFile) {
      onImageReplace(selectedImage.id, uploadFile);
      setUploadFile(null);
      if (newImagePreview) {
        URL.revokeObjectURL(newImagePreview);
      }
      setNewImagePreview(null);
      setCurrentImageAttrs(null);
      setNewImageAttrs(null);
      setShowModal(false);
      onImageSelect(null);
    }
  };

  return (
    <div className={`w-full bg-white border border-gray-200 rounded-lg p-6 ${fourFont.className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`${fourFont.className} font-semibold text-xl text-black`}>
          Image Database ({images.length} images)
        </h2>
        <div className="flex gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              className={`${fourFont.className} px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPage === page
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
              selectedImage?.id === image.id
                ? 'border-black ring-2 ring-black ring-offset-2'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="aspect-square relative bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt || image.fileName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 bg-white">
              <p className={`${fourFont.className} text-xs text-gray-600 truncate`}>
                {image.fileName}
              </p>
              <p className={`${fourFont.className} text-xs text-gray-400 truncate`}>
                {image.page}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Replace Image Modal */}
      {showModal && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto ${fourFont.className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`${fourFont.className} font-semibold text-2xl text-black mb-1`}>
                  Replace Image
                </h3>
                <p className={`${fourFont.className} text-sm text-gray-600`}>
                  {selectedImage.fileName}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className={`${fourFont.className} text-2xl text-gray-400 hover:text-black transition-colors`}
              >
                ×
              </button>
            </div>

            {/* Path and Page Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className={`${fourFont.className} text-sm text-gray-600 mb-2`}>
                <strong>Current Path:</strong> {selectedImage.localPath}
              </p>
              <p className={`${fourFont.className} text-sm text-gray-600`}>
                <strong>Page:</strong> {selectedImage.page}
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Left Column: Current Image */}
              <div className="flex flex-col gap-3">
                <h4 className={`${fourFont.className} font-semibold text-lg text-black`}>
                  Current Image
                </h4>
                <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt || selectedImage.fileName}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Current Image Attributes */}
                {currentImageAttrs && (
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                      <strong>Name:</strong> {selectedImage.fileName}
                    </p>
                    <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                      <strong>Type:</strong> {currentImageAttrs.type}
                    </p>
                    <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                      <strong>Dimensions:</strong> {currentImageAttrs.dimensions}
                    </p>
                    <p className={`${fourFont.className} text-xs text-gray-600`}>
                      <strong>File Size:</strong> {currentImageAttrs.fileSize}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Choose New Image */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h4 className={`${fourFont.className} font-semibold text-lg text-black`}>
                    Choose New Image
                  </h4>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                    type="button"
                  >
                    <Upload size={24} className="text-black" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
                {/* New Image Preview */}
                {newImagePreview ? (
                  <>
                    <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={newImagePreview}
                        alt="New image preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* New Image Attributes */}
                    {newImageAttrs && (
                      <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                          <strong>Name:</strong> {newImageAttrs.fileName}
                        </p>
                        <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                          <strong>Type:</strong> {newImageAttrs.type}
                        </p>
                        <p className={`${fourFont.className} text-xs text-gray-600 mb-1`}>
                          <strong>Dimensions:</strong> {newImageAttrs.dimensions}
                        </p>
                        <p className={`${fourFont.className} text-xs text-gray-600`}>
                          <strong>File Size:</strong> {newImageAttrs.fileSize}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="aspect-square bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <p className={`${fourFont.className} text-sm text-gray-400`}>
                      No image selected
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Replace Button */}
            <div className="flex justify-end">
              <button
                onClick={handleReplace}
                disabled={!uploadFile}
                className={`${fourFont.className} px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
              >
                Replace Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

