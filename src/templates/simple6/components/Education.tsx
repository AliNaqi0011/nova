import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle>EDUCATION</SectionTitle>
      <div className="grid grid-cols-2 gap-x-6 mt-1">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="font-bold text-sm">{edu.studyType}</h3>
            <p className="text-xs font-semibold">{edu.institution}</p>
            <p className="text-xs text-gray-500 mt-1">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
            <div className="text-xs text-gray-600">
              <HTMLRenderer htmlString={edu.score} />
              {edu.courses && edu.courses.length > 0 && (
                <div className="prose prose-sm max-w-none">
                  <ul className="pl-4">
                    {edu.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
