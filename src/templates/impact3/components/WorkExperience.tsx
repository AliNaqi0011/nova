import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';

export default function WorkExperience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Briefcase size={20} />} title="WORK EXPERIENCE" />
      <div className="relative border-l-2 border-gray-200 mt-4 ml-4">
        {work.map((job) => (
          <div key={job.id} className="mb-6 pl-8 relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#002D62]"></div>
            <h3 className="font-bold text-base">{job.position}</h3>
            <div className="flex justify-between items-baseline">
              <p className="text-sm font-semibold text-gray-700">{job.name}</p>
              <p className="text-xs text-gray-500">
                {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
              </p>
            </div>
            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-sm">
              <ul className="list-disc pl-5 space-y-1">
                <HTMLRenderer htmlString={job.summary} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
