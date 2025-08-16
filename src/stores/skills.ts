import { create } from 'zustand';
import { produce } from 'immer';
import { ISkillItem, ISkillState } from './skill.interface';
import resumeData from '@/helpers/constants/resume-data.json';

const createSkillStore = (title: string, hasLevel: boolean, initialValues: ISkillItem[]) => {
  return create<ISkillState>((set, get) => ({
    title,
    hasLevel,
    values: initialValues,
    isEnabled: true,

    add: (newSkill: ISkillItem) =>
      set(
        produce((state: ISkillState) => {
          state.values.push(newSkill);
        })
      ),

    edit: (updatedSkill: { name: string; level: number; index: number }) =>
      set(
        produce((state: ISkillState) => {
          state.values[updatedSkill.index] = {
            name: updatedSkill.name,
            level: updatedSkill.level,
          };
        })
      ),

    remove: (index: number) =>
      set(
        produce((state: ISkillState) => {
          state.values.splice(index, 1);
        })
      ),

    get: () => (get().isEnabled ? get().values : []),

    reset: (values: ISkillItem[]) => set({ values }),

    setIsEnabled: (enabled: boolean) => set({ isEnabled: enabled }),
  }));
};

export const useLanguages = createSkillStore('Languages', true, resumeData.skills.languages);
export const useFrameworks = createSkillStore('Frameworks', true, resumeData.skills.frameworks);
export const useTechnologies = createSkillStore(
  'Technologies',
  false,
  resumeData.skills.technologies
);
export const useLibraries = createSkillStore('Libraries', false, resumeData.skills.libraries);
export const useDatabases = createSkillStore('Databases', false, resumeData.skills.databases);
export const usePractices = createSkillStore('Practices', false, resumeData.skills.practices);
export const useTools = createSkillStore('Tools', false, resumeData.skills.tools);
