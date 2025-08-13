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
    <div className="w-1/3 bg-[#2d767f] text-white p-6 flex flex-col gap-4">
      <div className="bg-[#64b5f6] p-4 -m-2">
        <ProfileImage
          src={basics.image}
          imageWrapperClassname="mx-auto"
          width="120px"
          height="120px"
        />
      </div>

      <SectionValidator value={skills}>
        <Skills skills={skills} />
      </SectionValidator>

      <SectionValidator value={interests}>
        <Interests interests={interests} />
      </SectionValidator>

      <SectionValidator value={strengths}>
        <Strengths strengths={strengths} />
      </SectionValidator>

      <SectionValidator value={languages}>
        <Languages languages={languages} />
      </SectionValidator>

      <SectionValidator value={achievements}>
        <Achievements achievements={achievements} />
      </SectionValidator>
    </div>
  );
}
