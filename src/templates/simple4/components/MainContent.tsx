import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { IEducationItem } from '@/stores/education.interface';
import { IExperienceItem } from '@/stores/experience.interface';

import Experience from './Experience';
import Education from './Education';

interface MainContentProps {
  objective: string;
  work: IExperienceItem[];
  education: IEducationItem[];
}

export default function MainContent({ objective, work, education }: MainContentProps) {
  return (
    <div className="space-y-4 mt-20">
      <SectionValidator value={work}>
        <Experience work={work} />
      </SectionValidator>
      <SectionValidator value={education}>
        <Education education={education} />
      </SectionValidator>
    </div>
  );
}
