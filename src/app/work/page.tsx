'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, ebGaramondFont, interFont } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';

export default function WorkPage() {
  const pathname = usePathname();
  const email = 'vamsibatchuk@gmail.com';

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
      {/* Navigation */}
      <nav className={`${jakartaFont.variable} font-jakarta w-full max-w-[1200px] mx-auto px-4 md:px-4 pt-6 md:pt-8 pb-4 md:pb-6`}>
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/home" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/home' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Home
          </Link>
          <Link href="/writing" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/writing' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Writing
          </Link>
          <Link href="/experiments" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/experiments' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Experiments
          </Link>
          <Link href="/work" className={`text-black hover:opacity-70 transition-opacity text-[16px] md:text-[18px] border-b-2 pb-1 ${pathname === '/work' ? 'border-dotted border-black' : 'border-transparent'}`}>
            Work
          </Link>
        </div>
      </nav>

      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4 md:px-4 pb-6 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 md:gap-12 text-center max-w-2xl"
        >
          {/* Message */}
          <p className={`${ebGaramondFont.className} text-black text-[18px] md:text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.02em]`}>
            For access to work samples, please send an email to:
          </p>

          {/* Email Address */}
          <p className={`${interFont.variable} font-inter text-black text-[18px] md:text-[24px] font-medium`}>
            {email}
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${email}`}
            className={`${jakartaFont.variable} font-jakarta flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-sm hover:opacity-80 transition-opacity text-[16px] md:text-[18px]`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
