import React from 'react';
import { ExternalLink } from 'lucide-react';

// Response types for flexibility
export type ResponseType = 'text' | 'info' | 'image' | 'mixed';

// Info card data structure
export interface InfoCardData {
  title: string;
  value: string;
  rows: Array<{
    label: string;
    value: string;
  }>;
}

// Response content union type
export interface ResponseContent {
  type: ResponseType;
  text?: string;
  infoCard?: InfoCardData;
  imageUrl?: string;
  imageAlt?: string;
  mixedContent?: Array<{
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

export const Response: React.FC<ResponseProps> = ({ content }) => {
  const renderTextResponse = (text: string, isLast: boolean = false) => (
    <div className={`bg-[#f7f7f7] w-[264px] relative ${isLast ? 'rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-2xl'} shrink-0`}>
      <div className="flex flex-row items-center relative w-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start px-4 py-2 relative w-full">
          <div className="basis-0 font-jakarta font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[16px] text-left">
            <p className="block leading-[24px]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInfoCard = (infoCard: InfoCardData) => (
    <div className="bg-[#f7f7f7] max-w-[264px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit p-[16px] relative w-full">
          {/* Title Section */}
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
              <div className="relative shrink-0">
                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative text-left text-nowrap">
                  <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px]">
                    <p className="block leading-[20px] text-nowrap whitespace-pre">
                      {infoCard.title}
                    </p>
                  </div>
                  <div className="font-jakarta font-bold relative shrink-0 text-[#111111] text-[24px] tracking-[-0.72px]">
                    <p className="block leading-[24px] text-nowrap whitespace-pre">
                      {infoCard.value}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-8">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[8px] relative size-8">
                    <ExternalLink size={16} className="text-[#111111] rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Rows */}
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
              {infoCard.rows.map((row, index) => (
                <div key={index} className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row font-jakarta font-medium items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap w-full">
                    <div className="relative shrink-0 text-[#545454]">
                      <p className="block leading-[20px] text-nowrap whitespace-pre">
                        {row.label}
                      </p>
                    </div>
                    <div className="relative shrink-0 text-[#000000]">
                      <p className="block leading-[20px] text-nowrap whitespace-pre">
                        {row.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImageResponse = (imageUrl: string, imageAlt: string) => (
    <div className="bg-[#f7f7f7] max-w-[264px] relative rounded-2xl shrink-0 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const renderContent = () => {
    switch (content.type) {
      case 'text':
        return content.text ? renderTextResponse(content.text) : null;
      
      case 'info':
        return content.infoCard ? renderInfoCard(content.infoCard) : null;
      
      case 'image':
        return content.imageUrl ? renderImageResponse(content.imageUrl, content.imageAlt || '') : null;
      
      case 'mixed':
        return content.mixedContent?.map((item, index) => {
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
        });
      
      default:
        return null;
    }
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-0 pr-20 py-0 relative w-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}; 