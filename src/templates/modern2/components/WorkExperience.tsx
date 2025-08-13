import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';
import SectionTitle from './SectionTitle';
import { dateParser } from '@/helpers/utils';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-4">
        {work.map((job) => (
          <div key={job.id} className="text-sm">
            <p className="font-semibold text-red-400">
              {dateParser(job.startDate, 'YYYY')} -{' '}
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'YYYY')} | {job.position},{' '}
              {job.name}
            </p>
            <div className="text-gray-300">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
