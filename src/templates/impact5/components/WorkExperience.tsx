import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-4">
        {work.map((job) => (
          <div key={job.id}>
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
              <p className="text-xs text-pink-500 font-semibold">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <a
              href={job.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 -mt-1 hover:underline"
            >
              {job.name} <ExternalLink size={12} />
            </a>

            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-[10pt] leading-snug">
              <ul className="list-none p-0">
                <HTMLRenderer htmlString={job.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
