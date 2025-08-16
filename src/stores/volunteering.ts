import { create } from 'zustand';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IVolunteeringItem, IVolunteeringStore } from './volunteering.interface';
import dayjs from 'dayjs';

const volunteerWithDayjs = resumeData.volunteer.map((item) => ({
  ...item,
  startDate: item.startDate ? dayjs(item.startDate) : null,
  endDate: item.endDate ? dayjs(item.endDate) : null,
}));

export const useVoluteeringStore = create<IVolunteeringStore>()((set, get) => ({
  volunteeredExps: volunteerWithDayjs,

  add: (newVolunteering: IVolunteeringItem) => {
    set(
      produce((state: IVolunteeringStore) => {
        state.volunteeredExps.push(newVolunteering);
      })
    );
  },

  get: (index: number) => {
    return get().volunteeredExps[index];
  },

  remove: (index: number) => {
    set((state) => ({
      volunteeredExps: state.volunteeredExps.filter((_, i) => i !== index),
    }));
  },

  reset: (values: IVolunteeringItem[]) => {
    set({
      volunteeredExps: values,
    });
  },

  onmoveup: (index: number) => {
    set(
      produce((state: IVolunteeringStore) => {
        if (index > 0) {
          const currentExperience = state.volunteeredExps[index];
          state.volunteeredExps[index] = state.volunteeredExps[index - 1];
          state.volunteeredExps[index - 1] = currentExperience;
        }
      })
    );
  },

  onmovedown: (index: number) => {
    set(
      produce((state: IVolunteeringStore) => {
        const totalExps = state.volunteeredExps.length;
        if (index < totalExps - 1) {
          const currentExperience = state.volunteeredExps[index];
          state.volunteeredExps[index] = state.volunteeredExps[index + 1];
          state.volunteeredExps[index + 1] = currentExperience;
        }
      })
    );
  },

  updatedVolunteeringExp: (index: number, updatedInfo: IVolunteeringItem) => {
    set(
      produce((state: IVolunteeringStore) => {
        state.volunteeredExps[index] = updatedInfo;
      })
    );
  },
}));
