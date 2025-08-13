import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-gray-100 p-2 my-2">
    <h2 className="text-sm font-bold uppercase text-[#2c3e50]">{title}</h2>
  </div>
);

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle title="Educational History" />
      {education.map((edu) => (
        <div key={edu.id} className="mb-3">
          <h4 className="font-bold text-xs uppercase text-gray-600">{edu.studyType}</h4>
          <p className="text-xs">School: {edu.institution}</p>
          <p className="text-xs">Course: {edu.area}</p>
          <p className="text-xs">
            Year:{' '}
            {`${dateParser(edu.startDate, 'YYYY')} - ${
              edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')
            }`}
          </p>
        </div>
      ))}
    </section>
  );
}
