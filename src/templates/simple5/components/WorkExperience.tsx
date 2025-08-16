import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mb-6 avoid-page-break">
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="mb-5">
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
            <p className="text-xs text-gray-500">{job.url || 'City, ST'}</p>
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-sm font-semibold text-gray-600">{job.name}</p>
            <p className="text-xs text-gray-500">
              {dateParser(job.startDate, 'MM/YYYY')} -{' '}
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
            </p>
          </div>
          <div className="prose prose-sm text-gray-600 mt-2 text-xs max-w-none">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
