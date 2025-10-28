import React from 'react';
import dynamic from 'next/dynamic';
import { Settings, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { interFont } from '@/app/fonts';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import assistScanningAnimation from '../../../../../../../assets/animations/assist-scanning.json';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface VariantAgentProps {
  content: string;
}

export function VariantAgent({ content }: VariantAgentProps) {
  const [isOpenedCardOpen, setIsOpenedCardOpen] = React.useState(true);
  const [isCollapsedCardOpen, setIsCollapsedCardOpen] = React.useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      {/* Loading State */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <Lottie 
            animationData={assistScanningAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 20, height: 20 }}
          />
        </div>
        <p className={`${interFont.className} font-normal leading-[20px] max-w-[320px] not-italic relative shrink-0 text-[16px] text-foreground whitespace-pre-wrap`}>
          Reviewing your case study presentations...
        </p>
      </div>

      {/* Agent Cards */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* Connecting line between cards */}
          <div className="absolute left-[12px] top-[48px] bottom-[48px] w-0 z-0">
            <div className="absolute left-[-0.5px] right-[-0.5px] top-0 bottom-0 border-l border-border"></div>
          </div>
          
          {/* Opened Card (Expanded) */}
          <Collapsible open={isOpenedCardOpen} onOpenChange={setIsOpenedCardOpen} className="w-full relative z-10">
            <CollapsibleTrigger className="bg-neutral-100 border border-input border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full hover:bg-neutral-200 transition-colors">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <Settings className="w-4 h-4" />
              </div>
              <div className={`${interFont.className} font-medium flex flex-col justify-center leading-[0] relative shrink-0 text-foreground text-[14px] text-nowrap`}>
                <p className="leading-[20px] whitespace-pre">Case Study Analysis</p>
              </div>
              <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap text-right`}>
                5 pages
              </p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center relative size-[16px]">
                  <div className="overflow-clip relative size-[16px]">
                    {isOpenedCardOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <Terminal className="w-4 h-4" />
                </div>
                <p className={`${interFont.className} font-normal h-[31px] leading-none overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-foreground w-[352px]`}>
                  Analyzing case study structure and content flow
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <Terminal className="w-4 h-4" />
                </div>
                <p className={`${interFont.className} font-normal h-[31px] leading-none overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-foreground w-[352px]`}>
                  Evaluating project outcomes and metrics
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Collapsed Card */}
          <Collapsible open={isCollapsedCardOpen} onOpenChange={setIsCollapsedCardOpen} className="w-full relative z-10">
            <CollapsibleTrigger className="bg-neutral-100 border border-input border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full hover:bg-neutral-200 transition-colors">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <Settings className="w-4 h-4" />
              </div>
              <div className={`${interFont.className} font-medium flex flex-col justify-center leading-[0] relative shrink-0 text-foreground text-[14px] text-nowrap`}>
                <p className="leading-[20px] whitespace-pre">Content Review</p>
              </div>
              <p className={`${interFont.className} font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-muted-foreground text-nowrap text-right`}>
                5 pages
              </p>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]">
                <div className="overflow-clip relative size-[16px]">
                  {isCollapsedCardOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
