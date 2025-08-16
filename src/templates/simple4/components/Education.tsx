import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import { Calendar } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle title="EDUCATION" />
      <div className="space-y-2 mt-2">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="text-[10pt] font-bold text-gray-800">{edu.studyType}</h3>
            <p className="text-[9.5pt] font-semibold text-[#2dd4bf] -mt-0.5">{edu.institution}</p>
            <div className="flex items-center gap-1.5 text-[9pt] text-gray-500 mt-0.5">
              <Calendar size={11} />
              <span>
                {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
                {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
