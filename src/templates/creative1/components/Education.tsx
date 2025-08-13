import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle>Education</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="flex gap-6 mt-2">
          <p className="font-semibold text-xs text-gray-600">
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
          </p>
          <div>
            <h3 className="font-bold text-sm text-gray-800">{edu.institution}</h3>
            <div className="text-xs mt-1">
              <HTMLRenderer htmlString={edu.area} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
