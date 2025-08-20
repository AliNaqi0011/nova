import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="EDUCATION" />
      {education.map((edu, eduIndex) => (
        <div key={edu.id} className="flex items-start gap-4 mb-3">
          <div className="relative mt-1">
            <div className="w-3 h-3 bg-white border-2 border-[#469587] rounded-full"></div>
            {eduIndex < education.length - 1 && (
              <div className="absolute top-3 left-1/2 w-px h-full bg-gray-200"></div>
            )}
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-sm text-gray-800">{edu.studyType}</h3>
            <p className="text-xs font-semibold text-gray-600 -mt-0.5">{edu.institution}</p>
            <p className="text-xs text-gray-500 mt-0.5">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
