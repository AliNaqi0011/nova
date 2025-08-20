import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="my-5">
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      <div className="mt-1 space-y-4">
        {work.map((job) => (
          <div key={job.id}>
            <div className="flex justify-between items-baseline">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">{job.position}</h3>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-xs text-gray-500 font-semibold">
                {job.name}, {job.location?.city || 'USA'}
              </p>
            </div>
            <p className="text-sm text-gray-500 -mt-1">
              {dateParser(job.startDate, 'MM/YYYY')} -{' '}
              {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
            </p>
            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-[10.5pt] leading-relaxed">
              <ul className="list-disc pl-5 space-y-1">
                <HTMLRenderer htmlString={job.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
