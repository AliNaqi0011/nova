
import { Suspense, useEffect, useState } from 'react';

import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { StateContext } from './StateContext';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useThemes } from '@/stores/themes';
import { useZoom } from '@/stores/useZoom';

const ResumeClient = () => {
  const resumeData = useResumeStore();
  const { activeTemplate, setTemplate } = useTemplates();
  const { selectedTheme } = useThemes();
  const { zoom } = useZoom();

  useEffect(() => {
    const selectedTemplateId = localStorage.getItem('selectedTemplateId');
    if (selectedTemplateId && AVAILABLE_TEMPLATES[selectedTemplateId]) {
      setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
    }
  }, [setTemplate]);

  const Template = AVAILABLE_TEMPLATES[activeTemplate.id]?.component;

  if (!Template) {
    return null; // Render nothing if template is not found
  }

  return (
    <div
      className="flex-shrink-0 origin-top print:scale-100"
      style={{ transform: `scale(${zoom})` }}
    >
      <div className="w-[210mm] h-[297mm] bg-white my-0 mx-auto shadow-2xl">
        <StateContext.Provider value={resumeData}>
          <ThemeProvider theme={selectedTheme}>
            <Suspense fallback={<div>Loading Template...</div>}>
              <Template />
            </Suspense>
          </ThemeProvider>
        </StateContext.Provider>
      </div>
    </div>
  );
};

export const ResumeLayout = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full w-full flex items-start justify-center p-8 print:p-0 print:h-auto print:w-auto">
      {isClient ? (
        <ResumeClient />
      ) : (
        <div className="w-[210mm] h-[297mm] bg-white my-0 mx-auto shadow-2xl flex items-center justify-center">
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};
