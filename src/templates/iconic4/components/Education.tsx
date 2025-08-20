import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="my-5">
      <SectionTitle>EDUCATION</SectionTitle>
      <div className="mt-2">
        {education.map((edu) => (
          <div key={edu.id} className="flex justify-between items-baseline">
            <div>
              <h3 className="text-base font-bold text-gray-800">{edu.studyType}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
            </div>
            <p className="text-sm text-gray-500">
              {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
