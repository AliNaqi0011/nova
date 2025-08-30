import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Pencil } from 'lucide-react';

import { Dayjs } from 'dayjs';

interface Project {
  name: string;
  date: Dayjs | null;
  summary: string;
}

export default function PersonalProjects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <SectionTitle icon={<Pencil size={16} />} title="PERSONAL PROJECTS" />
      {projects.map((project, index) => (
        <div key={index} className="mt-2 text-xs">
          <h3 className="font-bold text-sm">
            {project.name} ({dateParser(project.date, 'MM/YYYY')})
          </h3>
          <div className="prose prose-sm max-w-none text-gray-600 mt-1">
            <HTMLRenderer htmlString={project.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
