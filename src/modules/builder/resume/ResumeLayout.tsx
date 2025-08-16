import { Context, createContext, useEffect, Suspense, useState } from 'react';

import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { useThemes } from '@/stores/themes';
import { useZoom } from '@/stores/useZoom';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext = createContext<Context<any> | null>(null);

export const ResumeLayout = () => {
  const [isClient, setIsClient] = useState(false);
  const resumeData = useResumeStore();

  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId]?.component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
  const zoom = useZoom((state) => state.zoom);

  useEffect(() => {
    setIsClient(true);
    const selectedTemplateId = localStorage.getItem('selectedTemplateId');
    const template = AVAILABLE_TEMPLATES[selectedTemplateId || 'modern'];
    if (template) {
      useTemplates.getState().setTemplate(template);
    } else {
      useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES['modern']);
    }
  }, []);

  if (!isClient || !Template) {
    return (
      <div className="w-[210mm] h-[297mm] bg-white my-0 mx-auto shadow-2xl flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-start justify-center p-8 print:p-0 print:h-auto print:w-auto">
      <div
        className="flex-shrink-0 origin-top print:scale-100"
        style={{ transform: `scale(${zoom})` }}
      >
        <div className="w-[210mm] h-[297mm] bg-white my-0 mx-auto shadow-2xl">
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>
              <Suspense fallback={<div>Loading...</div>}>
                <Template />
              </Suspense>
            </ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
