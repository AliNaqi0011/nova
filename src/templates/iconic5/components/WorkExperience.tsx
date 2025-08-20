import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle title="WORK EXPERIENCE" />
      <div className="mt-1">
        {work.map((job) => (
          <div key={job.id} className="mt-4 relative pl-5">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
            {work.indexOf(job) < work.length - 1 && (
              <div className="absolute left-[5px] top-4 h-full border-l border-gray-300"></div>
            )}
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
              <p className="text-xs text-gray-500 font-semibold">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-600 -mt-1">{job.name}</p>

            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-sm leading-relaxed">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
