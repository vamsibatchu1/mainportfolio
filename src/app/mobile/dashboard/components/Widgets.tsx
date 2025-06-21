import { interFont } from '@/app/fonts';

export function Widgets() {
  return (
    <div className={`relative w-[345px] ${interFont.variable}`}>
      <div className="flex flex-col gap-4 items-start justify-start p-0 relative w-[345px]">
        <div className="relative w-[345px]">
          <div className="flex flex-row items-center justify-between p-0 relative w-[345px]">
            <div className="font-inter font-medium text-[20px] leading-6 text-[#111111]">
              <p>Widgets</p>
            </div>
            <div className="w-6 h-6 overflow-hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#edf1ff] rounded-2xl w-[345px]">
          <div className="flex flex-col justify-center overflow-hidden relative w-full h-full">
            <div className="flex flex-col gap-4 items-start justify-center p-4 relative w-[345px]">
              <div className="relative w-full">
                <div className="flex flex-col gap-8 items-start justify-start p-0 relative w-full">
                  <div className="relative w-full">
                    <div className="flex flex-row gap-2 items-center justify-start p-0 relative w-full">
                      <div className="w-6 h-6 overflow-hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#819dfc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="relative w-[241px]">
                        <div className="flex flex-col items-start justify-center p-0 relative w-[241px]">
                          <div className="font-inter font-medium text-[16px] leading-6 text-[#111111]">
                            <p>Customize your home screen</p>
                          </div>
                          <div className="relative">
                            <div className="flex flex-row gap-0.5 items-start justify-start p-0 relative">
                              <div className="font-inter font-normal text-[14px] leading-5 text-[#545454]">
                                <p>Long press and search for &quot;Rocket&quot;</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e3e9fb] rounded-full w-8 h-8">
                        <div className="flex flex-row items-center justify-center relative w-full h-full">
                          <div className="flex flex-row gap-2.5 items-center justify-center p-2 relative w-8 h-8">
                            <div className="w-6 h-6 overflow-hidden">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="#373d50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        </div>
      </div>
    </div>
  );
} 