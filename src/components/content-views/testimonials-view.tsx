import React from "react";
import { motion } from "framer-motion";

export function TestimonialsView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-[#f2f2f7] rounded-3xl overflow-hidden border-0 w-full p-8"
    >
      <h2 className="text-2xl font-semibold mb-6">What colleagues are saying</h2>
      <div className="space-y-6">
        {/* Testimonials will be added here */}
        <p>Coming soon...</p>
      </div>
    </motion.div>
  );
}
