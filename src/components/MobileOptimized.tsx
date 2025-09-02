import { useIsMobile } from '@/hooks/useMediaQuery';
import { ReactNode } from 'react';

interface MobileOptimizedProps {
  children: ReactNode;
  mobileComponent?: ReactNode;
  className?: string;
}

export const MobileOptimized = ({ 
  children, 
  mobileComponent, 
  className = '' 
}: MobileOptimizedProps) => {
  const isMobile = useIsMobile();
  
  if (isMobile && mobileComponent) {
    return <div className={className}>{mobileComponent}</div>;
  }
  
  return <div className={className}>{children}</div>;
};

export const TouchOptimized = ({ 
  children, 
  className = '',
  onTouchStart,
  onTouchEnd 
}: {
  children: ReactNode;
  className?: string;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
}) => {
  return (
    <div 
      className={`touch-manipulation ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'manipulation' }}
    >
      {children}
    </div>
  );
};