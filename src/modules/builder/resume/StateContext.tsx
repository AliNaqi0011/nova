import { createContext } from 'react';
import { IResume } from '@/stores/index.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext = createContext<IResume | null>(null);
