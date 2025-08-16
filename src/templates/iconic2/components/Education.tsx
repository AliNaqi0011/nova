import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle>EDUCATION</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="mt-2.5">
          <h3 className="text-sm font-bold text-gray-800">{edu.studyType}</h3>
          <p className="text-sm font-semibold text-gray-700">{edu.institution}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
          </p>
        </div>
      ))}
    </section>
  );
}
