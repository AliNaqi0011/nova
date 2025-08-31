import React, { ReactElement } from 'react';

interface DraggableTemplateWrapperProps {
  children: ReactElement;
}

export const DraggableTemplateWrapper: React.FC<DraggableTemplateWrapperProps> = ({ children }) => {
  return children;
};
