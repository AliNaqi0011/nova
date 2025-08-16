import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle>EDUCATION</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="mt-2.5">
          <h3 className="text-sm font-bold text-gray-800">{edu.studyType}</h3>
          <p className="text-sm font-semibold text-gray-700 -mt-0.5">{edu.institution}</p>
          <div className="flex items-center gap-x-4 text-[9pt] text-gray-500 mt-0.5">
            <div className="flex items-center gap-1.5">
              <Calendar size={11} />
              <span>
                {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
                {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>{edu.area}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
