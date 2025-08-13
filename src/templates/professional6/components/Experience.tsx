import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mb-4">
      <SectionTitle title="WORK EXPERIENCE" />
      <div>
        {work.map((job) => (
          <div key={job.id} className="mb-4 text-xs">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm text-gray-800">{job.position}</h3>
              <div className="flex gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {dateParser(job.startDate, 'MMM YYYY')} -{' '}
                  {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MMM YYYY')}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  {job.url?.split('.').slice(-2, -1).join('') || 'City, ST'}
                </div>
              </div>
            </div>
            <p className="font-bold text-blue-600 text-xs">{job.name}</p>
            <div className="mt-1 text-gray-600 prose prose-sm max-w-none">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
