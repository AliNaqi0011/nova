import { create } from 'zustand';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IExperienceItem, IExperienceStore } from './experience.interface';
import dayjs from 'dayjs';

const workWithDayjs = resumeData.work.map((item) => ({
  ...item,
  startDate: item.startDate ? dayjs(item.startDate) : null,
  endDate: item.endDate ? dayjs(item.endDate) : null,
}));

export const useExperiences = create<IExperienceStore>()((set, get) => ({
  experiences: workWithDayjs,

  add: (newExperience: IExperienceItem) => {
    set(
      produce((state: IExperienceStore) => {
        state.experiences.push(newExperience);
      })
    );
  },

  get: (index: number) => {
    return get().experiences[index];
  },

  remove: (index: number) => {
    set((state) => ({
      experiences: state.experiences.filter((_, i) => i !== index),
    }));
  },

  reset: (values: IExperienceItem[]) => {
    set({
      experiences: values,
    });
  },

  onmoveup: (index: number) => {
    set(
      produce((state: IExperienceStore) => {
        if (index > 0) {
          const currentExperience = state.experiences[index];
          state.experiences[index] = state.experiences[index - 1];
          state.experiences[index - 1] = currentExperience;
        }
      })
    );
  },

  onmovedown: (index: number) => {
    set(
      produce((state: IExperienceStore) => {
        const totalExperiences = state.experiences.length;
        if (index < totalExperiences - 1) {
          const currentExperience = state.experiences[index];
          state.experiences[index] = state.experiences[index + 1];
          state.experiences[index + 1] = currentExperience;
        }
      })
    );
  },

  updateExperience: (index: number, updatedInfo: IExperienceItem) => {
    set(
      produce((state: IExperienceStore) => {
        state.experiences[index] = updatedInfo;
      })
    );
  },
}));
