import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  addSection: (section: ResumeSection) => void;
  removeSection: (id: string) => void;
  resetSections: () => void;
  updateSectionName: (id: string, name: string) => void;
  restoreSection: (id: string) => void;
}

const defaultSections: ResumeSection[] = [
  { id: 'summary', name: 'Summary', order: 0, visible: true },
  { id: 'work', name: 'Work Experience', order: 1, visible: true },
  { id: 'education', name: 'Education', order: 2, visible: true },
  { id: 'skills', name: 'Skills', order: 3, visible: true },
  { id: 'awards', name: 'Awards', order: 4, visible: true },
  { id: 'volunteer', name: 'Volunteer', order: 5, visible: true },
];

export const useResumeSections = create<ResumeSectionsState>()(persist(
  (set, get) => ({
    sections: defaultSections,

    updateOrder: (newSections) => set({ sections: newSections }),
    
    toggleVisibility: (id) =>
      set((state) => ({
        sections: state.sections.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)),
      })),
    
    addSection: (section) =>
      set((state) => {
        const exists = state.sections.find(s => s.id === section.id);
        if (!exists) {
          return {
            sections: [...state.sections, section].sort((a, b) => a.order - b.order)
          };
        }
        return state;
      }),
    
    removeSection: (id) =>
      set((state) => ({
        sections: state.sections.map(s => s.id === id ? { ...s, visible: false } : s)
      })),
    
    restoreSection: (id) => {
      set((state) => {
        const existingSection = state.sections.find(s => s.id === id);
        if (existingSection) {
          return {
            sections: state.sections.map(s => s.id === id ? { ...s, visible: true } : s)
          };
        }
        const defaultSection = defaultSections.find(s => s.id === id);
        if (defaultSection) {
          return {
            sections: [...state.sections, defaultSection].sort((a, b) => a.order - b.order)
          };
        }
        return state;
      });
    },
    
    updateSectionName: (id, name) =>
      set((state) => ({
        sections: state.sections.map(s => s.id === id ? { ...s, name } : s)
      })),
    
    resetSections: () => set({ sections: defaultSections }),
  }),
  {
    name: 'resume-sections-storage',
    partialize: (state) => ({ sections: state.sections }),
  }
));
