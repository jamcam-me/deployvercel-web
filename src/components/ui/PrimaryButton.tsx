import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function PrimaryButton({ className='', children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      className={cn(
        'px-8 py-3 rounded-full bg-gradient-to-r from-green to-gold text-white font-medium shadow-lg focus-visible:outline-none focus-visible:ring-2 ring-green transition-transform',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
