import { create } from 'zustand';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IAwardItem, IAwardsStore } from './awards.interface';
import dayjs from 'dayjs';

const awardsWithDayjs = resumeData.awards.map((item) => ({
  ...item,
  date: item.date ? dayjs(item.date) : null,
}));

export const useAwards = create<IAwardsStore>()((set, get) => ({
  awards: awardsWithDayjs,

  add: (newAward: IAwardItem) => {
    set(
      produce((state: IAwardsStore) => {
        state.awards.push(newAward);
      })
    );
  },

  get: (index: number) => {
    return get().awards[index];
  },

  remove: (index: number) => {
    set((state) => ({
      awards: state.awards.filter((_, i) => i !== index),
    }));
  },

  reset: (values: IAwardItem[]) => {
    set({
      awards: values,
    });
  },

  onmoveup: (index: number) => {
    set(
      produce((state: IAwardsStore) => {
        if (index > 0) {
          const currentAward = state.awards[index];
          state.awards[index] = state.awards[index - 1];
          state.awards[index - 1] = currentAward;
        }
      })
    );
  },

  onmovedown: (index: number) => {
    set(
      produce((state: IAwardsStore) => {
        const totalAwards = state.awards.length;
        if (index < totalAwards - 1) {
          const currentAward = state.awards[index];
          state.awards[index] = state.awards[index + 1];
          state.awards[index + 1] = currentAward;
        }
      })
    );
  },

  updateAward: (index: number, updatedInfo: IAwardItem) => {
    set(
      produce((state: IAwardsStore) => {
        state.awards[index] = updatedInfo;
      })
    );
  },
}));
