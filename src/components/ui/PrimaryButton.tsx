import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// Create a specific type that properly merges the motion props with our custom props
type PrimaryButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({
  children,
  className = '',
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-6 py-3 bg-green-600 text-white font-medium font-cinzel rounded-md transition-colors hover:bg-green-700',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
