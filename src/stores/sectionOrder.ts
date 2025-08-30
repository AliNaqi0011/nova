import { create } from 'zustand';

export interface SectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
}

interface SectionOrderState {
  sections: SectionConfig[];
  updateSectionOrder: (newSections: SectionConfig[]) => void;
  toggleSection: (sectionId: string) => void;
}

const defaultSections: SectionConfig[] = [
  { id: 'summary', name: 'Summary', enabled: true, order: 0 },
  { id: 'work', name: 'Work Experience', enabled: true, order: 1 },
  { id: 'education', name: 'Education', enabled: true, order: 2 },
  { id: 'skills', name: 'Skills', enabled: true, order: 3 },
  { id: 'awards', name: 'Awards', enabled: true, order: 4 },
  { id: 'volunteer', name: 'Volunteer', enabled: true, order: 5 },
];

export const useSectionOrder = create<SectionOrderState>((set) => ({
  sections: defaultSections,

  updateSectionOrder: (newSections) => {
    const updatedSections = newSections.map((section, index) => ({
      ...section,
      order: index,
    }));
    set({ sections: updatedSections });
  },

  toggleSection: (sectionId) => {
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id === sectionId ? { ...section, enabled: !section.enabled } : section
      ),
    }));
  },
}));
