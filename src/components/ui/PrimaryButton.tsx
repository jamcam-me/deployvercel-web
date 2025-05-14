'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export function PrimaryButton({ 
  className = '', 
  children, 
  ...props 
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-6 py-3 bg-[#dab86e] text-[#0a1f44] font-medium rounded-lg shadow-md hover:bg-[#caa950] transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default PrimaryButton;
