import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Contact from './Contact';
import Skills from './Skills';
import Language from './Language';

interface SidebarProps {
  basics: IBasicDetailsItem;
  skills: ISkillItem[];
  languages: ISkillItem[];
}
export default function Sidebar({ basics, skills, languages }: SidebarProps) {
  return (
    <div className="space-y-6 mt-28">
      <Contact basics={basics} />

      <SectionValidator value={skills}>
        <Skills skills={skills} />
      </SectionValidator>

      <SectionValidator value={languages}>
        <Language languages={languages} />
      </SectionValidator>
    </div>
  );
}
