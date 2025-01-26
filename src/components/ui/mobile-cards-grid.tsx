import { motion } from 'framer-motion';
import { digital } from '@/app/fonts';
import { Sigmar } from 'next/font/google';


interface CardProps {
  color: string;
  content: string;
  icon: string;
}


interface MobileCardsGridProps {
  cards: CardProps[];
}

export function MobileCardsGrid({ cards }: MobileCardsGridProps) {
  return (
    <div className="md:hidden w-full space-y-4">
      {/* First row - 2 cards */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-6 aspect-square"
          style={{ backgroundColor: cards[5].color }}
        >
          <div className="flex flex-col h-full">
            <img src={cards[5].icon} alt="" className="w-6 h-6 mb-4" />
            <p className={`${digital.className} text-white font-bold text-[26px] leading-tight`}>
              {cards[5].content}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-6 aspect-square"
          style={{ backgroundColor: cards[2].color }}
        >
          <div className="flex flex-col h-full">
            <img src={cards[2].icon} alt="" className="w-6 h-6 mb-4" />
            <p className={`${digital.className} text-white font-bold text-[24px] leading-tight`}>
              {cards[2].content}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Middle row - 2 small cards + 1 tall card */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 aspect-square"
            style={{ backgroundColor: cards[3].color }}
          >
            <div className="flex flex-col h-full">
              <img src={cards[3].icon} alt="" className="w-6 h-6 mb-4" />
              <p className={`${digital.className} text-white font-bold text-[26px] leading-tight`}>
                {cards[3].content}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-6 aspect-square"
            style={{ backgroundColor: cards[1].color }}
          >
            <div className="flex flex-col h-full">
              <img src={cards[1].icon} alt="" className="w-6 h-6 mb-4" />
              <p className={`${digital.className} text-white font-bold text-[24px] leading-tight`}>
                {cards[1].content}
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-6 h-full"
          style={{ backgroundColor: cards[0].color }}
        >
          <div className="flex flex-col h-full">
            <img src={cards[0].icon} alt="" className="w-6 h-6 mb-4" />
            <p className={`${digital.className} text-white font-bold text-[26px] letterspacing:2px leading-tight`}>
              {cards[0].content}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Last row - 1 wide card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-2xl p-6 aspect-[2/1]"
        style={{ backgroundColor: cards[4].color }}
      >
        <div className="flex flex-col h-full">
          <img src={cards[4].icon} alt="" className="w-6 h-6 mb-4" />
          <p className={`${digital.className} text-white font-bold text-[18px] leading-tight`}>
            {cards[4].content}
          </p>
        </div>
      </motion.div>
    </div>
  );
} 