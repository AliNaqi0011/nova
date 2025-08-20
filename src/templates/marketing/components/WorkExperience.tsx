import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="Work Experience" />
      <div className="space-y-4 ml-4">
        {work.map((job) => (
          <div key={job.id} className="relative pl-8">
            <div className="absolute top-1.5 -left-1 w-3 h-3 bg-white border-2 border-[#8e2de2] rounded-full"></div>
            <div className="absolute top-1.5 left-0 h-full border-l-2 border-gray-200"></div>

            <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
            <div className="flex justify-between items-baseline text-xs">
              <a
                href={job.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#8e2de2]"
              >
                <span>{job.name}</span>
                {job.url && <ExternalLink size={12} />}
              </a>
              <p className="text-gray-500">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-xs">
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
