import { IEducationItem } from '@/stores/education.interface';
import SectionTitle from './SectionTitle';
import { dateParser } from '@/helpers/utils';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-2">
        {education.map((edu) => (
          <div key={edu.id} className="text-sm">
            <p className="font-semibold text-red-400">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
            <p className="text-gray-300">
              {edu.studyType} in {edu.area}
            </p>
            <p className="text-gray-400">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
