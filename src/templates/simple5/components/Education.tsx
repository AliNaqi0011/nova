import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>EDUCATION</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="mb-3">
          <h3 className="text-base font-bold text-gray-800">{edu.studyType}</h3>
          <p className="text-sm font-semibold text-gray-600">{edu.institution}</p>
          <p className="text-xs text-gray-500">
            {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
          </p>
        </div>
      ))}
    </section>
  );
}
