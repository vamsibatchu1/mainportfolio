import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export function AnimatedLogo({ 
  width = 1515.29, 
  height = 779, 
  color = 'currentColor',
  className = ''
}: AnimatedLogoProps) {
  return (
    <div className={`container ${className}`}>
      <div className="container__inner">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={width} 
          height={height} 
          viewBox="0 0 1515.29 779"
          style={{ color: color }}
        >
          <defs>
            <filter id="filter">
              <feDropShadow 
                stdDeviation="10 10" 
                in="SourceGraphic" 
                dx="0" 
                dy="0" 
                floodColor="#80d4b2" 
                floodOpacity="0.7" 
                x="0%" 
                y="0%" 
                width="100%" 
                height="100%" 
                result="dropShadow" 
              />
            </filter>
          </defs>

          <g filter="url(#filter)">
            <g id="outline" fill="none" stroke="currentColor" strokeMiterlimit="10">
              <ellipse cx="757.64" cy="389.5" rx="716.23" ry="362.15" strokeWidth="19" />
              <path strokeWidth="20" d="M181.96 605h1151.37M1473.87 389.5h-153.23M41.41 389.5h153.23M181.96 174h1151.37" />
            </g>

            <g id="moving_lines" mask="url(#moving_lines_mask)">
              <motion.path 
                d="M757.64 27.35c-395.56 0-716.23 162.14-716.23 362.15s320.67 362.15 716.23 362.15" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_1" 
              />
              <motion.path 
                d="M757.64 751.65c395.57 0 716.23-162.14 716.23-362.15S1153.21 27.35 757.64 27.35" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_6" 
              />
              <motion.path 
                d="M757.64 751.65c251.66 0 455.68-162.14 455.68-362.15S1009.3 27.35 757.64 27.35" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_5" 
              />
              <motion.path 
                d="M757.64 751.65c88.74 0 160.68-162.14 160.68-362.15S846.38 27.35 757.64 27.35" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_4" 
              />
              <motion.path 
                d="M757.64 27.35C668.91 27.35 597 189.49 597 389.5s71.94 362.15 160.67 362.15" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_3" 
              />
              <motion.path 
                d="M757.64 27.35C506 27.35 302 189.49 302 389.5s204 362.15 455.64 362.15" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10" 
                strokeWidth="19" 
                id="line_2" 
              />
            </g>

            <g id="text">
              <path fill="currentColor" d="M271.98 433.5v-114h-34v140h168v-26h-134zM587 319.5v99.86a14.14 14.14 0 0 1-14.14 14.14h-99.75A14.14 14.14 0 0 1 459 419.36V319.5h-34v105a35 35 0 0 0 35 35h126a35 35 0 0 0 35-35v-105ZM826.98 319.5h-2.21l-5.79 7.89-70.5 96.02-70.5-96.02-5.8-7.89h-28.2v140h34v-80.11l58.81 80.11h23.37l58.82-80.11v80.11h34v-140h-26zM1243.31 319.5v95.93l-116-92.55-4.24-3.38H1093.31v140h34v-97.42l116 92.55 6.1 4.87h27.9v-140h-34zM1037 319.5H911a35 35 0 0 0-35 35v70a35 35 0 0 0 35 35h126a35 35 0 0 0 35-35v-70a35 35 0 0 0-35-35Zm-63 117.33a33.33 33.33 0 0 1-29-49.74l25-44.16a4.53 4.53 0 0 1 7.91 0l25 44.16a33.32 33.32 0 0 1-29 49.74Z" />
            </g>
          </g>

          <mask id="moving_lines_mask">
            <rect fill="#fff" width="1515.29" height="779" />
            <path fill="#000" d="M0 266.14h1515.29v246.71H0z" />
          </mask>
        </svg>
      </div>
    </div>
  );
} 