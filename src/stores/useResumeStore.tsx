import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '@/stores/skills';

import ResumeData from '@/helpers/constants/resume-data.json';
import { useActivity } from './activity';
import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useVoluteeringStore } from './volunteering';

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    volunteer: useVoluteeringStore((state) => state.volunteeredExps),
    skills: {
      languages: useLanguages((state) => state.values),
      frameworks: useFrameworks((state) => state.values),
      technologies: useTechnologies((state) => state.values),
      libraries: useLibraries((state) => state.values),
      databases: useDatabases((state) => state.values),
      practices: usePractices((state) => state.values),
      tools: useTools((state) => state.values),
    },
    activities: useActivity((state) => state.activities),
  };
};

/**
 * @description Reset all the stores
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useFrameworks.getState().reset(ResumeData.skills.frameworks);
  useLibraries.getState().reset(ResumeData.skills.libraries);
  useDatabases.getState().reset(ResumeData.skills.databases);
  useTechnologies.getState().reset(ResumeData.skills.technologies);
  usePractices.getState().reset(ResumeData.skills.practices);
  useTools.getState().reset(ResumeData.skills.tools);

  // Map work data to include website property
  const workWithWebsite = ResumeData.work.map((item) => ({ ...item, website: item.url || '' }));
  useExperiences.getState().reset(workWithWebsite as any);

  // Map education data to include website property
  const educationWithWebsite = ResumeData.education.map((item) => ({
    ...item,
    website: item.url || '',
  }));
  useEducations.getState().reset(educationWithWebsite as any);

  useVoluteeringStore.getState().reset(ResumeData.volunteer as any);
  useAwards.getState().reset(ResumeData.awards as any);
  useActivity.getState().reset(ResumeData.activities);
};
