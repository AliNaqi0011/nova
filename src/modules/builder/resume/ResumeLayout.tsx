import { Suspense, useEffect, useState, useContext } from 'react';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { StateContext } from './StateContext';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';
import { SectionRenderer } from '@/helpers/common/components/SectionRenderer';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const ResumeClient = () => {
  const resumeData = useContext(StateContext);
  const { activeTemplate } = useTemplates();
  const { zoom } = useZoom();
  const [isOverflowing, setIsOverflowing] = useState(false);

  const Template = AVAILABLE_TEMPLATES[activeTemplate.id]?.component;

  if (!Template) {
    return <div className="text-gray-500 text-center py-8">Loading Template...</div>;
  }

  // Check if content overflows A4 page
  useEffect(() => {
    const checkOverflow = () => {
      const resumeElement = document.getElementById('resume-page-view');
      if (resumeElement) {
        const contentHeight = resumeElement.scrollHeight;
        const pageHeight = 297 * 3.779527559; // A4 height in pixels
        setIsOverflowing(contentHeight > pageHeight);
      }
    };

    const timer = setTimeout(checkOverflow, 100);
    return () => clearTimeout(timer);
  }, [resumeData]);

  return (
    <StateContext.Provider value={resumeData}>
      <Suspense
        fallback={<div className="text-gray-500 text-center py-8"><LoadingSpinner /> Loading Template...</div>}
      >
        <div className="space-y-4">
          {isOverflowing && (
            <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded mx-4">
              <strong>Multi-page support coming soon!</strong> Please reduce content to fit single
              A4 page.
            </div>
          )}
          <div
            id="resume-page-view"
            className="bg-white shadow-2xl overflow-hidden print:shadow-none mx-auto resume-content"
            style={{
              width: '210mm',
              height: '297mm',
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
            }}
          >
            <SectionRenderer>
              <Template />
            </SectionRenderer>
          </div>
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
    <div id="resume-container" className="h-full w-full flex items-start justify-center p-2 sm:p-4 md:p-8 lg:pr-16 overflow-hidden">
      {isClient ? (
        <StateContext.Provider value={resumeData}>
          <ResumeClient />
        </StateContext.Provider>
      ) : (
        <div
          className="bg-white shadow-2xl flex items-center justify-center animate-pulse"
          style={{ width: `210mm`, height: `297mm` }}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};
