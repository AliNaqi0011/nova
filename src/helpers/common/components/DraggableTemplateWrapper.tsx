import React, { ReactElement, cloneElement } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useSectionOrder, SectionConfig } from '@/stores/sectionOrder';

interface DraggableTemplateWrapperProps {
  children: ReactElement;
}

export const DraggableTemplateWrapper: React.FC<DraggableTemplateWrapperProps> = ({ children }) => {
  const { sections, updateSectionOrder } = useSectionOrder();
  const { draggedItem, handleDragStart, handleDragOver, handleDrop, handleDragEnd } =
    useDragAndDrop<SectionConfig>(sections, updateSectionOrder);

  const wrapSections = (element: ReactElement): ReactElement => {
    if (!element || !element.props) return element;

    const { children: elementChildren } = element.props;

    if (!elementChildren) return element;

    const processChildren = (children: any): any => {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        // Check if this is a section that should be draggable
        const isDraggableSection =
          child.props?.className?.includes('section') ||
          child.type?.name?.toLowerCase().includes('section') ||
          ['div', 'section'].includes(child.type as string);

        if (isDraggableSection && child.props?.children) {
          const sectionProps = {
            draggable: true,
            onDragStart: (e: React.DragEvent) =>
              handleDragStart(e, { id: `section-${index}`, order: index } as SectionConfig, index),
            onDragOver: handleDragOver,
            onDrop: (e: React.DragEvent) => handleDrop(e, index),
            onDragEnd: handleDragEnd,
            isDragging: draggedItem?.index === index,
          };

          return (
            <AnimatedSection key={`section-${index}`} {...sectionProps}>
              {cloneElement(child, {
                ...child.props,
                children: processChildren(child.props.children),
              })}
            </AnimatedSection>
          );
        }

        // Recursively process nested children
        if (child.props?.children) {
          return cloneElement(child, {
            ...child.props,
            children: processChildren(child.props.children),
          });
        }

        return child;
      });
    };

    return cloneElement(element, {
      ...element.props,
      children: processChildren(elementChildren),
    });
  };

  return wrapSections(children);
};
