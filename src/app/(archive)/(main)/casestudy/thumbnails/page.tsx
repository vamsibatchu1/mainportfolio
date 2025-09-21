"use client";
import React, { useState } from "react";
import { tekoFont, kodeMonoFont, loraFont } from "@/app/fonts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// SVG paths
const svgPaths = {
  p1079ed00:
    "M5.5286 3.5286C5.78895 3.26825 6.21106 3.26825 6.4714 3.5286L10.4714 7.5286C10.7318 7.78894 10.7318 8.21106 10.4714 8.4714L6.4714 12.4714C6.21106 12.7318 5.78895 12.7318 5.5286 12.4714C5.26825 12.2111 5.26825 11.7889 5.5286 11.5286L9.05719 8L5.5286 4.4714C5.26825 4.21105 5.26825 3.78894 5.5286 3.5286Z",
  p8db9b00:
    "M10.4714 3.5286C10.7318 3.78894 10.7318 4.21105 10.4714 4.4714L6.94281 8L10.4714 11.5286C10.7318 11.7889 10.7318 12.2111 10.4714 12.4714C10.2111 12.7318 9.78895 12.7318 9.5286 12.4714L5.5286 8.4714C5.26825 8.21106 5.26825 7.78894 5.5286 7.5286L9.5286 3.5286C9.78895 3.26825 10.2111 3.26825 10.4714 3.5286Z",
};

// --- Data Structures & Sample Data ---
interface OrderInfo {
  name: string;
  address: string;
}

interface OrderDetailsData {
  subtotal: string;
  shipping: string;
  tax: string;
  shippingInfo: OrderInfo;
  billingInfo: string;
}

interface CustomerDetailsData {
  name: string;
  email: string;
  phone: string;
}

interface LeftCardData {
  title: string;
  orderDetails: OrderDetailsData;
  customerDetails: CustomerDetailsData;
  updatedDate: string;
}

interface RightCardData {
  imagePlaceholder: string; // Or imageUrl: string;
  text1: string;
  text2: string;
}

interface CaseStudy {
  id: string;
  leftCard: LeftCardData;
  rightCard: RightCardData;
}

const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    leftCard: {
      title: "Enhancing Banking Interfaces - A UX Deep Dive",
      orderDetails: {
        subtotal: "$299.00",
        shipping: "$5.00",
        tax: "$25.00",
        shippingInfo: { name: "Liam Johnson", address: "1234 Main St." },
        billingInfo: "Same as shipping address",
      },
      customerDetails: {
        name: "Liam Johnson",
        email: "liam@acme.com",
        phone: "+1 234 567 890",
      },
      updatedDate: "November 23, 2023",
    },
    rightCard: {
      imagePlaceholder: "IMAGE - BANKING UX",
      text1: "This case study explores the intricacies of modern banking interfaces and our approach to significantly improve user experience through intuitive design.",
      text2: "We focused on streamlining complex processes, enhancing accessibility, and providing clearer financial insights to empower users in managing their finances.",
    },
  },
  {
    id: "cs2",
    leftCard: {
      title: "Wongle Mobile Game: An Alphabet Adventure",
      orderDetails: {
        subtotal: "$19.99",
        shipping: "$2.00",
        tax: "$1.50",
        shippingInfo: { name: "Olivia Chen", address: "5678 Park Ave." },
        billingInfo: "Same as shipping address",
      },
      customerDetails: {
        name: "Olivia Chen",
        email: "olivia@gamedev.com",
        phone: "+1 987 654 3210",
      },
      updatedDate: "December 12, 2023",
    },
    rightCard: {
      imagePlaceholder: "IMAGE - WONGLE GAME",
      text1: "Wongle is a fun mobile game for an alphabet adventure. This case study details its design, development, and how it helps learn words by finding objects.",
      text2: "The project involved playful UI/UX, gamification mechanics, and educational content integration to create an engaging learning experience for all ages.",
    },
  },
];
// --- End Data Structures & Sample Data ---

