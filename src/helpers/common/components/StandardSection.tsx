import React from 'react';
import { SectionValidator } from './ValidSectionRenderer';

interface StandardSectionProps {
  title?: string;
  children: React.ReactNode;
  value: any;
  className?: string;
}

export const StandardSection: React.FC<StandardSectionProps> = ({
  title,
  children,
  value,
  className = '',
}) => {
  return (
    <SectionValidator value={value}>
      <div className={className}>{children}</div>
    </SectionValidator>
  );
};
