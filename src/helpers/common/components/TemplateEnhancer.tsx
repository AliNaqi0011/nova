import { useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useSectionOrder, SectionConfig } from '@/stores/sectionOrder';

export const useTemplateEnhancer = () => {
  const { sections, updateSectionOrder } = useSectionOrder();
  const { draggedItem, handleDragStart, handleDragOver, handleDrop, handleDragEnd } =
    useDragAndDrop<SectionConfig>(sections, updateSectionOrder);

  useEffect(() => {
    const enhanceSections = () => {
      const templateContainer = document.querySelector('#resume-page-view');
      if (!templateContainer) return;

      const sectionElements = templateContainer.querySelectorAll(
        'div[class*="section"], section, .education, .work, .skills, .summary, .awards, .volunteer'
      );

      sectionElements.forEach((element, index) => {
        if (element.hasAttribute('data-enhanced')) return;

        element.setAttribute('data-enhanced', 'true');
        element.setAttribute('draggable', 'true');
        element.classList.add('transition-all', 'duration-200', 'hover:shadow-sm');

        const handleDragStartLocal = (e: DragEvent) => {
          const dragData = { id: `section-${index}`, index };
          e.dataTransfer?.setData('text/plain', JSON.stringify(dragData));
          element.classList.add('opacity-50');
        };

        const handleDragEndLocal = () => {
          element.classList.remove('opacity-50');
        };

        const handleDragOverLocal = (e: DragEvent) => {
          e.preventDefault();
          e.dataTransfer!.dropEffect = 'move';
        };

        const handleDropLocal = (e: DragEvent) => {
          e.preventDefault();
          const data = JSON.parse(e.dataTransfer?.getData('text/plain') || '{}');
          if (data.index !== undefined && data.index !== index) {
            const parent = element.parentElement;
            const draggedElement = parent?.children[data.index];
            if (draggedElement && parent) {
              if (data.index < index) {
                parent.insertBefore(draggedElement, element.nextSibling);
              } else {
                parent.insertBefore(draggedElement, element);
              }
            }
          }
        };

        element.addEventListener('dragstart', handleDragStartLocal);
        element.addEventListener('dragend', handleDragEndLocal);
        element.addEventListener('dragover', handleDragOverLocal);
        element.addEventListener('drop', handleDropLocal);
      });
    };

    const timer = setTimeout(enhanceSections, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
};
