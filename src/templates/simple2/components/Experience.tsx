import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>EXPERIENCE</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="mt-2.5">
          <h3 className="text-sm font-bold text-gray-800">{job.position}</h3>
          <p className="text-sm font-semibold text-gray-700 -mt-0.5">{job.name}</p>
          <div className="flex items-center gap-x-4 text-[9pt] text-gray-500 mt-0.5">
            <div className="flex items-center gap-1.5">
              <Calendar size={11} />
              <span>
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>{job.url ? 'Remote' : 'New York, NY'}</span>
            </div>
          </div>
          <div className="prose prose-sm text-gray-600 mt-1 max-w-none text-[10pt] leading-snug">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
