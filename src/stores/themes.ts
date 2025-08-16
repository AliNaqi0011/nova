import { create } from 'zustand';

import { SYSTEM_COLORS } from '@/helpers/constants/index';
import { IThemeColor } from '@/helpers/constants/index.interface';

interface IThemeStore {
  selectedTheme: IThemeColor;
  chooseTheme: (theme: IThemeColor) => void;
}

export const useThemes = create<IThemeStore>()((set) => ({
  selectedTheme: SYSTEM_COLORS[0],
  chooseTheme: (theme: IThemeColor) => {
    set({ selectedTheme: theme });
  },
}));
