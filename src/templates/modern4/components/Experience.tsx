import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IExperienceItem } from '@/stores/experience.interface';

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <div className="bg-[#00A9E8] text-white p-2 text-center my-4">
        <h2 className="text-sm font-bold uppercase tracking-wider">Work Experience</h2>
      </div>
      {work.map((job) => (
        <div key={job.id} className="mb-4">
          <h3 className="text-sm font-bold uppercase">{job.position}</h3>
          <p className="text-xs font-semibold text-gray-500 mb-1">
            {job.name} / {job.years}
          </p>
          <div className="text-xs text-gray-600">
            <HTMLRenderer htmlString={job.summary} />
          </div>
        </div>
      ))}
    </section>
  );
}
