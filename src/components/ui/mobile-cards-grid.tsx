import { motion } from "framer-motion";

interface CardProps {
  color: string;
  content: string;
  icon: string;
}

interface MobileCardsGridProps {
  cards?: CardProps[];
}

export function MobileCardsGrid({ cards = [] }: MobileCardsGridProps) {
  return (
    <div className="md:hidden w-full space-y-6 pb-0">
      {/* First row - 2 cards */}
      <div className="grid grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src="/images/1.svg"
            alt=""
            style={{ maxWidth: 'none' }}

          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/images/2.svg"
            alt=""
            style={{ maxWidth: 'none' }}

          />
        </motion.div>
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="/images/3.svg"
              alt=""
              style={{ maxWidth: 'none' }}

            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="/images/4.svg"
              alt=""
              style={{ maxWidth: 'none' }}

            />
          </motion.div>
        </div>
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="/images/5.svg"
            alt=""
            style={{ maxWidth: 'none' }}

          />
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img
            src="/images/6.svg"
            alt=""
            style={{ maxWidth: 'none' }}

          />
        </motion.div>
      </div>
    </div>
  );
}
