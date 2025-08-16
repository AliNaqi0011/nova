import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="mt-2.5">
          <h3 className="text-sm font-bold text-gray-800">{job.position}</h3>
          <div className="flex justify-between items-baseline text-xs">
            <a
              href={job.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#d74955]"
            >
              <span>{job.name}</span>
              <ExternalLink size={12} />
            </a>
            <span className="text-gray-500">
              {dateParser(job.startDate, 'MM/YYYY')} -{' '}
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
            </span>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 mt-1">
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <HTMLRenderer htmlString={job.summary} />
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
