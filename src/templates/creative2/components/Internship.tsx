import { IExperienceItem } from '@/stores/experience.interface';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';

export default function Internship({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle>INTERNSHIP</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="text-xs mt-2">
          <p className="font-bold">
            {job.position} ({job.name}), {dateParser(job.startDate, 'YYYY')} -{' '}
            {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'YYYY')}
          </p>
          <div className="text-gray-600 prose prose-sm max-w-none">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
