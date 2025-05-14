// Fix for src/components/ui/PrimaryButton.tsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  className?: string;
}

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
        'px-6 py-3 bg-executive-gold text-cyber-navy font-medium rounded-md transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
