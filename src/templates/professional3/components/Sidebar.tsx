import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Contact from './Contact';
import Skills from './Skills';
import Languages from './Languages';

interface SidebarProps {
  basics: IBasicDetailsItem;
  skills: ISkillItem[];
  languages: ISkillItem[];
}

export default function Sidebar({ basics, skills, languages }: SidebarProps) {
  return (
    <div className="space-y-6">
      <Contact basics={basics} />

      <SectionValidator value={skills}>
        <Skills skills={skills} title="Skills" />
      </SectionValidator>

      <SectionValidator value={languages}>
        <Languages languages={languages} />
      </SectionValidator>
    </div>
  );
}
