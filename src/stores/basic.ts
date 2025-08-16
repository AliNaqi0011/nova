import { create } from 'zustand';
import { IBasicDetailsItem, IBasicDetailsStore } from './basic.interface';
import resumeData from '@/helpers/constants/resume-data.json';

export const useBasicDetails = create<IBasicDetailsStore>()((set, get) => ({
  values: resumeData.basics,
  reset: (values: IBasicDetailsItem) => set({ values }),
  get: () => get().values,
}));
