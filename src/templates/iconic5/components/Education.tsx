import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle title="EDUCATION" />
      <div className="mt-1">
        {education.map((edu) => (
          <div key={edu.id} className="mt-4 relative pl-5">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
            {education.indexOf(edu) < education.length - 1 && (
              <div className="absolute left-[5px] top-4 h-full border-l border-gray-300"></div>
            )}
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-gray-800">{edu.studyType}</h3>
              <p className="text-xs text-gray-500 font-semibold">
                {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
                {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-600 -mt-1">{edu.institution}</p>
            <div className="prose prose-sm text-gray-600 mt-2 max-w-none text-sm leading-relaxed">
              <HTMLRenderer htmlString={edu.area} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
