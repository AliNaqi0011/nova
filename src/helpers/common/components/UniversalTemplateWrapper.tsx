import React, { cloneElement, ReactElement } from 'react';
import { SectionValidator } from './ValidSectionRenderer';
import { useContext } from 'react';
import { StateContext } from '@/modules/builder/resume/StateContext';

interface UniversalTemplateWrapperProps {
  children: ReactElement;
}

export const UniversalTemplateWrapper: React.FC<UniversalTemplateWrapperProps> = ({ children }) => {
  const resumeData = useContext(StateContext);

  if (!resumeData) return children;

  const { basics, work, education, skills, awards, volunteer } = resumeData;
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  return children;
};
