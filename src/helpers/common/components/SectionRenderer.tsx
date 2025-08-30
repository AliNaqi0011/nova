import React, { useEffect, useRef } from 'react';
import { useResumeSections } from '@/stores/resumeSections';

interface SectionRendererProps {
  children: React.ReactNode;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ children }) => {
  const { sections } = useResumeSections();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const sectionMap = new Map<string, HTMLElement[]>();

      // Find section validators
      const sectionValidators = container.querySelectorAll('[data-section-validator="true"]');

      sectionValidators.forEach((validator, index) => {
        const element = validator as HTMLElement;
        const text = element.textContent?.toLowerCase() || '';

        // Make containers flexible for reordering
        element.style.order = '0';

        if (element.parentElement && element.parentElement.children.length > 1) {
          element.parentElement.style.display = 'flex';
          element.parentElement.style.flexDirection = 'column';
        }

        // Categorize sections
        let sectionType = '';
        if (text.includes('summary') || text.includes('objective') || text.includes('about')) {
          sectionType = 'summary';
        } else if (
          text.includes('experience') ||
          text.includes('work') ||
          text.includes('employment')
        ) {
          sectionType = 'work';
        } else if (text.includes('education') || text.includes('academic')) {
          sectionType = 'education';
        } else if (
          text.includes('skill') ||
          text.includes('technical') ||
          text.includes('technologies') ||
          text.includes('languages')
        ) {
          sectionType = 'skills';
        } else if (
          text.includes('award') ||
          text.includes('achievement') ||
          text.includes('certificate')
        ) {
          sectionType = 'awards';
        } else if (
          text.includes('volunteer') ||
          text.includes('community') ||
          text.includes('involvement')
        ) {
          sectionType = 'volunteer';
        }

        if (sectionType) {
          if (!sectionMap.has(sectionType)) sectionMap.set(sectionType, []);
          sectionMap.get(sectionType)?.push(element);
        }
      });

      // Apply ordering and visibility
      sections.forEach((section) => {
        const elements = sectionMap.get(section.id) || [];
        elements.forEach((element) => {
          if (section.visible) {
            element.style.order = section.order.toString();
            element.style.display = 'block';
          } else {
            element.style.display = 'none';
          }
          element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
      });

      // Intersection observer for fade effects
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            } else {
              el.style.opacity = '0.6';
              el.style.transform = 'translateY(5px)';
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -30px 0px' }
      );

      sectionMap.forEach((elements) => {
        elements.forEach((element) => {
          observer.observe(element);
        });
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [sections]);

  return <div ref={containerRef}>{children}</div>;
};
