import React from 'react';

interface LiquidGlassPopupProps {
  children: React.ReactNode;
  className?: string;
}

export default function LiquidGlassPopup({ children, className = '' }: LiquidGlassPopupProps) {
  return (
    <div className={`liquid-glass-popup ${className}`}>
      {children}
    </div>
  );
}

