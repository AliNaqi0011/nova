import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase text-[#0c4a6e] border-b-2 border-gray-300 pb-1 mb-2">
        Education
      </h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-3 text-xs">
          <p className="font-bold">{edu.studyType}</p>
          <p className="text-gray-600">
            {dateParser(edu.startDate, 'YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
          </p>
          <div className="mt-1 text-gray-500">
            <p className="font-semibold">
              {edu.institution} / {edu.area}
            </p>
            <p>{edu.score}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
