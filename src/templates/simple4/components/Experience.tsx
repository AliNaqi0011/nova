import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Calendar, MapPin } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

const ProjectItem = ({ name, description }: { name: string; description: string }) => (
  <div className="bg-gray-100 p-3 flex">
    <p className="w-1/3 font-semibold text-gray-700">{name}</p>
    <p className="w-2/3 text-gray-600">{description}</p>
  </div>
);

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="EXPERIENCE" />
      {work.map((job) => (
        <div key={job.id} className="mb-4">
          <h3 className="font-bold text-sm text-gray-800">{job.position}</h3>
          <div className="flex justify-between items-center text-xs mt-0.5">
            <p className="font-semibold text-[#2dd4bf]">{job.name}</p>
            <div className="flex gap-x-3 text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={11} />
                <span>
                  {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                  {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={11} />
                <span>Seattle, Washington</span>
              </div>
            </div>
          </div>
          <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-[9pt] leading-snug">
            <HTMLRenderer htmlString={job.summary} />
          </div>
          {job.highlights && job.highlights.length > 0 && (
            <div className="mt-3 space-y-1">
              <ProjectItem name="Project name" description="Description" />
              {job.highlights.slice(0, 3).map((highlight, index) => (
                <ProjectItem key={index} name={`Project ${index + 1}`} description={highlight} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
