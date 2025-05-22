'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  
  const variantClasses = {
    primary: 'bg-[#dab86e] text-[#0a1f44] hover:bg-[#caa950]',
    secondary: 'bg-[#1f302d] text-white hover:bg-[#2a423d]',
    outline: 'bg-transparent border border-[#dab86e] text-[#dab86e] hover:bg-[#dab86e] hover:bg-opacity-10'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-7 py-3 text-lg'
  };
  
  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
