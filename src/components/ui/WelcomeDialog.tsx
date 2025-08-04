'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// SVG paths from the provided code
const svgPaths = {
  p19236a80: "M8.64913 8.64881L28.6491 28.6488",
  p27ae7300: "M35.6758 0V2.16211H2.16211V35.6758H0V0H35.6758Z",
  p32b31980: "M231.352 0V2.16211H2.15723V54.0547H0V0H231.352Z",
  p337000: "M231.352 0V2.16211H2.15723V54.0537H0V0H231.352Z",
  p6412600: "M8.64894 28.6488L28.6489 8.64883",
  pd196b40: "M45.7451 6.54492C49.0304 0.568087 57.618 0.568143 60.9033 6.54492L103.815 84.6182C106.983 90.3819 102.813 97.4324 96.2363 97.4326H10.4121C3.83536 97.4323 -0.334642 90.3818 2.83301 84.6182L45.7451 6.54492Z",
};

interface WelcomeDialogProps {
  onYesClick?: () => void;
  onYesAgainClick?: () => void;
  onClose?: () => void;
}

function PopupBase() {
  return (
    <div
      className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Popup Base"
    >
      <div
        className="absolute bg-[#d3d2d2] h-[368.648px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[800px]"
        data-name="Base"
      />
      <div
        className="absolute bg-[#959595] h-[1.622px] translate-x-[-50%] translate-y-[-50%] w-[797.838px]"
        data-name="Shadow"
        style={{ top: "calc(50% + 183.514px)", left: "calc(50% + 1.081px)" }}
      />
      <div
        className="absolute bg-[#959595] h-[366.486px] translate-x-[-50%] translate-y-[-50%] w-[2.162px]"
        data-name="Shadow"
        style={{ top: "calc(50% + 1.081px)", left: "calc(50% + 398.919px)" }}
      />
      <div
        className="absolute bg-[#eeeeee] h-[368.649px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[2.162px]"
        data-name="Highlight"
        style={{ left: "calc(50% - 398.919px)" }}
      />
      <div
        className="absolute bg-[#eeeeee] h-[2.162px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[800px]"
        data-name="Highlight"
        style={{ top: "calc(50% - 183.243px)" }}
      />
    </div>
  );
}

function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer"
      data-name="Button"
      onClick={onClick}
    >
      <div
        className="[grid-area:1_/_1] bg-[#d3d2d2] h-[54.054px] ml-[0.001px] mt-[0.001px] relative w-[231.351px]"
        data-name="Button Base"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#000000] border-[2.162px] border-solid inset-[-2.162px] pointer-events-none"
        />
      </div>
      <div className="[grid-area:1_/_1] flex h-[54.055px] items-center justify-center ml-[0.002px] mt-0 relative w-[231.352px]">
        <div className="flex-none rotate-[180deg]">
          <div
            className="h-[54.055px] relative w-[231.352px]"
            data-name="Button Shadow"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 232 55"
            >
              <path
                d={svgPaths.p32b31980}
                fill="var(--fill-0, #959595)"
                id="Button Shadow"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="[grid-area:1_/_1] h-[54.054px] ml-0 mt-[0.001px] relative w-[231.352px]"
        data-name="Button Highlight"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 232 55"
        >
          <path
            d={svgPaths.p337000}
            fill="var(--fill-0, #EEEEEE)"
            id="Button Highlight"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] flex flex-col font-handjet font-normal justify-center leading-[0] ml-[115.677px] mt-[26.136px] relative text-[#000000] text-[34.595px] text-center translate-x-[-50%] translate-y-[-50%] w-[198.919px]"
      >
        <p className="block leading-none">{text}</p>
      </div>
    </div>
  );
}

function Buttons({ onYesClick, onYesAgainClick }: { onYesClick?: () => void; onYesAgainClick?: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[21.622px] items-center justify-start leading-[0] p-0 relative shrink-0"
      data-name="Buttons"
    >
      <Button text="Yes" onClick={onYesClick} />
      <Button text="Yes again" onClick={onYesAgainClick} />
    </div>
  );
}

