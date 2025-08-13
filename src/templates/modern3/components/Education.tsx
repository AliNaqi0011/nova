import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 border-b-2 border-[#008080] pb-1 mb-3">
        EDUCATION
      </h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-3">
          <h3 className="font-bold text-sm uppercase">{edu.area}</h3>
          <p className="text-sm font-semibold text-gray-600">{edu.institution}</p>
          <p className="text-xs text-gray-500">
            {edu.url} | {dateParser(edu.startDate, 'YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
          </p>
        </div>
      ))}
    </section>
  );
}
