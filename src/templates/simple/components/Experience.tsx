import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mt-5">
      <SectionTitle>EXPERIENCE</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="mt-3 relative">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-sm font-bold text-gray-800">{job.position}</h3>
              <p className="text-sm font-semibold text-[#dd8045]">{job.name}</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p>{job.url ? job.url.split('//')[1] : 'New York, NY'}</p>
              <p>
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
          </div>
          <div className="prose prose-sm text-gray-600 mt-1 text-xs">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
