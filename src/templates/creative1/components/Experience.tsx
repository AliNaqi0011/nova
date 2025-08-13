import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle>Intern Experience</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="flex gap-6 mt-2">
          <div>
            <p className="font-semibold text-xs text-gray-600">
              {dateParser(job.startDate, 'YYYY')}
            </p>
            <p className="font-semibold text-xs text-gray-600">
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'YYYY')}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-800">{job.name}</h3>
            <p className="text-xs font-semibold text-gray-500">{job.position}</p>
            <div className="text-xs mt-1">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
