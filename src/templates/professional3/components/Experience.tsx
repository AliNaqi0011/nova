import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 tracking-wider mb-4">WORK EXPERIENCE</h2>
      <div className="relative border-l-2 border-gray-200 space-y-6">
        <div className="absolute w-3 h-3 bg-[#5f9ea0] rounded-full -left-1.5 -top-1.5"></div>
        {work.map((job) => (
          <div key={job.id} className="pl-8">
            <div className="absolute w-3 h-3 bg-white border-2 border-[#5f9ea0] rounded-full -left-[7px]"></div>
            <p className="text-xs font-semibold text-gray-500">
              {dateParser(job.startDate, 'MMM YYYY')} -{' '}
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MMM YYYY')}
            </p>
            <h3 className="font-bold text-sm uppercase mt-1">{job.position}</h3>
            <p className="text-xs font-semibold text-gray-600 mb-1">{job.name}</p>
            <div className="text-xs text-gray-600">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
