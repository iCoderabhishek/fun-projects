import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ThankYouBoxProps {
  position: { x: number; y: number };
  onAnimationComplete?: () => void;
}

export const ThankYouBox: React.FC<ThankYouBoxProps> = ({ position, onAnimationComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      onAnimationComplete={onAnimationComplete}
      className={cn(
        'absolute w-40 h-40 rounded-lg flex items-center justify-center',
        'before:absolute before:inset-0 before:p-[2px] before:rounded-lg',
        'before:bg-gradient-to-r before:from-emerald-500 before:via-teal-500 before:to-cyan-500',
        'before:animate-gradient before:content-[""]',
        'bg-gray-900'
      )}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span className="text-white font-bold text-xl z-10">Thank you 😽</span>
    </motion.div>
  );
};