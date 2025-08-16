import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Briefcase size={16} />} title="WORK EXPERIENCE" />
      {work.map((job) => (
        <div key={job.id} className="mt-2 text-xs">
          <h3 className="font-bold text-sm">{job.position}</h3>
          <p className="font-semibold text-gray-800 -mt-0.5">{job.name}</p>
          <p className="text-gray-500 text-[8pt]">
            {dateParser(job.startDate, 'MM/YYYY')} -{' '}
            {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
          </p>
          <div className="prose prose-sm max-w-none text-gray-600 mt-1">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
