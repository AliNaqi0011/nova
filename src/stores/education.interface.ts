import { Dayjs } from 'dayjs';

export interface IEducationItem {
  institution: string;
  url: string;
  studyType: string;
  area: string;
  startDate: Dayjs | null;
  isStudyingHere: boolean;
  endDate: Dayjs | null;
  score: string;
  courses: string[];
  id: string;
  website: string;
}

export interface IEducationStore {
  academics: IEducationItem[];
  add: (newEducation: IEducationItem) => void;
  addEmpty: () => void;
  get: (index: number) => void;
  remove: (index: number) => void;
  reset: (values: IEducationItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateEducation: (index: number, updatedInfo: IEducationItem) => void;
  hasEducation: () => boolean;
}
