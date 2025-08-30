import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import { PersonalDataProps } from './PersonalData';
import { ReferenceProps } from './Reference';
import Contact from './Contact';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Reference from './Reference';

interface SidebarProps {
  basics: IBasicDetailsItem | null;
  personalData: PersonalDataProps | null;
  skills: ISkillItem[];
  reference: ReferenceProps | null;
}

export default function Sidebar({ basics, personalData, skills, reference }: SidebarProps) {
  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        {basics.name.toUpperCase()}
      </h1>
      <p className="text-sm font-light text-gray-500 tracking-widest -mt-2">
        {basics.label.toUpperCase()}
      </p>
      <Contact basics={basics} />
      <PersonalData data={personalData} />
      <SectionValidator value={skills}>
        <Skills skills={skills} />
      </SectionValidator>

      <Reference data={reference} />
    </div>
  );
}
