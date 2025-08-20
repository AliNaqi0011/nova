import { Suspense, useEffect, useState, useContext } from 'react';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { StateContext } from './StateContext';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';

const ResumeClient = () => {
  const resumeData = useContext(StateContext);
  const { activeTemplate } = useTemplates();
  const { zoom } = useZoom();

  const Template = AVAILABLE_TEMPLATES[activeTemplate.id]?.component;

  if (!Template) {
    return <div>Loading Template...</div>;
  }

  return (
    <StateContext.Provider value={resumeData}>
      <Suspense fallback={<div>Loading Template...</div>}>
        <div
          id="resume-page-view"
          className="bg-white shadow-2xl overflow-hidden"
          style={{
            width: '210mm',
            minHeight: '297mm',
            height: 'auto',
            transform: `scale(${zoom})`,
            transformOrigin: 'top',
          }}
        >
          <Template />
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
    <div id="resume-container" className="h-full w-full flex items-start justify-center p-8">
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
