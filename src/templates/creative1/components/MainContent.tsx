import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { IWorkIntrf, IEducation } from '@/stores/index.interface';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Hobbies from './Hobbies';

interface MainContentProps {
  summary: string;
  work: IWorkIntrf[];
  education: IEducation[];
  hobbies: string[];
}
export default function MainContent({ summary, work, education, hobbies }: MainContentProps) {
  return (
    <div className="space-y-4">
      <SectionValidator value={summary}>
        <About summary={summary} />
      </SectionValidator>

      <SectionValidator value={work}>
        <Experience work={work} />
      </SectionValidator>

      <SectionValidator value={education}>
        <Education education={education} />
      </SectionValidator>

      <SectionValidator value={hobbies}>
        <Hobbies hobbies={hobbies} />
      </SectionValidator>
    </div>
  );
}
