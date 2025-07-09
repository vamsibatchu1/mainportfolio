import React from 'react';
import { ResponseInfoCard1 } from './ResponseInfoCard1';
import { ResponseInfoCard2 } from './ResponseInfoCard2';
import { ResponseInfoCard3 } from './ResponseInfoCard3';
import { ResponseInfoCard4 } from './ResponseInfoCard4';

// Response types for flexibility - defines what kind of content can be displayed
export type ResponseType = 'text' | 'info' | 'image' | 'mixed';

// Info card style types
export type InfoCardStyle = 'style1' | 'style2' | 'style3' | 'style4' | 'default';

// Info card data structure - for displaying structured information with key-value pairs
export interface InfoCardData {
  title: string;
  value: string;
  rows: Array<{
    label: string;
    value: string;
  }>;
  // New properties for styled cards
  cardStyle?: InfoCardStyle;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  actionText?: string;
  onClick?: () => void;
}

// Response content union type - defines all possible content structures for AI responses
export interface ResponseContent {
  type: ResponseType;
  text?: string;                    // Plain text content
  infoCard?: InfoCardData;          // Structured info card with title, value, and rows
  imageUrl?: string;                // Image URL for image responses
  imageAlt?: string;                // Alt text for accessibility
  mixedContent?: Array<{            // Array of mixed content types
    type: 'text' | 'info' | 'image';
    text?: string;
    infoCard?: InfoCardData;
    imageUrl?: string;
    imageAlt?: string;
  }>;
}

interface ResponseProps {
  content: ResponseContent;
}

/**
 * Response Component - Renders AI responses in various formats
 * Supports text, info cards, images, and mixed content types
 * All responses are left-aligned and span full width of container
 */
export const Response: React.FC<ResponseProps> = ({ content }) => {
  
  /**
   * Renders a text response with full width and proper typography
   * @param text - The text content to display
   * @param isLast - Whether this is the last item in a mixed content array (affects border radius)
   */
  const renderTextResponse = (text: string, isLast: boolean = false) => (
    <div className={`relative w-full ${isLast ? 'rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-2xl'}`}>
      {/* Text wrapper with Jakarta font spanning full width */}
      <div className="font-jakarta font-medium text-[#000000] text-[16px] text-left w-full">
        <p className="block leading-[24px] w-full">
          {text}
        </p>
      </div>
    </div>
  );

  /**
   * Renders an info card with structured data display
   * Features different card styles based on cardStyle property
   * @param infoCard - The structured data to display
   */
  const renderInfoCard = (infoCard: InfoCardData) => {
    // Map cardStyle to appropriate component and props
    switch (infoCard.cardStyle) {
      case 'style1':
        return (
          <ResponseInfoCard1
            imageUrl={infoCard.imageUrl}
            title={infoCard.value}
            subtitle={infoCard.subtitle || infoCard.title}
            onClick={infoCard.onClick}
          />
        );
      case 'style2':
        return (
          <ResponseInfoCard2
            icon={infoCard.icon}
            title={infoCard.value}
            onClick={infoCard.onClick}
          />
        );
      case 'style3':
        return (
          <ResponseInfoCard3
            icon={infoCard.icon}
            title={infoCard.value}
            description={infoCard.description || infoCard.title}
            onClick={infoCard.onClick}
          />
        );
      case 'style4':
        return (
          <ResponseInfoCard4
            title={infoCard.value}
            description={infoCard.description || infoCard.title}
            actionText={infoCard.actionText}
            onClick={infoCard.onClick}
          />
        );
      default:
        // Default to style1
        return (
          <ResponseInfoCard1
            imageUrl={infoCard.imageUrl}
            title={infoCard.value}
            subtitle={infoCard.subtitle || infoCard.title}
            onClick={infoCard.onClick}
          />
        );
    }
  };

  /**
   * Renders an image response with proper aspect ratio handling
   * @param imageUrl - URL of the image to display
   * @param imageAlt - Alt text for accessibility
   */
  const renderImageResponse = (imageUrl: string, imageAlt: string) => (
    <div className="relative rounded-2xl shrink-0 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  /**
   * Main content rendering logic - switches between different response types
   * Handles text, info, image, and mixed content types
   */
  const renderContent = () => {
    switch (content.type) {
      case 'text':
        // Simple text response
        return content.text ? renderTextResponse(content.text) : null;
      
      case 'info':
        // Structured info card
        return content.infoCard ? renderInfoCard(content.infoCard) : null;
      
      case 'image':
        // Image with alt text
        return content.imageUrl ? renderImageResponse(content.imageUrl, content.imageAlt || '') : null;
      
      case 'mixed':
        // Multiple content types in sequence with 12px gap
        return (
          <div className="flex flex-col gap-3 w-full">
            {content.mixedContent?.map((item, index) => {
              const isLast = index === content.mixedContent!.length - 1;
              switch (item.type) {
                case 'text':
                  return item.text ? (
                    <div key={index}>
                      {renderTextResponse(item.text, isLast && content.mixedContent!.length > 1)}
                    </div>
                  ) : null;
                case 'info':
                  return item.infoCard ? (
                    <div key={index}>
                      {renderInfoCard(item.infoCard)}
                    </div>
                  ) : null;
                case 'image':
                  return item.imageUrl ? (
                    <div key={index}>
                      {renderImageResponse(item.imageUrl, item.imageAlt || '')}
                    </div>
                  ) : null;
                default:
                  return null;
              }
            })}
          </div>
        );
      
      default:
        return null;
    }
  };

  // Main component render - simple wrapper that spans full width
  return (
    <div className="relative w-full">
      {renderContent()}
    </div>
  );
}; 