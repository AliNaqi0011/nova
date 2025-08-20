import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Lightbulb, ExternalLink } from 'lucide-react';

interface Project extends IVolunteeringItem {
  name: string;
}

export default function PersonalProjects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <SectionTitle icon={<Lightbulb size={16} />} title="PERSONAL PROJECTS" />
      {projects.map((project, index) => (
        <div key={index} className="mt-2 text-xs">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-sm hover:underline flex items-center gap-1"
          >
            {project.name} ({dateParser(project.startDate, 'MM/YYYY')}) <ExternalLink size={12} />
          </a>
          <div className="prose prose-sm max-w-none text-gray-600 mt-1">
            <HTMLRenderer htmlString={project.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
