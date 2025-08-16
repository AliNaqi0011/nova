import { Suspense, useEffect, useState, useRef, useContext } from 'react';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { StateContext } from './StateContext';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';

const A4_HEIGHT_PX = 1123; // Approximate height of an A4 page in pixels at 96 DPI

const ResumeClient = () => {
  const resumeData = useContext(StateContext);
  const { activeTemplate } = useTemplates();
  const { zoom } = useZoom();
  const [totalPages, setTotalPages] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  const Template = AVAILABLE_TEMPLATES[activeTemplate.id]?.component;

  useEffect(() => {
    const calculatePages = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        const pages = Math.ceil(contentHeight / A4_HEIGHT_PX);
        setTotalPages(pages > 0 ? pages : 1);
      }
    };

    if (Template) {
      // A small timeout allows the template to render fully before we measure it.
      const timer = setTimeout(calculatePages, 50);

      // Also recalculate when images inside load, as they affect height
      const images = contentRef.current?.getElementsByTagName('img');
      if (images) {
        Array.from(images).forEach((img) => {
          img.addEventListener('load', calculatePages);
          // Clean up event listeners
          return () => img.removeEventListener('load', calculatePages);
        });
      }

      return () => clearTimeout(timer);
    }
  }, [resumeData, activeTemplate, Template]);

  if (!Template) {
    return <div>Loading Template...</div>;
  }

  // This container is used for measurement only. It's rendered off-screen.
  const measurementContainer = (
    <div
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '210mm',
        height: 'auto',
      }}
    >
      <div ref={contentRef}>
        <Template />
      </div>
    </div>
  );

  return (
    <StateContext.Provider value={resumeData}>
      <Suspense fallback={<div>Loading Template...</div>}>
        {measurementContainer}
        <div
          id="resume-pages-container"
          className="origin-top print:!scale-100 flex flex-col gap-5"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top' }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="resume-page-view bg-white shadow-2xl overflow-hidden"
              style={{ width: '210mm', height: '297mm' }}
            >
              {/* Render the full template, but use a transform to show the correct "page" */}
              <div
                className="resume-content-container"
                style={{
                  transform: `translateY(-${pageIndex * A4_HEIGHT_PX}px)`,
                }}
              >
                <Template />
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </StateContext.Provider>
  );
};

export const ResumeLayout = () => {
  const [isClient, setIsClient] = useState(false);
  const resumeData = useResumeStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      id="resume-container"
      className="h-full w-full flex items-start justify-center p-8 print:p-0 print:h-auto print:w-auto overflow-y-auto"
    >
      {isClient ? (
        <StateContext.Provider value={resumeData}>
          <ResumeClient />
        </StateContext.Provider>
      ) : (
        <div
          className="bg-white shadow-2xl flex items-center justify-center"
          style={{ width: `210mm`, height: `297mm` }}
        >
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};
