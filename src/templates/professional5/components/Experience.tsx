import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { MapPin, Calendar } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Experience" />
      <div className="mt-1">
        {work.map((job) => (
          <div key={job.id} className="mt-4">
            <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
            <div className="flex items-center justify-between text-xs mt-1">
              <a href={job.url} className="font-bold text-[#4a89a8] hover:underline">
                {job.name}
              </a>
              <div className="flex gap-x-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={12} />
                  <span>
                    {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                    {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin size={12} />
                  <span>{job.url ? 'Remote' : 'New York, NY'}</span>
                </div>
              </div>
            </div>
            <div className="prose prose-sm text-gray-700 mt-2 max-w-none">
              <ul className="list-disc pl-5 space-y-1 text-[10pt] leading-relaxed">
                <HTMLRenderer htmlString={job.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
