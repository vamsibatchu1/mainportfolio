'use client';

import React from 'react';
import { latoFont } from '../../../fonts';
import { Plus, Video, Mic, Smile, AtSign, Send, ChevronDown, Pin } from 'lucide-react';

export default function Slack() {
  return (
    <div className="w-[640px] h-[500px] flex bg-white rounded-tr-[6px]">
      {/* Left Sidebar - Exact Figma Design */}
      <div
        className="bg-[#5c205f] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-l-[6px] h-[500px] w-48"
        data-name="Sidebar"
      >
        {/* Header */}
        <div
          className="box-border content-stretch flex flex-row h-[52px] items-center justify-start pl-0 pr-3 py-0 relative shrink-0 w-full"
          data-name="Header"
        >
          <div
            className="basis-0 grow h-[50px] min-h-px min-w-px overflow-clip relative shrink-0"
            data-name="💻 Header"
          >
            <div
              className="absolute box-border content-stretch flex flex-row gap-3 items-center justify-start left-4 p-0 top-[11px]"
            >
              <div
                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
                data-name="Name"
              >
                <div
                  className={`${latoFont.className} leading-[0] not-italic opacity-90 relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap`}
                >
                  <p className="block leading-[27px] whitespace-pre">Home</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
            data-name="Buttons"
          >
            <div
              className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded shrink-0"
              data-name="Button"
            >
              <div
                className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]"
                data-name="Base"
              >
                <div className="overflow-clip relative shrink-0 size-5" data-name="Icon">
                  <div
                    className="absolute bottom-1/4 left-[15%] right-[15%] top-[27.5%]"
                    data-name="Union"
                  >
                    <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/f15a40fbb9de15dc8a7f1991915fe7644d1ff11c.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col h-7 items-center justify-center p-px relative rounded shrink-0"
              data-name="Button"
            >
              <div
                className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-[5px] py-0 relative rounded-[3px] shrink-0 size-[26px]"
                data-name="Base"
              >
                <div className="overflow-clip relative shrink-0 size-5" data-name="Icon">
                  <div
                    className="absolute inset-[7.38%_7.37%_7.5%_7.5%]"
                    data-name="Union"
                  >
                    <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/848f22102a774b815f302b97a40bbdbf39fcd586.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All workspaces */}
        <div className="h-[41px] overflow-clip relative shrink-0 w-full">
          <div
            className={`${latoFont.className} leading-[0] left-[22px] not-italic text-[#eaecf0] text-[13px] text-left text-nowrap absolute`}
            style={{ top: "calc(50% - 9.5px)" }}
          >
            <p className="block leading-[18px] whitespace-pre">All workspaces</p>
          </div>
          <div
            className="absolute left-[107px] overflow-clip size-5 top-2.5"
            data-name="✨ caret-down"
          >
            <div className="absolute inset-[36.25%_27.5%_37.5%_27.5%]" data-name="Union">
              <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/c4a4ac1c1baa4d457a895c0e2dbabb27b1671790.svg" />
            </div>
          </div>
          <div className="absolute left-[21px] rounded size-4 top-3" data-name="💻 Workspace" />
        </div>

        {/* Channel list */}
        <div
          className="box-border content-stretch flex flex-col flex-1 items-center justify-start p-0 relative shrink-0 w-full"
        >
          <div
            className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-1 px-2 relative shrink-0 w-full"
            data-name="Channel list"
          >
            {/* Unreads */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#ffffff] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">Unreads</p>
              </div>
            </div>

            {/* Threads */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#ffffff] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">Threads</p>
              </div>
            </div>

            
          </div>

          <div className="h-[19px] shrink-0 w-full" />

          <div
            className="box-border content-stretch flex flex-col items-start justify-start px-2 py-0 relative shrink-0 w-full"
            data-name="Channel list"
          >
            {/* Channels Section Header */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative shrink-0 w-full"
              data-name="💻 Section Header"
            >
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#eaecf0] text-[13px] text-left`}
              >
                <p className="block leading-[18px]">Channels</p>
              </div>
            </div>

            {/* design-team */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#ffffff] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">design</p>
              </div>
            </div>

            {/* random */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#ffffff] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">random</p>
              </div>
            </div>

            {/* vamsi-testimonials (active) */}
            <div
              className="bg-[#3a0f3f] box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#ffffff] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">testimonials</p>
              </div>
            </div>

            <div
              className="box-border content-stretch flex flex-row gap-2 h-5 items-center justify-start overflow-clip p-0 shrink-0 w-full"
              data-name="Divider"
            />

            {/* Favs Section Header */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative shrink-0 w-full"
              data-name="💻 Section Header"
            >
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#eaecf0] text-[13px] text-left`}
              >
                <p className="block leading-[18px]">❤️️ Favs</p>
              </div>
            </div>

            {/* cool-crew */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Channel"
            >
              <div className="relative shrink-0 size-5" data-name="Channel Icon">
                <div
                  className={`font-['slack-icons:Regular',_sans-serif] absolute inset-0 leading-[0] not-italic text-[#eaecf0] text-[20px] text-left`}
                >
                  <p className="block leading-[20px]">#</p>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#eaecf0] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">cool-crew</p>
              </div>
            </div>

            <div
              className="box-border content-stretch flex flex-row gap-2 h-5 items-center justify-start overflow-clip p-0 shrink-0 w-full"
              data-name="Divider"
            />

            {/* Direct messages Section Header */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-4 py-[3px] relative shrink-0 w-full"
              data-name="💻 Section Header"
            >
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#eaecf0] text-[13px] text-left`}
              >
                <p className="block leading-[18px]">Direct messages</p>
              </div>
            </div>

            {/* Lee Hao */}
            <div
              className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start overflow-clip pl-3 pr-2 py-[3px] relative rounded shrink-0 w-full"
              data-name="💻 Direct Message"
            >
              <div className="relative shrink-0 size-5" data-name="💻 Single Person">
                <div
                  className="absolute left-0 size-5 top-0"
                  data-name="Avatar Mask"
                >
                  <img alt="" className="block max-w-none size-full" height="20" src="http://localhost:3845/assets/e277e92b74ae22e9af9dca1f9b9e71a43263c556.png" width="20" />
                </div>
                <div
                  className="absolute left-2.5 size-[15px] top-2.5"
                  data-name="✨ status-member"
                >
                  <div
                    className="absolute inset-[27.5%]"
                    data-name="Union"
                  >
                    <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/9ed0c9e99a25520dd5a2946758cbdecf0850110a.svg" />
                  </div>
                </div>
              </div>
              <div
                className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left`}
              >
                <p className="block leading-[22px]">Lee Hao</p>
              </div>
              <div
                className="bg-[#83388a] box-border content-stretch flex flex-row gap-2 h-[18px] items-center justify-start px-[9px] py-0 relative rounded-[10px] shrink-0"
                data-name="💻 Badge"
              >
                <div
                  className={`${latoFont.className} leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap`}
                >
                  <p className="block leading-[18px] whitespace-pre">2</p>
                </div>
              </div>
            </div>

            <div
              className="box-border content-stretch flex flex-row gap-2 h-5 items-center justify-start overflow-clip p-0 shrink-0 w-full"
              data-name="Divider"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">


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
                   
                  
                  {/* Channel Name */}
                  <div className={`${latoFont.className} leading-[27px] opacity-90 relative text-[#1d1c1d] text-[18px] font-black`}>
                    #Testimonials
                  </div>
                  
                  {/* Caret Down */}
                  <div className="overflow-clip relative size-5">
                    <div className="absolute inset-[36.25%_27.5%_33.75%_27.5%]">
                      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/0a95a0bc705890de6b50b740685425685c07d48f.svg" />
                    </div>
                  </div>
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
          
          {/* Secondary Header - Exact Figma Design */}
          <div
            className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-start justify-start px-4 pb-3 relative size-full border-b border-gray-200 rounded-tr-[6px]"
            data-name="Secondary header"
          >
            <div
              className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[5px] h-6 items-center justify-end p-[4px] relative rounded-md shrink-0"
              data-name="Bookmark"
            >
              <div className="relative shrink-0 size-4" data-name="Icon">
                <div className="absolute bg-[#ffffff] left-0 rounded-[3px] size-4 top-0" />
                <div
                  className="absolute left-[-2px] size-5 top-[-2px]"
                  data-name="🚫 Legacy 🚫 Icon / pin"
                >
                  <Pin size={16} className="text-[#7c7a7f]" />
                </div>
              </div>
              <div
                className={`${latoFont.className} leading-[0] not-italic relative shrink-0 text-[#7c7a7f] text-[13px] text-left text-nowrap`}
              >
                <p className="block leading-[18px] whitespace-pre">5 Pinned</p>
              </div>

            </div>
            <div
              className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[5px] h-6 items-center justify-end p-[4px] relative rounded-md shrink-0"
              data-name="Bookmark"
            >
              <div className="relative shrink-0 size-4" data-name="Icon">
                <div className="absolute bg-[#ffffff] left-0 rounded-[3px] size-4 top-0" />
                <div
                  className="absolute left-[-2px] size-5 top-[-2px]"
                  data-name="🚫 Legacy 🚫 Icon / Arrow / plus large"
                >
                  <Plus size={16} className="text-[#7c7a7f]" />
                </div>
              </div>
              <div
                className={`${latoFont.className} leading-[0] not-italic relative shrink-0 text-[#7c7a7f] text-[13px] text-left text-nowrap`}
              >
                <p className="block leading-[18px] whitespace-pre">Add a bookmark</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="bg-[#ffffff] relative rounded-br-[6px] w-[448px] flex flex-col min-h-0">
          <div className="flex flex-col flex-1 overflow-hidden min-h-0">
            <div className="flex-1 overflow-y-auto p-0 min-h-0" data-name="Messages">
              {/* Message 1 */}
              <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full" data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/46c233ddc0812a9e21e25774560319ace06ef7cb.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                                      <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Message">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                        <div className={`${latoFont.className} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[16px] font-black text-left text-nowrap`}>
                          <p className="block leading-[22px] whitespace-pre">Sarah Chen</p>
                        </div>
                      </div>
                    <div className="box-border content-stretch flex flex-row items-start justify-start pb-px pt-[3px] px-0 relative shrink-0" data-name=".Timestamp">
                      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(29,28,29,0.7)] text-left text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">10:12 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Lato:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left" style={{ width: "min-content" }}>
                    <p className="block leading-[22px]">Vamsi is an incredible designer! His attention to detail and user-centered approach completely transformed our product. The way he thinks through user flows and creates intuitive interfaces is just amazing. Highly recommend working with him!</p>
                  </div>
                </div>
              </div>

              {/* Message 2 - With Unfurl - Exact Figma Design */}
              <div className="bg-[rgba(242,199,68,0.1)] box-border content-stretch flex flex-col gap-1 items-start justify-start pb-2 pt-1 px-5 relative w-full" data-name="💻 Conversation">
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
                        <div className={`${latoFont.className} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[16px] font-black text-left text-nowrap`}>
                          <p className="block leading-[22px] whitespace-pre">Marcus Rodriguez</p>
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
                        <span className="text-[#1264a3]">@Vamsi</span>
                        <span className="">{` delivered beyond our expectations! His design system work was impeccable and he really understood our brand. The collaboration was smooth and he always went the extra mile to ensure quality. `}</span>
                        <span className="text-[#1264a3]">{`@Team`}</span>
                        <span className="">, you need to see his portfolio!</span>
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
                            <div className={`${latoFont.className} basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1c1d] text-[16px] font-black text-left`}>
                              <p className="block leading-[22px]">Priya Patel</p>
                            </div>
                          </div>
                          <div className="font-['Lato:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[15px] text-left w-full">
                            <p className="block leading-[22px]">
                              Working with Vamsi was a game-changer for our startup. His strategic thinking and ability to translate complex requirements into elegant solutions is unmatched. The design he created not only looks beautiful but also improved our conversion rates by 40%. He&apos;s the real deal!
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
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
                              <p className="block leading-[16px]">👍</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
                              <p className="block leading-[16px]">🤞</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">20</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
                              <p className="block leading-[16px]">🐶</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
                              <p className="block leading-[16px]">😅</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
                              <p className="block leading-[16px]">😳</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0 text-[11px] text-nowrap">
                              <p className="block leading-[16px] whitespace-pre">1</p>
                            </div>
                          </div>
                          <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                            <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
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
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full " data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/1f7ac4cefeb75129d0dbd76cf5ce13e46fb327af.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Web / root / Sender / Message">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                      <div className={`${latoFont.className} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[16px] font-black text-left text-nowrap`}>
                        <p className="block leading-[22px] whitespace-pre">Alex Thompson</p>
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
                      <span className="text-[#1264a3]">@Vamsi</span>
                      <span className="">{` completely revolutionized our design process! His systematic approach to user research and rapid prototyping saved us months of development time. The way he presents insights to stakeholders is pure magic. `}</span>
                      <span className="text-[#1264a3]">{`@Leadership`}</span>
                      <span className="">, this guy is a game-changer!</span>
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Reactions and Replies">
                    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip p-0 relative shrink-0" data-name="💻 Reactions">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full" data-name="Reactions=1, Condensed=False">
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                          <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
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
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-2 relative w-full " data-name="💻 Conversation">
                <div className="overflow-clip relative rounded shrink-0 size-9" data-name="💻 Single Person">
                  <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-lg size-9 top-0" data-name="Avatar" style={{ backgroundImage: `url('http://localhost:3845/assets/1f7ac4cefeb75129d0dbd76cf5ce13e46fb327af.png')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="Content">
                  <div className="box-border content-stretch flex flex-row gap-2 h-[18px] items-end justify-start p-0 relative shrink-0" data-name=".Web / root / Sender / Message">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0" data-name="Sender">
                      <div className={`${latoFont.className} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1d1c1d] text-[16px] font-black text-left text-nowrap`}>
                        <p className="block leading-[22px] whitespace-pre">David Kim</p>
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
                      <span className="text-[#1264a3]">@Vamsi</span>
                      <span className="">{` is a design genius! His ability to balance aesthetics with functionality is incredible. The mobile app he designed for us increased user engagement by 60% and our App Store rating went from 3.2 to 4.8. `}</span>
                      <span className="text-[#1264a3]">{`@Product`}</span>
                      <span className="">, this is the kind of talent we need more of!</span>
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="Reactions and Replies">
                    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip p-0 relative shrink-0" data-name="💻 Reactions">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative size-full" data-name="Reactions=1, Condensed=False">
                        <div className="bg-[rgba(29,28,29,0.04)] box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic px-1.5 py-1 relative rounded-[20px] shrink-0 text-[#1d1c1d] text-left" data-name=".Reaction">
                          <div className="flex flex-col justify-center relative shrink-0 size-4 text-[15px]">
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
            
          {/* Composer Container - Exact Figma Design */}
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-4 pt-2 px-4 relative shrink-0 w-full" data-name="Composer Container">
            <div
              className="bg-[#ffffff] relative rounded-lg size-full"
              data-name="Message input — Marketing"
            >
              <div className="box-border content-stretch flex flex-col items-start justify-end overflow-clip p-0 relative size-full">
                <div
                  className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-[7px] pt-[9px] px-3 relative shrink-0 w-full"
                >
                  <div
                    className={`${latoFont.className} basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(29,28,29,0.5)] text-left`}
                  >
                    <p className="block leading-[22px]">Message #project-gizmo</p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
                >
                  <div
                    className="box-border content-stretch flex flex-row gap-1 h-10 items-center justify-start pl-2 pr-1 py-1 relative shrink-0"
                    data-name="Actions"
                  >
                    <div
                      className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-2 pr-1 py-1 relative size-full"
                      data-name="Actions"
                    >
                      <div className="relative rounded-3xl shrink-0 size-7">
                        <div className="absolute left-0.5 size-6 top-0.5">
                          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/0261cb40e94a33d0cbfd6b2e66cd2d2c1bf2a5c5.svg" />
                        </div>
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / Arrow / plus large">
                          <Plus size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                      <div className="h-5 relative shrink-0 w-[9px]">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/4644179865bef9784f63d3ae22fb295ef8e7b540.svg" />
                      </div>
                      <div className="relative rounded shrink-0 size-7">
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / video camera">
                          <Video size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                      <div className="relative rounded shrink-0 size-7">
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / microphone">
                          <Mic size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                      <div className="h-5 relative shrink-0 w-[9px]">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/4644179865bef9784f63d3ae22fb295ef8e7b540.svg" />
                      </div>
                      <div className="relative rounded shrink-0 size-7">
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / simple smile emoji picker">
                          <Smile size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                      <div className="relative rounded shrink-0 size-7">
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / mentions activity">
                          <AtSign size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                      <div className="relative rounded shrink-0 size-7">
                        <div className="absolute left-1 size-5 top-1" data-name="Icon / video camera">
                          <Video size={18} className="text-[rgba(29,28,29,0.7)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="basis-0 grow h-10 min-h-px min-w-px relative shrink-0"
                    data-name="Action bar"
                  >
                    <div className="relative size-full" data-name="Action bar">
                      <div
                        className="absolute bg-[#ffffff] bottom-1.5 box-border content-stretch flex flex-row gap-1 items-center justify-end pl-2 pr-1 py-1 right-1.5 rounded"
                        data-name="Send"
                      >
                        <div
                          className="relative shrink-0 size-5"
                          data-name="Icon / Filled / send - android wear"
                        >
                          <Send size={18} className="text-[rgba(29,28,29,0.3)]" />
                        </div>
                        <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                          <div className="flex-none rotate-[90deg]">
                            <div className="h-0 relative w-5">
                              <div
                                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                                style={{ "--stroke-0": "rgba(29, 28, 29, 1)" } as React.CSSProperties}
                              >
                                <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/2f1ca746fe41851b165bb433aef6d572b4cf30c1.svg" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-5 relative shrink-0 w-[15px]" data-name="down caret small">
                          <ChevronDown size={20} className="text-[rgba(29,28,29,0.3)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(29,28,29,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(94,93,96,0.13)] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.05),0px_0px_20px_0px_rgba(0,0,0,0.1)]"></div>
      </div>
    </div>
  );
}
