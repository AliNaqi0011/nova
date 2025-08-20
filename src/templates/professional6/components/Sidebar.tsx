import { IBasics } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';
import { IAwardItem } from '@/stores/awards.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Skills from './Skills';
import Interests from './Interests';
import Strengths from './Strengths';
import Languages from './Languages';
import Achievements from './Achievements';
import Header from './Header';

interface SidebarProps {
  basics: IBasics;
  skills: ISkillItem[];
  interests: string[];
  strengths: string[];
  achievements: IAwardItem[];
  languages: ISkillItem[];
}

export default function Sidebar({
  basics,
  skills,
  interests,
  strengths,
  achievements,
  languages,
}: SidebarProps) {
  return (
    <div className="w-full bg-[#2d767f] text-white p-6 flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <div className="bg-[#64b5f6] p-2">
          <ProfileImage src={basics.image} width="100px" height="100px" />
        </div>
        <Header basics={basics} />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4">
        <div>
          <SectionValidator value={skills}>
            <Skills skills={skills} />
          </SectionValidator>
        </div>
        <div>
          <SectionValidator value={achievements}>
            <Achievements achievements={achievements} />
          </SectionValidator>
          <SectionValidator value={strengths}>
            <Strengths strengths={strengths} />
          </SectionValidator>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4">
        <SectionValidator value={interests}>
          <Interests interests={interests} />
        </SectionValidator>
        <SectionValidator value={languages}>
          <Languages languages={languages} />
        </SectionValidator>
      </div>
    </div>
  );
}
