import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { dateParser } from '@/helpers/utils';
import { MapPin, Calendar } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

interface ProjectItem extends IVolunteeringItem {
  name: string;
}

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Projects" />
      <div className="mt-1">
        {projects.map((project) => (
          <div key={project.id} className="mt-4">
            <h3 className="text-base font-bold text-gray-800">{project.name}</h3>
            <div className="flex items-center gap-4 text-gray-500 text-xs mt-1">
              <div className="flex items-center gap-2">
                <Calendar size={12} />
                <span>
                  {dateParser(project.startDate, 'YYYY')} - {dateParser(project.endDate, 'YYYY')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>Chicago, IL</span>
              </div>
            </div>
            <p className="text-sm font-medium mt-1 mb-2">{project.position}</p>
            <div className="prose prose-sm text-gray-700 max-w-none">
              <ul className="list-disc pl-5 space-y-1 text-[10pt] leading-relaxed">
                <HTMLRenderer htmlString={project.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
