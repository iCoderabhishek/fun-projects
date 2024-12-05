import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface BoxProps {
  onClick?: () => void;
  onHover?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Box: React.FC<BoxProps> = ({
  onClick,
  onHover,
  disabled = false,
  style,
  className,
  children,
  variant = 'primary',
}) => {
  const gradientColors = {
    primary: 'before:from-pink-500 before:via-purple-500 before:to-blue-500',
    secondary: 'before:from-amber-500 before:via-orange-500 before:to-red-500',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        'w-32 h-32 rounded-lg cursor-pointer transition-colors duration-300',
        'before:absolute before:inset-0 before:p-[2px] before:rounded-lg',
        'before:bg-gradient-to-r',
        gradientColors[variant],
        'before:animate-gradient before:content-[""]',
        'relative bg-gray-900 overflow-hidden flex items-center justify-center',
        className
      )}
      onClick={onClick}
      onMouseEnter={onHover}
      onTouchStart={onHover} // Add touch support for mobile
      style={style}
    >
      {children && (
        <span className="text-white font-medium z-10">{children}</span>
      )}
    </motion.div>
  );
};