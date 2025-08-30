import React, { Suspense } from 'react';
import { StateContext } from '@/modules/builder/resume/StateContext';
import { useResumeStore } from '@/stores/useResumeStore';

interface TemplateLivePreviewProps {
  TemplateComponent: React.ComponentType;
  scale?: number;
}

export const TemplateLivePreview: React.FC<TemplateLivePreviewProps> = ({
  TemplateComponent,
  scale = 0.15,
}) => {
  const resumeData = useResumeStore();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="bg-gray-200 w-full h-full animate-pulse" />;
  }

  return (
    <div
      className="w-full h-full overflow-hidden bg-white flex items-start justify-center"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
        height: `${100 / scale}%`,
      }}
    >
      <Suspense fallback={<div className="bg-gray-200 w-full h-full animate-pulse" />}>
        <StateContext.Provider value={resumeData}>
          <div style={{ width: '210mm', height: '297mm', minHeight: '297mm' }}>
            <TemplateComponent />
          </div>
        </StateContext.Provider>
      </Suspense>
    </div>
  );
};
