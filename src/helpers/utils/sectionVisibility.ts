export const initializeSectionVisibility = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'scale(1) translateY(0)';
        } else {
          element.style.opacity = '0.3';
          element.style.transform = 'scale(0.98) translateY(10px)';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const observeSections = () => {
    const sections = document.querySelectorAll(
      '#resume-page-view > div, #resume-page-view section, .section'
    );
    sections.forEach((section) => {
      const element = section as HTMLElement;
      element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
      observer.observe(element);
    });
  };

  const timer = setTimeout(observeSections, 200);
  return () => {
    clearTimeout(timer);
    observer.disconnect();
  };
};
