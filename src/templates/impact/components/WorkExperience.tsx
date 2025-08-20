import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="WORK EXPERIENCE" />
      <div className="space-y-4">
        {work.map((job) => (
          <div key={job.id} className="text-xs">
            <h3 className="font-bold text-gray-800 text-sm">{job.position}</h3>
            <div className="flex justify-between items-baseline">
              <p className="font-semibold text-gray-700">{job.name}</p>
              <p className="text-gray-500 text-[9pt]">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <div className="prose prose-sm text-gray-600 mt-1 max-w-none">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
