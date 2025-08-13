import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <h2 className="text-base font-bold text-gray-800 tracking-wider border-b-2 border-gray-300 pb-1 mb-3">
        EXPERIENCE
      </h2>
      <div className="space-y-4">
        {work.map((job) => (
          <div key={job.id} className="flex items-start gap-4">
            <p className="text-gray-800 font-bold text-sm">
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'YYYY')}
            </p>
            <div>
              <h3 className="font-bold text-sm uppercase">{job.position}</h3>
              <p className="text-xs font-semibold text-gray-600">{job.name}</p>
              <div className="text-xs text-gray-600 mt-1">
                <HTMLRenderer htmlString={job.summary} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
