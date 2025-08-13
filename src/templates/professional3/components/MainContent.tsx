import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { IEducationItem } from '@/stores/education.interface';
import { IExperienceItem } from '@/stores/experience.interface';
import { IAwardItem } from '@/stores/awards.interface';

import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import Achievements from './Achievements';

interface MainContentProps {
  summary: string;
  education: IEducationItem[];
  work: IExperienceItem[];
  awards: IAwardItem[];
}

export default function MainContent({ summary, education, work, awards }: MainContentProps) {
  return (
    <div className="space-y-8">
      <SectionValidator value={summary}>
        <Profile summary={summary} />
      </SectionValidator>

      <SectionValidator value={education}>
        <Education education={education} />
      </SectionValidator>

      <SectionValidator value={work}>
        <Experience work={work} />
      </SectionValidator>

      <SectionValidator value={awards}>
        <Achievements awards={awards} />
      </SectionValidator>
    </div>
  );
}
