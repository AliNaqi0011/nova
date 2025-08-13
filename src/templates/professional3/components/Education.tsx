import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 tracking-wider mb-4">EDUCATION</h2>
      <div className="relative border-l-2 border-gray-200 space-y-6">
        <div className="absolute w-3 h-3 bg-[#5f9ea0] rounded-full -left-1.5 -top-1.5"></div>
        {education.map((edu) => (
          <div key={edu.id} className="pl-8">
            <div className="flex items-center">
              <div className="absolute w-3 h-3 bg-white border-2 border-[#5f9ea0] rounded-full -left-[7px]"></div>
              <p className="bg-[#5f9ea0] text-white text-xs font-semibold px-2 py-0.5 rounded-md">
                {dateParser(edu.startDate, 'YYYY')} -{' '}
                {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
              </p>
            </div>
            <h3 className="font-bold text-sm uppercase mt-2">
              {edu.studyType} / {edu.area}
            </h3>
            <p className="text-xs font-semibold text-gray-600 mb-1">{edu.institution}</p>
            <div className="text-xs text-gray-600">
              <HTMLRenderer htmlString={edu.score} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
