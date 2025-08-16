import { create } from 'zustand';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IActivityStore, IActivity } from './activity.interface';

export const useActivity = create<IActivityStore>()((set, get) => ({
  activities: resumeData.activities,

  get: () => get().activities,

  reset: (activityItem: IActivity) => {
    set({
      activities: activityItem,
    });
  },

  updateAchievements: (achievements: string) => {
    set(
      produce((state: IActivityStore) => {
        state.activities.achievements = achievements;
      })
    );
  },

  updateInvolvements: (involvements: string) => {
    set(
      produce((state: IActivityStore) => {
        state.activities.involvements = involvements;
      })
    );
  },
}));
