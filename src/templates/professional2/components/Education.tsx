import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <h2 className="text-base font-bold text-gray-800 tracking-wider border-b-2 border-gray-300 pb-1 mb-3">
        EDUCATION
      </h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="flex items-start gap-4">
            <p className="text-gray-800 font-bold text-sm">
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
            <div>
              <h3 className="font-bold text-sm uppercase">{edu.studyType}</h3>
              <p className="text-xs font-semibold text-gray-600">{edu.area}</p>
              <p className="text-xs text-gray-500">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
