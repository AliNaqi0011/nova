import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function PersonalProjects({ projects }: { projects: IVolunteeringItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="Personal Projects" />
      <div className="space-y-4 ml-4">
        {projects.map((project) => (
          <div key={project.id} className="relative pl-8">
            <div className="absolute top-1.5 -left-1 w-3 h-3 bg-white border-2 border-[#8e2de2] rounded-full"></div>
            <div className="absolute top-1.5 left-0 h-full border-l-2 border-gray-200"></div>

            <div className="flex justify-between items-baseline text-xs">
              <a
                href={project.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-base font-bold text-gray-800 hover:text-[#8e2de2]"
              >
                <span>{project.organization}</span>
                {project.url && <ExternalLink size={12} />}
              </a>
              <p className="text-gray-500">
                {dateParser(project.startDate, 'YYYY')} -{' '}
                {project.isVolunteeringNow ? 'Present' : dateParser(project.endDate, 'YYYY')}
              </p>
            </div>
            <div className="prose prose-sm text-gray-600 mt-1 max-w-none text-xs">
              <ul className="list-disc pl-5 space-y-1">
                <HTMLRenderer htmlString={project.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
