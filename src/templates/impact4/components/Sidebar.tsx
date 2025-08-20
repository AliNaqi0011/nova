import { IBasics } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Contact from './Contact';
import GeneralSkills from './GeneralSkills';
import Conferences from './Conferences';
import Memberships from './Memberships';
import Interests from './Interests';

interface SidebarProps {
  basics: IBasics;
  skills: ISkillItem[];
  conferences: { name: string; details: string }[];
  memberships: string[];
  interests: string[];
}

export default function Sidebar({
  basics,
  skills,
  conferences,
  memberships,
  interests,
}: SidebarProps) {
  return (
    <div className="space-y-6">
      <Contact basics={basics} />
      <SectionValidator value={skills}>
        <GeneralSkills skills={skills} />
      </SectionValidator>
      <SectionValidator value={conferences}>
        <Conferences conferences={conferences} />
      </SectionValidator>
      <SectionValidator value={memberships}>
        <Memberships memberships={memberships} />
      </SectionValidator>
      <SectionValidator value={interests}>
        <Interests interests={interests} />
      </SectionValidator>
    </div>
  );
}
