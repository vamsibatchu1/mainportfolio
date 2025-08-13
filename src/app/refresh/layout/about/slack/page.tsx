'use client';

import React from 'react';
import { latoFont } from '../../../../fonts';



// Image assets from Figma
const imgClose = "http://localhost:3845/assets/c93e6cb03fc31a59c3560a7de9fa6fe7d089338f.svg";
const imgMinimize = "http://localhost:3845/assets/2c7d9e6b65ec9107e029d45806d249e00a54b1b4.svg";
const imgFullscreen = "http://localhost:3845/assets/26b1599335f900d9786d46b0697d03b7570bfae5.svg";
const imgSearch = "http://localhost:3845/assets/a921c5c6b138ffe17bf23652a750ab9af8ec06bd.svg";
const imgArrowLeft = "http://localhost:3845/assets/4263e435e034ee0b87fa38fd87ce204685ab31ee.svg";
const imgArrowRight = "http://localhost:3845/assets/c143401632a14036b78253a56158082138623085.svg";
const imgClock = "http://localhost:3845/assets/e2d8d12a33200177c616b536655f54d6241dd844.svg";
const imgOpenInWindow = "http://localhost:3845/assets/7ad0b9bfa8946d3b192e01707db4e02ea865d314.svg";
const imgHelp = "http://localhost:3845/assets/c36da971b71368bd39c673e47dc465c5bf227573.svg";

// Top Bar Stoplights Component
const TopBarStoplights = () => {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full">
      <div className="relative shrink-0 size-3" data-name="Close">
        <img alt="" className="block max-w-none size-full" src={imgClose} />
      </div>
      <div className="relative shrink-0 size-3" data-name="Minimize">
        <img alt="" className="block max-w-none size-full" src={imgMinimize} />
      </div>
      <div className="relative shrink-0 size-3" data-name="Fullscreen">
        <img alt="" className="block max-w-none size-full" src={imgFullscreen} />
      </div>
    </div>
  );
};

