import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 border-b-2 border-[#008080] pb-1 mb-3">
        PROFESSIONAL EXPERIENCE
      </h2>
      {work.map((job) => (
        <div key={job.id} className="mb-4">
          <h3 className="font-bold text-sm">{job.name}</h3>
          <p className="text-sm font-semibold text-gray-600">{job.position}</p>
          <p className="text-xs text-gray-500">
            {job.url} | {dateParser(job.startDate, 'MMM YYYY')} -{' '}
            {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MMM YYYY')}
          </p>
          <div className="text-sm mt-1">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
