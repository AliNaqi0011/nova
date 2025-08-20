import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { ExternalLink } from 'lucide-react';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id}>
          <h3 className="text-base font-bold text-gray-800">{edu.studyType}</h3>
          <a
            href={edu.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:underline"
          >
            {edu.institution} <ExternalLink size={12} />
          </a>
          <p className="text-xs text-pink-500 font-semibold my-0.5">
            {dateParser(edu.startDate, 'YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
          </p>
          {edu.courses.length > 0 && (
            <div className="prose prose-sm text-gray-600 max-w-none">
              <HTMLRenderer htmlString={edu.courses[0]} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
