import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Briefcase size={16} />} title="WORK EXPERIENCE" />
      <div className="space-y-4">
        {work.map((job) => (
          <div key={job.id} className="relative pl-8">
            <div className="absolute top-1.5 -left-1 w-3 h-3 bg-white border-2 border-[#00a99d] rounded-full"></div>
            <div className="absolute top-1.5 left-0 h-full border-l-2 border-gray-200"></div>

            <div className="flex justify-between items-baseline -mt-1">
              <h3 className="font-bold text-sm text-gray-800">{job.position}</h3>
              <p className="text-xs text-gray-500">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-600">{job.name}</p>
            <div className="prose prose-sm text-gray-600 mt-1 max-w-none text-xs">
              <p className="font-semibold text-gray-500">Achievements</p>
              <ul className="list-disc pl-5">
                <HTMLRenderer htmlString={job.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
