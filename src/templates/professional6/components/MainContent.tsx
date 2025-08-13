import { IBasics, IEducation, IWorkIntrf } from '@/stores/index.interface';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import Experience from './Experience';
import Education from './Education';

interface MainContentProps {
  basics: IBasics;
  summary: string;
  work: IWorkIntrf[];
  education: IEducation[];
}

export default function MainContent({ basics, summary, work, education }: MainContentProps) {
  return (
    <div className="w-2/3 p-6">
      <Header basics={basics} />
      <div className="mt-4">
        <SectionValidator value={summary}>
          <ProfessionalSummary summary={summary} />
        </SectionValidator>
        <SectionValidator value={work}>
          <Experience work={work} />
        </SectionValidator>
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>
      </div>
    </div>
  );
}
