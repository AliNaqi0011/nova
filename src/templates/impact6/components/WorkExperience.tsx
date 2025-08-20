import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mb-5">
      <SectionTitle title="WORK EXPERIENCE" />
      <div className="space-y-4 mt-2">
        {work.map((job) => (
          <div key={job.id} className="relative">
            <h3 className="font-bold text-base text-gray-800">{job.position}</h3>
            <div className="flex justify-between items-baseline">
              <a
                href={job.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-[#4fb2a6]"
              >
                <span>{job.name}</span>
                <ExternalLink size={12} />
              </a>
              <p className="text-xs text-gray-500">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>

            <div className="prose prose-sm text-gray-600 mt-2 max-w-none">
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
