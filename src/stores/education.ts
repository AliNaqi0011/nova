import { create } from 'zustand';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IEducationItem, IEducationStore } from './education.interface';
import dayjs from 'dayjs';

const educationWithDayjs = resumeData.education.map((item) => ({
  ...item,
  startDate: item.startDate ? dayjs(item.startDate) : null,
  endDate: item.endDate ? dayjs(item.endDate) : null,
  website: item.url || '',
}));

export const useEducations = create<IEducationStore>()((set, get) => ({
  academics: educationWithDayjs,

  add: (newEducation: IEducationItem) => {
    set(
      produce((state: IEducationStore) => {
        state.academics.push(newEducation);
      })
    );
  },

  get: (index: number) => {
    return get().academics[index];
  },

  remove: (index: number) => {
    set((state) => ({
      academics: state.academics.filter((_, i) => i !== index),
    }));
  },

  reset: (values: IEducationItem[]) => {
    set({
      academics: values,
    });
  },

  onmoveup: (index: number) => {
    set(
      produce((state: IEducationStore) => {
        if (index > 0) {
          const currentEducation = state.academics[index];
          state.academics[index] = state.academics[index - 1];
          state.academics[index - 1] = currentEducation;
        }
      })
    );
  },

  onmovedown: (index: number) => {
    set(
      produce((state: IEducationStore) => {
        const totalEducation = state.academics.length;
        if (index < totalEducation - 1) {
          const currentEducation = state.academics[index];
          state.academics[index] = state.academics[index + 1];
          state.academics[index + 1] = currentEducation;
        }
      })
    );
  },

  updateEducation: (index: number, updatedInfo: IEducationItem) => {
    set(
      produce((state: IEducationStore) => {
        state.academics[index] = updatedInfo;
      })
    );
  },
}));
