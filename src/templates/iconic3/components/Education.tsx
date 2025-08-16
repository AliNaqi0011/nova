import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';

interface EducationWithAward extends IEducationItem {
  award?: string;
}

export default function Education({ education }: { education: EducationWithAward[] }) {
  return (
    <section>
      <SectionTitle icon={<GraduationCap size={16} />} title="EDUCATION" />
      {education.map((edu) => (
        <div key={edu.id} className="mt-2 text-xs">
          <h3 className="font-bold text-sm">{edu.studyType}</h3>
          <p className="font-semibold text-gray-800 -mt-0.5">{edu.institution}</p>
          <p className="text-gray-500 text-[8pt]">
            {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
          </p>
          {edu.award && <p className="text-blue-600 font-semibold mt-1">({edu.award})</p>}
          <ul className="list-disc pl-5 mt-1 space-y-0.5 text-gray-600">
            {edu.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
