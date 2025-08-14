'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../../fonts';

export default function WorkPage() {
  return (
    <motion.div 
      className="w-full flex flex-col p-10 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
     

    {/* Section 1: Case Study 1 */}
    <div className="w-[800px] flex flex-col gap-8 mx-auto">
         {/* First Row: Three Images */}
         <div className="flex gap-10">
           <div className="w-[240px] h-[240px] bg-gray-200 rounded-lg flex items-center justify-center">
             <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>Image 1</span>
           </div>
           <div className="w-[240px] h-[240px] bg-gray-200 rounded-lg flex items-center justify-center">
             <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>Image 2</span>
           </div>
           <div className="w-[240px] h-[240px] bg-gray-200 rounded-lg flex items-center justify-center">
             <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>Image 3</span>
           </div>
         </div>
         
         {/* Second Row: Three Text Columns */}
         <div className="flex gap-10">
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the first project and its key features.
             </p>
           </div>
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the second project and its key features.
             </p>
           </div>
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the third project and its key features.
             </p>
           </div>
         </div>
       </div>     



{/* Section 2: Case Study 2 ////////////////////////////////////////////////////////*/}
<div className="w-[800px] flex flex-col gap-8 mx-auto mt-20">
         {/* First Row: Three Images */}
         <div className="flex gap-10">
           <div className="w-[380px] h-[380px] bg-gray-200 rounded-lg flex items-center justify-center">
             <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>Image 1</span>
           </div>
           <div className="w-[380px] h-[380px] bg-gray-200 rounded-lg flex items-center justify-center">
             <span className={`${jakartaFont.className} text-gray-500 text-[14px]`}>Image 2</span>
           </div>
         </div>
         
         {/* Second Row: Three Text Columns */}
         <div className="flex gap-10">
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the first project and its key features.
             </p>
           </div>
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the second project and its key features.
             </p>
           </div>
           <div className="w-[240px]">
             <p className={`${jakartaFont.className} text-gray-600 text-[14px] leading-[140%]`}>
               Brief description of the third project and its key features.
             </p>
           </div>
         </div>
       </div>     
    </motion.div>

  );
}
