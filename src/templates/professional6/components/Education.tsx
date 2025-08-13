import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import { Calendar, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mb-4">
      <SectionTitle title="EDUCATION" />
      <div>
        {education.map((edu) => (
          <div key={edu.id} className="mb-3 text-xs">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm text-gray-800">{edu.studyType}</h3>
              <div className="flex gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {dateParser(edu.startDate, 'MMM YYYY')} -{' '}
                  {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MMM YYYY')}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  {edu.institution.split(',').pop()?.trim() || 'University City'}
                </div>
              </div>
            </div>
            <p className="font-bold text-blue-600 text-xs">{edu.institution}</p>
            <div className="text-xs mt-1 text-gray-600">
              <HTMLRenderer htmlString={edu.area} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
