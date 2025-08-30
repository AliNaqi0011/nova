import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SectionWrapperProps {
  children: React.ReactNode;
  sectionId?: string;
  index?: number;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  sectionId,
  index = 0,
  draggable = true,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging = false,
}) => {
  return (
    <AnimatedSection
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      isDragging={isDragging}
      className="transition-all duration-200"
    >
      {children}
    </AnimatedSection>
  );
};
