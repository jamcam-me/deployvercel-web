import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function Container({ 
  className = '', 
  maxWidth = 'xl', 
  children 
}: ContainerProps) {
  
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full'
  };
  
  return (
    <div className={cn(
      'w-full mx-auto px-4 sm:px-6 lg:px-8',
      maxWidthClasses[maxWidth],
      className
    )}>
      {children}
    </div>
  );
}

export default Container;
