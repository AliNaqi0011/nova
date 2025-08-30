import { useEffect } from 'react';
import { useSectionOrder } from '@/stores/sectionOrder';

export const useResumeEnhancer = () => {
  const { sections } = useSectionOrder();

  useEffect(() => {
    const timer = setTimeout(() => {
      const resumeElement = document.getElementById('resume-page-view');
      if (!resumeElement) return;

      // Find all sections in the template
      const allElements = resumeElement.querySelectorAll('*');
      const sectionMap = new Map<string, HTMLElement>();

      allElements.forEach((el) => {
        const element = el as HTMLElement;
        const text = element.textContent?.toLowerCase() || '';
        const hasContent = text.length > 10;

        if (hasContent) {
          if (text.includes('summary') || text.includes('objective') || text.includes('about')) {
            sectionMap.set('summary', element);
          } else if (
            text.includes('experience') ||
            text.includes('work') ||
            text.includes('employment')
          ) {
            sectionMap.set('work', element);
          } else if (text.includes('education') || text.includes('academic')) {
            sectionMap.set('education', element);
          } else if (
            text.includes('skill') ||
            text.includes('technologies') ||
            text.includes('languages')
          ) {
            sectionMap.set('skills', element);
          } else if (
            text.includes('award') ||
            text.includes('achievement') ||
            text.includes('honor')
          ) {
            sectionMap.set('awards', element);
          } else if (text.includes('volunteer') || text.includes('community')) {
            sectionMap.set('volunteer', element);
          }
        }
      });

      // Reorder sections
      const enabledSections = sections.filter((s) => s.enabled).sort((a, b) => a.order - b.order);
      const container = resumeElement.querySelector('div') || resumeElement;

      enabledSections.forEach((section, index) => {
        const element = sectionMap.get(section.id);
        if (element) {
          element.style.order = index.toString();
          element.style.display = section.enabled ? 'block' : 'none';
        }
      });

      // Add intersection observer for visibility
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            if (entry.isIntersecting) {
              el.style.opacity = '1';
              el.style.transform = 'scale(1)';
            } else {
              el.style.opacity = '0.4';
              el.style.transform = 'scale(0.98)';
            }
          });
        },
        { threshold: 0.2 }
      );

      sectionMap.forEach((element) => {
        observer.observe(element);
      });

      return () => observer.disconnect();
    }, 300);

    return () => clearTimeout(timer);
  }, [sections]);
};
