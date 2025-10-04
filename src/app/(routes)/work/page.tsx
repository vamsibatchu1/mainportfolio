'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import { WorkTab } from '../work-tab/WorkTab';

export default function WorkPage() {
  return (
    <MainLayout>
      <motion.div 
        className="w-full h-[calc(100vh-120px)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <WorkTab />
      </motion.div>
    </MainLayout>
  );
}