export default function App() {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);

  const handleNext = () => {
    setCurrentCaseStudyIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrevious = () => {
    setCurrentCaseStudyIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCaseStudy = caseStudies[currentCaseStudyIndex];

  // --- LeftCard Component ---
  interface LeftCardProps {
    data: LeftCardData;
  }
  const LeftCard = ({ data }: LeftCardProps) => (
    <motion.div 
      className={`relative shrink-0 bg-[#f25a3f] w-[340px] h-[702px]`}
      initial={{ opacity: 0, y: -50, rotateX: -25 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: 100, rotateZ: -8 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeInOut",
        animate: { delay: 0.2, duration: 0.6 },
        exit: { delay: 0, duration: 0.4 }
      }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col justify-between p-[16px] relative w-[340px] h-full">
          {/* Title Section */}
          <div
            className={`css-zdb74u flex flex-col font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[32px] text-left tracking-[5.12px] uppercase ${tekoFont.className}`}
            style={{ width: "min-content" }}
          >
            <p className={`adjustLetterSpacing block leading-[29px]`}>
              {data.title}
            </p>
          </div>

          {/* Order Details Sub-Card */}
          <div className={`relative shrink-0 w-full bg-[#ffffff] rounded`}>
            <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
              {/* Main Content of Sub-Card */}
              <div className={`relative shrink-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full`}>
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-[20px] relative w-full">
                    {/* Subtotal, Shipping, Tax lines */}
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Subtotal</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.orderDetails.subtotal}</p></div>
                      </div>
                    </div>
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Shipping</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.orderDetails.shipping}</p></div>
                      </div>
                    </div>
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Tax</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.orderDetails.tax}</p></div>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className={`relative shrink-0 w-full h-4`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 16"><g><line stroke="var(--stroke-0, #E4E4E7)" x2="268" y1="7.5" y2="7.5" /></g></svg>
                    </div>

                    {/* Shipping/Billing Info Section */}
                    <div className={`relative shrink-0 w-full`}>
                      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
                        {/* Shipping Info */}
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative w-full">
                            <div style={{ width: "min-content" }} className={`css-gcu5g6 font-semibold leading-[0] min-w-full relative shrink-0 text-[14px] text-left text-zinc-950 ${kodeMonoFont.className}`}><p className="block leading-[20px]">Shipping Information</p></div>
                            <div className={`relative shrink-0 w-full`}>
                              <div className={`box-border content-stretch flex flex-col font-normal gap-0.5 items-start justify-start leading-[0] p-0 relative text-[14px] text-left text-zinc-500 w-full ${kodeMonoFont.className}`}>
                                <div className={`css-j1ejio min-w-full relative shrink-0`} style={{ width: "min-content" }}><p className="block leading-[20px]">{data.orderDetails.shippingInfo.name}</p></div>
                                <div className={`css-j1ejio min-w-full relative shrink-0`} style={{ width: "min-content" }}><p className="block leading-[20px]">{data.orderDetails.shippingInfo.address}</p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Billing Info */}
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative w-full">
                            <div style={{ width: "min-content" }} className={`css-gcu5g6 font-semibold leading-[0] min-w-full relative shrink-0 text-[14px] text-left text-zinc-950 ${kodeMonoFont.className}`}><p className="block leading-[20px]">Billing Information</p></div>
                            <div className={`relative shrink-0 w-full`}>
                              <div className={`box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative w-full`}>
                                <div className={`css-j1ejio font-normal leading-[0] min-w-full relative shrink-0 text-[14px] text-left text-zinc-500 ${kodeMonoFont.className}`} style={{ width: "min-content" }}><p className="block leading-[20px]">{data.orderDetails.billingInfo}</p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className={`relative shrink-0 w-full h-4`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 16"><g><line stroke="var(--stroke-0, #E4E4E7)" x2="268" y1="7.5" y2="7.5" /></g></svg>
                    </div>
                    
                    {/* Customer Information Title */}
                    <div className={`css-gcu5g6 font-semibold h-[23px] leading-[0] relative shrink-0 text-[14px] text-left text-zinc-950 w-full ${kodeMonoFont.className}`}>
                      <p className="block leading-[20px]">Customer Information</p>
                    </div>

                    {/* Customer, Email, Phone lines */}
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Customer</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.customerDetails.name}</p></div>
                      </div>
                    </div>
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Email</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.customerDetails.email}</p></div>
                      </div>
                    </div>
                    <div className={`relative shrink-0 w-full`}>
                      <div className={`box-border content-stretch flex flex-row font-normal items-center justify-between leading-[0] p-0 relative text-[14px] text-left text-nowrap tracking-[-0.28px] w-full ${kodeMonoFont.className}`}>
                        <div className={`relative shrink-0 css-jn6i7b text-[#000000]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">Phone</p></div>
                        <div className={`relative shrink-0 css-m7iou1 text-[#515151]`}><p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{data.customerDetails.phone}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer of Sub-Card */}
              <div className={`relative shrink-0 w-full bg-[#ffffff80] bg-zinc-100`}>
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-3 relative w-full">
                    <div className={`css-m9pv7h font-normal leading-[0] relative shrink-0 text-[#515151] text-[12px] text-left text-nowrap tracking-[-0.24px] ${kodeMonoFont.className}`}>
                      <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">{data.updatedDate}</p>
                    </div>
                    {/* Arrow Buttons */}
                    <div className="relative shrink-0" data-name="Button Wrapper">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
                        {/* Left Arrow Button */}
                        <div className="bg-[#ffffff] relative rounded-md shrink-0 size-6">
                          <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative size-6">
                              <div className="relative shrink-0 size-4">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g><path clipRule="evenodd" d={svgPaths.p8db9b00} fill="var(--fill-0, #18181B)" fillRule="evenodd" /></g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Right Arrow Button */}
                        <div className="bg-[#ffffff] relative rounded-md shrink-0 size-6">
                          <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative size-6">
                              <div className="relative shrink-0 size-4">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g><path clipRule="evenodd" d={svgPaths.p1079ed00} fill="var(--fill-0, #18181B)" fillRule="evenodd" /></g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded" /> {/* Border overlay for sub-card */}
          </div>
        </div>
      </div>
    </motion.div>
  );
  // --- End LeftCard Component ---

  // --- RightCard Image Component ---
  interface RightCardImageProps {
    data: RightCardData;
  }
  const RightCardImage = ({ data }: RightCardImageProps) => (
    <motion.div 
      className="bg-[#f0eeef] h-[456px] relative w-full flex items-center justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 120, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        animate: { 
          delay: 0.5, 
          duration: 0.6
        },
        exit: { delay: 0.15, duration: 0.4 }
      }}
    >
      <div className="relative size-full flex items-center justify-center">
        <p className={`font-medium text-neutral-400 text-[24px] tracking-[2px] ${tekoFont.className}`}>{data.imagePlaceholder}</p>
      </div>
    </motion.div>
  );

  // --- RightCard Text Component ---
  interface RightCardTextProps {
    data: RightCardData;
  }
  const RightCardText = ({ data }: RightCardTextProps) => (
    <motion.div 
      className={`relative bg-[#f0eeef] w-full h-[230px]`}
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        animate: { 
          delay: 0.8, 
          duration: 0.6
        },
        exit: { delay: 0.3, duration: 0.35 }
      }}
    >
      <div className="relative size-full">
        <div className={`box-border content-stretch flex flex-row font-normal gap-4 items-start justify-start leading-[0] p-[16px] relative text-[#000000] text-[15px] text-left tracking-[-0.15px] w-full ${loraFont.className}`}>
          <div className="basis-0 css-k5vidl flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
            <p className={`adjustLetterSpacing block leading-[22px]`}>
              {data.text1}
            </p>
          </div>
          <div className="basis-0 css-k5vidl flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
            <p className={`adjustLetterSpacing block leading-[22px]`}>
              {data.text2}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // --- RightCard Container Component ---
  interface RightCardProps {
    data: RightCardData;
  }
  const RightCard = ({ data }: RightCardProps) => (
    <div className="w-[544px]">
      <div className="box-border flex flex-col gap-4 h-full items-start justify-start p-0 relative w-[544px]">
        {/* Animated Image Placeholder */}
        <AnimatePresence mode="wait">
          <RightCardImage key={`${currentCaseStudy.id}-image`} data={data} />
        </AnimatePresence>
        {/* Animated Text Section */}
        <AnimatePresence mode="wait">
          <RightCardText key={`${currentCaseStudy.id}-text`} data={data} />
        </AnimatePresence>
      </div>
    </div>
  );
  // --- End RightCard Component ---

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="relative">
          <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative">
            {/* Animated Left Card */}
            <AnimatePresence mode="wait">
              <LeftCard key={`${currentCaseStudy.id}-left`} data={currentCaseStudy.leftCard} />
            </AnimatePresence>
            {/* Animated Right Card */}
            <RightCard data={currentCaseStudy.rightCard} />
          </div>
          <div id="navigation-arrows" className="w-full flex justify-end items-center mt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevious}
                aria-label="Previous Case Study"
                className="bg-white p-1.5 rounded-md border border-zinc-200 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors"
              >
                <ChevronLeft className="size-4 text-zinc-900" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Case Study"
                className="bg-white p-1.5 rounded-md border border-zinc-200 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors"
              >
                <ChevronRight className="size-4 text-zinc-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}