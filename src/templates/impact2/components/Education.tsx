import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>EDUCATION</SectionTitle>
      <div className="mt-2">
        {education.map((edu) => (
          <div key={edu.id} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base text-[#3b82f6]">{edu.studyType}</h3>
              <p className="text-xs text-gray-500">GPA: {edu.score}</p>
            </div>
            <p className="font-semibold text-sm text-gray-700">{edu.institution}</p>
            <p className="text-xs text-gray-500">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
            {edu.courses && edu.courses.length > 0 && (
              <>
                <p className="text-xs font-semibold text-gray-600 mt-1">Relevant Courses:</p>
                <div className="grid grid-cols-3 gap-x-4 text-xs text-gray-600">
                  {edu.courses.map((course) => (
                    <div key={course} className="flex items-start gap-1">
                      <span className="text-[#3b82f6] font-bold mt-px">•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
