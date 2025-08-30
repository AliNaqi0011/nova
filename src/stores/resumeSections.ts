import { create } from 'zustand';

export interface ResumeSection {
  id: string;
  name: string;
  order: number;
  visible: boolean;
}

interface ResumeSectionsState {
  sections: ResumeSection[];
  updateOrder: (newSections: ResumeSection[]) => void;
  toggleVisibility: (id: string) => void;
}

export const useResumeSections = create<ResumeSectionsState>((set) => ({
  sections: [
    { id: 'summary', name: 'Summary', order: 0, visible: true },
    { id: 'work', name: 'Work Experience', order: 1, visible: true },
    { id: 'education', name: 'Education', order: 2, visible: true },
    { id: 'skills', name: 'Skills', order: 3, visible: true },
    { id: 'awards', name: 'Awards', order: 4, visible: true },
    { id: 'volunteer', name: 'Volunteer', order: 5, visible: true },
  ],

  updateOrder: (newSections) => set({ sections: newSections }),
  toggleVisibility: (id) =>
    set((state) => ({
      sections: state.sections.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)),
    })),
}));
