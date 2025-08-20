import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle icon={<GraduationCap size={20} />} title="EDUCATION" />
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="font-bold text-base">{edu.studyType}</h3>
            <p className="text-sm text-gray-700">{edu.institution}</p>
            <p className="text-xs text-gray-500">
              {dateParser(edu.startDate, 'YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