function PopUpContent({ onYesClick, onYesAgainClick }: { onYesClick?: () => void; onYesAgainClick?: () => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[43.243px] h-[188.649px] items-start justify-start p-0 translate-x-[-50%] translate-y-[-50%] w-[542.703px]"
      data-name="Pop Up Content"
      style={{ top: "calc(50% + 33.784px)", left: "calc(50% + 74.595px)" }}
    >
      <div
        className="font-handjet font-normal leading-none min-w-full relative shrink-0 text-[#000000] text-[34.595px] text-left"
        style={{
          width: "min-content",
        }}
      >
        <p className="block mb-0">Are you sure you want to do this?</p>
        <p className="block">
          This action cannot be undone.
          <br />
          You are about to experience some sick work.
        </p>
      </div>
      <Buttons onYesClick={onYesClick} onYesAgainClick={onYesAgainClick} />
    </div>
  );
}

function WarningIcon() {
  return (
    <div
      className="absolute contents translate-x-[-50%] translate-y-[-50%]"
      data-name="Warning Icon"
      style={{ top: "calc(50% - 3.784px)", left: "calc(50% - 282.162px)" }}
    >
      <div
        className="absolute h-[135.135px] translate-x-[-50%] translate-y-[-50%] w-[128.649px]"
        style={{ top: "calc(50% - 3.784px)", left: "calc(50% - 282.162px)" }}
      >
        <div className="absolute bottom-[23.4%] left-[9.07%] right-[9.07%] top-[4.43%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 106 99"
          >
            <path
              d={svgPaths.pd196b40}
              fill="var(--fill-0, #F1F324)"
              id="Polygon 1"
              stroke="var(--stroke-0, black)"
              strokeWidth="2.16216"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute flex flex-col font-handjet justify-center leading-[0] not-italic text-[#000000] text-[69.189px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]"
        style={{ top: "calc(50% - 8.73px)", left: "calc(50% - 282.27px)" }}
      >
        <p className="block leading-none whitespace-pre">!</p>
      </div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute size-[37.838px] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
      data-name="Button"
      style={{ top: "calc(50% - 146.487px)", left: "calc(50% + 362.161px)" }}
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g id="Button">
          <rect
            fill="var(--fill-0, #959595)"
            height="37.8378"
            id="Button Shadow"
            width="37.8378"
            x="0.000976562"
          />
          <rect
            fill="var(--fill-0, #D3D2D2)"
            height="35.6757"
            id="Button Base"
            width="35.6757"
            x="0.000976562"
          />
          <g id="X">
            <path
              d={svgPaths.p19236a80}
              id="Vector 59"
              stroke="var(--stroke-0, #737776)"
              strokeWidth="3.24324"
            />
            <path
              d={svgPaths.p6412600}
              id="Vector 60"
              stroke="var(--stroke-0, #737776)"
              strokeWidth="3.24324"
            />
          </g>
          <path
            d={svgPaths.p27ae7300}
            fill="var(--fill-0, #EEEEEE)"
            id="Button Highlight"
          />
        </g>
      </svg>
    </div>
  );
}

function TopBar({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="absolute contents left-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Top Bar"
      style={{ top: "calc(50% - 146.486px)" }}
    >
      <div
        className="absolute bg-[#0200a1] h-[54.054px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[778.378px]"
        data-name="Bar"
        style={{ top: "calc(50% - 146.487px)" }}
      />
      <CloseButton onClick={onClose} />
      <div
        className="absolute flex flex-col font-handjet font-normal justify-center leading-[0] text-[#ffffff] text-[34.595px] text-left translate-y-[-50%] w-[700px]"
        style={{
          top: "calc(50% - 146.298px)",
          left: "calc(50% - 372.973px)",
        }}
      >
        <p className="block leading-none">Enter Vamsi Batchu&apos;s Portfolio</p>
      </div>
    </div>
  );
}

export default function WelcomeDialog({ onYesClick, onYesAgainClick, onClose }: WelcomeDialogProps) {
  const router = useRouter();

  const handleYesClick = () => {
    onYesClick?.();
    router.push('/terminal');
  };

  const handleYesAgainClick = () => {
    onYesAgainClick?.();
    router.push('/terminal');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative size-full scale-60 md:scale-100" data-name="Dialog Popup">
        <PopupBase />
        <PopUpContent onYesClick={handleYesClick} onYesAgainClick={handleYesAgainClick} />
        <WarningIcon />
        <TopBar onClose={onClose} />
      </div>
    </div>
  );
} 