// Button Component
const Button = ({ 
  icon
}: {
  icon?: React.ReactNode;
}) => {
  return (
    <button className="box-border content-stretch cursor-pointer flex flex-col items-center justify-center p-px relative rounded size-full">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]">
        {icon || (
          <div className="overflow-clip relative shrink-0 size-5">
            <div className="absolute inset-[12.5%]">
              <img alt="" className="block max-w-none size-full" src={imgClose} />
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

// Arrow Left Component
const ArrowLeft = () => {
  return (
    <div className="relative size-full" data-name="State=outlined, Size=normal">
      <div className="absolute inset-[20%_15%]" data-name="Union">
        <img alt="" className="block max-w-none size-full" src={imgArrowLeft} />
      </div>
    </div>
  );
};

// Arrow Right Component
const ArrowRight = () => {
  return (
    <div className="relative size-full" data-name="State=outlined, Size=normal">
      <div className="absolute flex inset-[20%_15%] items-center justify-center">
        <div className="flex-none h-3 rotate-[180deg] w-3.5">
          <div className="relative size-full">
            <img alt="" className="block max-w-none size-full" src={imgArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Clock Component
const Clock = () => {
  return (
    <div className="relative size-full" data-name="State=outlined, Size=normal">
      <div className="absolute inset-[5%]" data-name="Union">
        <img alt="" className="block max-w-none size-full" src={imgClock} />
      </div>
    </div>
  );
};

// Search Input Component
const SearchInput = () => {
  return (
    <div className="bg-[rgba(249,237,255,0.25)] box-border content-stretch flex flex-row gap-1 items-center justify-start overflow-clip px-3 py-[5px] relative rounded-md size-full" data-name="State=Default">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="✨ search">
          <div className="absolute inset-[7.5%]" data-name="Union">
            <img alt="" className="block max-w-none size-full" src={imgSearch} />
          </div>
            </div>
        <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-center text-nowrap">
          <p className="block leading-[18px] whitespace-pre">Search Acme Inc</p>
        </div>
      </div>
    </div>
  );
};

// Open In Window Component
const OpenInWindow = () => {
  return (
    <div className="relative size-full" data-name="State=outlined,Size=normal">
      <div className="absolute inset-[10%_5%]" data-name="Union">
        <img alt="" className="block max-w-none size-full" src={imgOpenInWindow} />
      </div>
    </div>
  );
};

// Help Component
const Help = () => {
  return (
    <div className="relative size-full" data-name="State=outlined, Size=normal">
      <div className="absolute inset-[5%]" data-name="Union">
        <img alt="" className="block max-w-none size-full" src={imgHelp} />
      </div>
    </div>
  );
};

// Top Bar Component - Exact Figma Design
const TopBar = () => {
  return (
    <div className="bg-[#5c205f] box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full h-10" data-name="Top Bar Search Forward">
      {/* Left Section - System Area */}
      <div className="box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative shrink-0" data-name="Left">
        <div className="box-border content-stretch flex flex-col h-8 items-center justify-center px-3 py-0 relative shrink-0 w-[76px]" data-name="System Area">
          <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0" data-name="_Top Bar - Stoplights">
            <TopBarStoplights />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-end px-2 py-0 relative shrink-0" data-name="Navigation">
        <div className="box-border content-stretch cursor-pointer flex flex-row gap-1 items-start justify-start p-0 relative shrink-0" data-name="Arrows">
          <button className="box-border content-stretch flex flex-col h-7 items-center justify-center opacity-80 overflow-visible p-px relative rounded shrink-0" data-name="Back">
            <Button icon={<ArrowLeft />} />
          </button>
          <button className="box-border content-stretch flex flex-col h-7 items-center justify-center overflow-visible p-px relative rounded shrink-0" data-name="Forward">
            <Button icon={<ArrowRight />} />
          </button>
          <button className="box-border content-stretch flex flex-col h-7 items-center justify-center opacity-80 overflow-visible p-px relative rounded shrink-0" data-name="History">
            <Button icon={<Clock />} />
              </button>
        </div>
      </div>

      {/* Search Input Section */}
      <div className="basis-0 bg-[rgba(249,237,255,0.25)] box-border content-stretch flex flex-row gap-1 grow items-center justify-start max-w-[1024px] min-h-px min-w-[300px] overflow-clip px-3 py-[5px] relative rounded-md shrink-0" data-name="Search input">
        <SearchInput />
      </div>

      {/* Right Section - Slack Icons */}
      <div className="box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative shrink-0 w-[260px]" data-name="Right">
        <div className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-end px-2 py-0 relative shrink-0" data-name="Slack Icons">
          <div className="box-border content-stretch flex flex-col h-7 items-center justify-center px-1 py-px relative rounded shrink-0" data-name="Window button">
            <div className="box-border content-stretch flex flex-row gap-1 h-[26px] items-center justify-center opacity-80 px-1 py-0 relative rounded-[3px] shrink-0 w-full" data-name="Base">
              <div className="flex flex-col font-['Lato:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-center text-nowrap">
                <p className="block leading-[18px] whitespace-pre">5</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-4" data-name="Icon">
                <OpenInWindow />
              </div>
            </div>
          </div>
          <button className="box-border content-stretch cursor-pointer flex flex-col h-7 items-center justify-center opacity-80 overflow-visible p-px relative rounded shrink-0" data-name="Button - Help">
            <Button icon={<Help />} />
          </button>
        </div>
      </div>
    </div>
  );
};









export default function Slack() {
  return (
    <div className="w-full h-full flex bg-white">
      {/* Left Sidebar - Pixel Perfect from Figma */}
      <div className="w-64 bg-[rgba(255,255,255,0.7)] flex flex-col rounded-bl-[6px] rounded-tl-[6px]">


        {/* All workspaces */}
        <div className="h-[41px] relative">
          <div className={`${latoFont.className} leading-[18px] absolute left-[22px] text-[#454447] text-[13px] font-normal`} style={{ top: "calc(50% - 9.5px)" }}>
            All workspaces
          </div>
          <div className="absolute left-[107px] size-5 top-2.5">
            <div className="absolute inset-[36.25%_27.5%_37.5%_27.5%]">
              <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/a34a340cce77df6a7fc941f0ebf0fd12420d3711.svg" />
            </div>
          </div>
          <div className="absolute left-[21px] rounded size-4 top-3" />
        </div>

        {/* Channel list */}
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start pb-0 pt-1 px-2 w-full">
            {/* Unreads */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#1d1c1d] text-[15px] font-black`}>
                Unreads
              </div>
            </div>

            {/* Threads */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#1d1c1d] text-[15px] font-black`}>
                Threads
              </div>
            </div>

            {/* Drafts & sent */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#454447] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#454447] text-[15px] font-normal`}>
                Drafts & sent
              </div>
            </div>
          </div>

          <div className="h-[19px] w-full" />

          <div className="flex flex-col items-start justify-start px-2 py-0 w-full">
            {/* Channels Section Header */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] w-full">
              <div className={`${latoFont.className} flex-1 leading-[18px] text-[#454447] text-[13px] font-bold`}>
                Channels
              </div>
            </div>

            {/* design-team */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#1d1c1d] text-[15px] font-black`}>
                design-team
              </div>
            </div>

            {/* random */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#1d1c1d] text-[15px] font-black`}>
                random
              </div>
            </div>

            {/* vamsi-testimonials (active) */}
            <div className="bg-[#611f69] flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#ffffff] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#ffffff] text-[15px] font-normal`}>
                vamsi-testimonials
              </div>
            </div>

            <div className="flex flex-row gap-2 h-5 items-center justify-start p-0 w-full" />

            {/* Favs Section Header */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] w-full">
              <div className={`${latoFont.className} flex-1 leading-[18px] text-[#454447] text-[13px] font-bold`}>
                ❤️️ Favs
              </div>
            </div>

            {/* cool-crew */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] rounded w-full">
              <div className="size-5">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#454447] text-[20px]`}>
                  #
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#454447] text-[15px] font-normal`}>
                cool-crew
              </div>
            </div>

            <div className="flex flex-row gap-2 h-5 items-center justify-start p-0 w-full" />

            {/* Direct messages Section Header */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] w-full">
              <div className={`${latoFont.className} flex-1 leading-[18px] text-[#454447] text-[13px] font-bold`}>
                Direct messages
              </div>
            </div>

            {/* Lee Hao */}
            <div className="flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-2 py-[3px] rounded w-full">
              <div className="size-5">
                <div className="absolute left-0 size-5 top-0">
                  <img alt="" className="block max-w-none size-full" height="20" src="http://localhost:3845/assets/e277e92b74ae22e9af9dca1f9b9e71a43263c556.png" width="20" />
                </div>
                <div className="absolute left-2.5 size-[15px] top-2.5">
                  <div className="absolute inset-[27.5%]">
                    <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/9ed0c9e99a25520dd5a2946758cbdecf0850110a.svg" />
                  </div>
                </div>
              </div>
              <div className={`${latoFont.className} flex-1 leading-[22px] text-[#1d1c1d] text-[15px] font-black`}>
                Lee Hao
              </div>
              <div className="bg-[#83388a] flex flex-row gap-2 h-[18px] items-center justify-start px-[9px] py-0 rounded-[10px]">
                <div className={`${latoFont.className} leading-[18px] text-[#ffffff] text-[13px] font-bold`}>
                  2
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 h-5 items-center justify-start p-0 w-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <TopBar />

        {/* Channel Header - Pixel Perfect from Figma */}
        <div className="bg-[#ffffff] flex flex-col items-center justify-center relative w-full">
          {/* Border */}
          <div className="absolute border-[0px_0px_1px] border-[rgba(94,93,96,0.13)] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
          
          {/* Main Header */}
          <div className="bg-[#ffffff] flex flex-row items-center justify-start pl-0 pr-3 py-0 relative w-full">
            {/* Title Section */}
            <div className="flex-1 h-[50px] overflow-clip relative">
              <div className="absolute flex flex-row gap-3 items-center justify-start left-4 top-[11px]">
                <div className="flex flex-row items-center justify-start relative">
                                     {/* Channel Icon - Removed problematic SVG */}
                   <div className="flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
                     <div className="opacity-90 overflow-clip relative size-5">
                       <div className="absolute inset-[15%_10%_5%_10%]">
                         <span className="text-[#7C7A7F] text-[20px]">#</span>
                       </div>
                     </div>
                   </div>
                  
                  {/* Channel Name */}
                  <div className={`${latoFont.className} leading-[27px] opacity-90 relative text-[#1d1c1d] text-[18px] font-black`}>
                    Vamsi Testimonials
                  </div>
                  
                  {/* Caret Down */}
                  <div className="overflow-clip relative size-5">
                    <div className="absolute inset-[36.25%_27.5%_33.75%_27.5%]">
                      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/0a95a0bc705890de6b50b740685425685c07d48f.svg" />
                    </div>
                  </div>
                </div>
                
                {/* Secondary Tag */}
                <div className={`${latoFont.className} leading-[18px] opacity-90 relative text-[13px] text-[rgba(29,28,29,0.7)]`}>
                  #speaker-requests
                </div>
              </div>
            </div>
            
            {/* Actions Section */}
            <div className="flex flex-row gap-2 items-center justify-end relative">
              {/* Facepile */}
              <div className="bg-[#ffffff] relative rounded-lg">
                <div className="flex flex-row items-start justify-start overflow-clip p-[4px] relative">
                  <div className="flex flex-row gap-1 items-start justify-start pl-1 pr-0 py-0 relative">
                    <div className="overflow-clip relative size-5">
                      <div className="absolute inset-[10%_9.98%_10%_9.99%]">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/e6777e07be59a36ec7f6fe836786fd64ec1e049a.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-1 py-0 relative self-stretch">
                    <div className={`${latoFont.className} flex flex-col justify-center leading-[18px] relative text-[#454447] text-[13px] font-bold text-right`}>
                      8
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[rgba(94,93,96,0.13)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
              </div>
              
              {/* Segmented Button Header */}
              <div className="bg-[#ffffff] h-7 relative rounded-lg">
                <div className="relative rounded-lg size-full">
                  <div className="flex flex-row items-center justify-end overflow-clip p-0 relative size-full">
                    <div className="flex flex-row gap-1 h-full items-center justify-center px-2 py-0 relative">
                      <div className="overflow-clip relative size-5">
                        <div className="absolute inset-[5%_7.5%_7.5%_7.5%]">
                          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/c272eefc0dd9c6179bb8cd84ae896ad81f71fa0d.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-px h-full items-center justify-center p-0 relative">
                      <div className="flex h-[0px] items-center justify-center relative w-[0px]">
                        <div className="flex-none rotate-[90deg]">
                          <div className="h-0 relative w-5">
                            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                              <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/57fc9e16ab114865073ccc480ef39c7b05dfaa9d.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-clip relative size-5">
                        <div className="absolute inset-[36.25%_27.5%_37.5%_27.5%]">
                          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/389ce69b4c40b53d1acde8b007c79ae4b012e369.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(94,93,96,0.13)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                </div>
              </div>
              
              {/* Conversation Header Icon Button */}
              <div className="bg-[#ffffff] relative rounded-lg">
                <div className="flex flex-row items-center justify-center overflow-clip p-[4px] relative size-full">
                  <div className="flex flex-row gap-1 items-center justify-center relative">
                    <div className="overflow-clip relative size-5">
                      <div className="absolute left-px size-[17.5px] top-px">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/89c022a0a972c5f32e2e6e9436c2b37af5e2c875.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[rgba(94,93,96,0.13)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
              </div>
            </div>
          </div>
          
          {/* Secondary Header */}
          <div className="bg-[#ffffff] flex flex-row gap-2 h-8 items-start justify-start px-4 py-0 relative w-full">
            {/* Bookmark */}
            <div className="bg-[#ffffff] flex flex-row gap-[5px] h-6 items-center justify-end p-[4px] relative rounded-md">
              <div className="relative size-4">
                <div className="absolute bg-[#ffffff] left-0 rounded-[3px] size-4 top-0" />
                <div className="absolute left-[-2px] size-5 top-[-2px]">
                  <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                    📌
                  </div>
                </div>
              </div>
              <div className={`${latoFont.className} leading-[18px] relative text-[#7c7a7f] text-[13px] font-bold`}>
                5 Pinned
              </div>
              <div className="h-[18px] relative w-2">
                <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                  ⬇
                </div>
              </div>
            </div>
            
            {/* Add Bookmark */}
            <div className="bg-[#ffffff] flex flex-row gap-[5px] h-6 items-center justify-end p-[4px] relative rounded-md">
              <div className="relative size-4">
                <div className="absolute bg-[#ffffff] left-0 rounded-[3px] size-4 top-0" />
                <div className="absolute left-[-2px] size-5 top-[-2px]">
                  <div className={`font-['slack-icons:Regular',_sans-serif] inset-0 leading-[20px] text-[#1d1c1d] text-[20px]`}>
                    ➕
                  </div>
                </div>
              </div>
              <div className={`${latoFont.className} leading-[18px] relative text-[#7c7a7f] text-[13px] font-bold`}>
                Add a bookmark
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="bg-[#ffffff] relative rounded-br-[6px] rounded-tr-[6px] flex-1 flex flex-col min-h-0">
          <div className="flex flex-col flex-1 overflow-hidden min-h-0">
            <div className="flex-1 overflow-y-auto p-0 min-h-0" data-name="Messages">
              {/* Message 1 */}
              <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full border-b border-gray-100" data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/46c233ddc0812a9e21e25774560319ace06ef7cb.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Message">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                      <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">Fathima Parveen</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-row items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Timestamp">
                      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(29,28,29,0.7)] text-left text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">10:12 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left" style={{ width: "min-content" }}>
                    <p className="block leading-[22px]">Ask questions, get caught up, and share updates. The product supports asynchronous work. When work is organized in channels, no matter your location, time zone, or function, you can access the information you need on your own time.</p>
                  </div>
                </div>
              </div>

              {/* Message 2 - With Unfurl - Exact Figma Design */}
              <div className="bg-[rgba(242,199,68,0.1)] box-border content-stretch flex flex-col gap-1 items-start justify-start pb-2 pt-1 px-5 relative w-full border-b border-gray-100" data-name="💻 Conversation">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-6 pr-0 py-0 relative shrink-0" data-name=".Message Label">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-6 pr-0 py-0 relative size-full" data-name="Icon=True, Align to=Text">
                    <div className="overflow-clip relative shrink-0 size-3" data-name="✨ eye-open">
                      <div className="absolute inset-[15%_5%]" data-name="Union">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/6c69a3318d551dff655bc93f5b2ee4fb0786183b.svg" />
                      </div>
                    </div>
                    <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(29,28,29,0.7)] text-left text-nowrap">
                      <p className="block leading-[18px] whitespace-pre">Only visible to you</p>
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full" data-name="Content wrap">
                  <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                    <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/1f7ac4cefeb75129d0dbd76cf5ce13e46fb327af.png')` }} />
                  </div>
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                    <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Web / root / Sender / Message">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                        <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">Akira Asada</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Web / root / Timestamp">
                        <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[12px] text-left text-nowrap">
                          <p className="block leading-[18px] whitespace-pre">10:27 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[0px] text-left" style={{ width: "min-content" }}>
                      <p className="leading-[22px] text-[15px]">
                        <span className="text-[#1264a3]">@Marcos</span>
                        <span className="">{` is not available so we'll be assigning `}</span>
                        <span className="text-[#1264a3]">{`@Madhu `}</span>
                        <span className="">instead.</span>
                      </p>
                    </div>

                    {/* Unfurl Component - Exact Figma */}
                    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start pb-0 pt-1 px-0 relative size-full" data-name="💻 Unfurl">
                      <div className="bg-[rgba(29,28,29,0.13)] rounded self-stretch shrink-0 w-1" data-name="Attachment Bar" />
                      <div className="basis-0 box-border content-stretch flex flex-col gap-[3px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Autolayout">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full" data-name="Autolayout">
                          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full" data-name="Sender">
                            <div className="relative shrink-0 size-4" data-name="💻 Single Person">
                              <div className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded" data-name="Avatar Mask" style={{ backgroundImage: `url('http://localhost:3845/assets/8e78ba9f5cabd7a13e9929f87fcdbd58200753a4.png')` }} />
                            </div>
                            <div className="basis-0 flex flex-col font-['Lato:Black',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left">
                              <p className="block leading-[22px]">Hao Lee</p>
                            </div>
                          </div>
                          <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left w-full">
                            <p className="block leading-[22px]">
                              Shared components and style libraries are the cornerstone to producing consistent designs with ease—this guide will help get you up and running with a collection of tips and recommendations.
                            </p>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full" data-name=".Unfurl Footer">
                          <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616061] text-[12px] text-left text-nowrap">
                            <p className="block leading-[18px] whitespace-pre">Thread in #channel-name</p>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] h-3 shrink-0 w-px" data-name="Divider" />
                          <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616061] text-[12px] text-left text-nowrap">
                            <p className="block leading-[18px] whitespace-pre">Nov 1st</p>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] h-3 shrink-0 w-px" data-name="Divider" />
                          <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1264a3] text-[12px] text-left text-nowrap">
                            <p className="block leading-[18px] whitespace-pre">View message</p>
                          </div>
                        </div>
                      </div>
            </div>

                    {/* Reactions - Exact Figma */}
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Reactions and Replies">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip p-0 relative shrink-0" data-name="💻 Reactions">
                        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full" data-name="Reactions=2+, Condensed=False">
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] self-stretch shrink-0 text-[#1d1c1d] text-left w-10" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">👍</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">🤞</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">20</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">🐶</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">😅</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">😳</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                              <p className="block leading-[16px]">😍</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row gap-[5px] items-center justify-center px-[9px] py-1 relative rounded-[20px] shrink-0" data-name=".AddReaction">
                            <div className="overflow-clip relative shrink-0 size-4" data-name="✨ add-reaction">
                              <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]" data-name="Union">
                                <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/05c379de153cf1f68437fa80389a113705197ded.svg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>

              {/* Message 3 */}
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full border-b border-gray-100" data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/1f7ac4cefeb75129d0dbd76cf5ce13e46fb327af.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Web / root / Sender / Message">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                      <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">Akira Asada</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-row items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Web / root / Timestamp">
                      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[12px] text-left text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">10:27 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left" style={{ width: "min-content" }}>
                    <p className="leading-[22px]">
                      <span className="text-[#1264a3]">@Marcos</span>
                      <span className="">{` is not available so we'll be assigning `}</span>
                      <span className="text-[#1264a3]">{`@Madhu `}</span>
                      <span className="">instead.</span>
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Reactions and Replies">
                    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip p-0 relative shrink-0" data-name="💻 Reactions">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full" data-name="Reactions=1, Condensed=False">
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                          <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                            <p className="block leading-[16px]">👍</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">1</p>
                          </div>
                        </div>
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row gap-[5px] items-center justify-center px-[9px] py-1 relative rounded-[20px] shrink-0" data-name=".AddReaction">
                          <div className="overflow-clip relative shrink-0 size-4" data-name="✨ add-reaction">
                            <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]" data-name="Union">
                              <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/05c379de153cf1f68437fa80389a113705197ded.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full" data-name="💻 Replies">
                      <div className="overflow-clip relative rounded shrink-0 size-6" data-name="💻 Single Person">
                        <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-md size-6 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/12f5a1790924f146db884ae47a761d71caa20d64.png')` }} />
                      </div>
                      <div className="font-['Lato:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1264a3] text-[13px] text-left text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">1 reply</p>
                      </div>
                      <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-[rgba(29,28,29,0.7)] text-left">
                        <p className="block leading-[18px]">Last reply today at 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
              {/* Message 4 */}
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full border-b border-gray-100" data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/1f7ac4cefeb75129d0dbd76cf5ce13e46fb327af.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Web / root / Sender / Message">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                      <div className="flex flex-col font-['Lato:Black',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left text-nowrap">
                        <p className="block leading-[22px] whitespace-pre">Akira Asada</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-row items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Web / root / Timestamp">
                      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454447] text-[12px] text-left text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">10:27 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left" style={{ width: "min-content" }}>
                    <p className="leading-[22px]">
                      <span className="text-[#1264a3]">@Marcos</span>
                      <span className="">{` is not available so we'll be assigning `}</span>
                      <span className="text-[#1264a3]">{`@Madhu `}</span>
                      <span className="">instead.</span>
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Reactions and Replies">
                    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip p-0 relative shrink-0" data-name="💻 Reactions">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full" data-name="Reactions=1, Condensed=False">
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                          <div className="flex flex-col justify-center relative shrink-0 size-4 text-[16px]">
                            <p className="block leading-[16px]">👍</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                            <p className="block leading-[16px] whitespace-pre">1</p>
                          </div>
                        </div>
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row gap-[5px] items-center justify-center px-[9px] py-1 relative rounded-[20px] shrink-0" data-name=".AddReaction">
                          <div className="overflow-clip relative shrink-0 size-4" data-name="✨ add-reaction">
                            <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]" data-name="Union">
                              <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/05c379de153cf1f68437fa80389a113705197ded.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          {/* Composer Container */}
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-4 pt-2 px-4 relative shrink-0 w-full" data-name="Composer Container">
              <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Message input — Marketing">
                <div className="box-border content-stretch flex flex-col items-start justify-end overflow-clip p-0 relative w-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-[7px] pt-[9px] px-3 relative shrink-0 w-full">
                    <div className="basis-0 font-['Lato:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(29,28,29,0.5)] text-left">
                      <p className="block leading-[22px]">Message #project-gizmo</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row gap-1 h-10 items-center justify-start pl-2 pr-1 py-1 relative shrink-0" data-name="Actions">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-2 pr-1 py-1 relative size-full" data-name="Actions">
                        <div className="relative rounded-3xl shrink-0 size-7">
                          <div className="absolute left-0.5 size-6 top-0.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/0261cb40e94a33d0cbfd6b2e66cd2d2c1bf2a5c5.svg" />
                          </div>
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / Arrow / plus large">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                        </div>
                        <div className="h-5 relative shrink-0 w-[9px]">
                          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/4644179865bef9784f63d3ae22fb295ef8e7b540.svg" />
                        </div>
                        <div className="relative rounded shrink-0 size-7">
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / video camera">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded shrink-0 size-7">
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / microphone">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                        </div>
                        <div className="h-5 relative shrink-0 w-[9px]">
                          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/4644179865bef9784f63d3ae22fb295ef8e7b540.svg" />
                        </div>
                        <div className="relative rounded shrink-0 size-7">
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / simple smile emoji picker">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center">
                              <p className="block leading-[20px]"></p>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded shrink-0 size-7">
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / mentions activity">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center">
                              <p className="block leading-[20px]"></p>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded shrink-0 size-7">
                          <div className="absolute left-1 size-5 top-1" data-name="Icon / video camera">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.7)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-10 min-h-px min-w-px relative shrink-0" data-name="Action bar">
                      <div className="relative size-full" data-name="Action bar">
                        <div className="absolute bg-[#ffffff] bottom-1.5 box-border content-stretch flex flex-row gap-1 items-center justify-end pl-2 pr-1 py-1 right-1.5 rounded" data-name="Send">
                          <div className="relative shrink-0 size-5" data-name="Icon / Filled / send - android wear">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[18px] text-[rgba(29,28,29,0.3)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[0px]">
                            <div className="flex-none rotate-[90deg]">
                              <div className="h-0 relative w-5">
                                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/2f1ca746fe41851b165bb433aef6d572b4cf30c1.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-5 relative shrink-0 w-[15px]" data-name="down caret small">
                            <div className="absolute font-['slack-icons:Regular',_sans-serif] inset-0 leading-[0] not-italic text-[20px] text-[rgba(29,28,29,0.3)] text-center text-nowrap">
                              <p className="block leading-[20px] whitespace-pre"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(29,28,29,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]" />
              </div>
            </div>
          </div>
        </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(94,93,96,0.13)] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.05),0px_0px_20px_0px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
    </div>
  );
}
