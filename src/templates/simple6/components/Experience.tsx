import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      <div className="mt-1 space-y-3">
        {work.map((job) => (
          <div key={job.id} className="relative pl-5">
            <div className="absolute top-1 left-0 w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">{job.position}</h3>
              <p className="text-xs text-gray-500">{job.url || 'City, ST'}</p>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-xs font-semibold text-gray-700">{job.name}</p>
              <p className="text-xs text-gray-500">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <div className="prose prose-sm max-w-none text-gray-600 mt-1">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
