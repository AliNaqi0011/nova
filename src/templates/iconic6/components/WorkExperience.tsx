import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="WORK EXPERIENCE" />
      {work.map((job, jobIndex) => (
        <div key={job.id} className="mb-4">
          <div className="flex items-start gap-4">
            <div className="relative mt-1">
              <div className="w-3 h-3 bg-white border-2 border-[#469587] rounded-full"></div>
              {jobIndex < work.length - 1 && (
                <div className="absolute top-3 left-1/2 w-px h-full bg-gray-200"></div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-sm text-gray-800">{job.position}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold -mt-0.5">
                <a
                  href={job.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#469587]"
                >
                  {job.name}
                </a>
                <ExternalLink size={12} />
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
              <div className="prose prose-sm max-w-none text-gray-600 mt-1">
                <p className="text-[9pt] font-semibold text-green-600">Achievements</p>
                <ul className="list-disc pl-5 space-y-1 text-[9pt] leading-snug">
                  <HTMLRenderer htmlString={job.summary} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
