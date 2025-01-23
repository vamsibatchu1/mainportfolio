"use client"

import { useId } from "react"

interface ToothImageProps {
  src: string
  alt: string
  className?: string
}

export default function ToothImage({ src, alt, className = "" }: ToothImageProps) {
  const maskId = useId()

  return (
    <div className={`relative ${className}`}>
      {/* SVG Mask Definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <mask id={maskId}>
            <path
              fill="white"
              d="M0 0 L800 0 L800 600 
                 C750 610, 780 630, 760 650
                 C740 670, 720 660, 700 680
                 C680 700, 660 690, 640 710
                 C620 730, 600 720, 580 740
                 C560 760, 540 750, 520 770
                 C500 790, 480 780, 460 800
                 L0 800 Z"
            />
          </mask>
        </defs>
      </svg>

      {/* Image with Mask Applied */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
              <path d='M0 0 L800 0 L800 600 
                       C750 610, 780 630, 760 650
                       C740 670, 720 660, 700 680
                       C680 700, 660 690, 640 710
                       C620 730, 600 720, 580 740
                       C560 760, 540 750, 520 770
                       C500 790, 480 780, 460 800
                       L0 800 Z'/>
            </svg>
          `)}")`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
              <path d='M0 0 L800 0 L800 600 
                       C750 610, 780 630, 760 650
                       C740 670, 720 660, 700 680
                       C680 700, 660 690, 640 710
                       C620 730, 600 720, 580 740
                       C560 760, 540 750, 520 770
                       C500 790, 480 780, 460 800
                       L0 800 Z'/>
            </svg>
          `)}")`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

