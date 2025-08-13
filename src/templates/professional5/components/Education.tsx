import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import { MapPin, Calendar } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Education" />
      <div className="mt-3 space-y-3">
        {education.map((edu) => (
          <div key={edu.id}>
            <h4 className="font-bold text-[10pt]">{edu.studyType}</h4>
            <a href={edu.url} className="text-[10pt] text-[#4a89a8] hover:underline">
              {edu.institution}
            </a>
            <div className="flex items-center gap-4 text-gray-500 text-[9pt] mt-1">
              <div className="flex items-center gap-1.5">
                <Calendar size={11} />
                <span>
                  {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
                  {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={11} />
                <span>Providence, RI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
