import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';

const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-gray-100 p-2 my-2">
    <h2 className="text-sm font-bold uppercase text-[#2c3e50]">{title}</h2>
  </div>
);

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section>
      <SectionTitle title="Work Experience" />
      {work.map((job) => (
        <div key={job.id} className="mb-3">
          <p className="text-xs">Company: {job.name}</p>
          <p className="text-xs">Position: {job.position}</p>
          <p className="text-xs">
            Year start and end:{' '}
            {`${dateParser(job.startDate, 'YYYY')} - ${
              job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'YYYY')
            }`}
          </p>
        </div>
      ))}
    </section>
  );
}
