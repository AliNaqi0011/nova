import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="EDUCATION" />
      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.id} className="text-xs">
            <h3 className="font-bold text-gray-800 leading-snug">{edu.institution}</h3>
            <p className="text-gray-600">
              {edu.studyType}, {edu.area}
            </p>
            <p className="text-gray-500 text-[9pt]">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
