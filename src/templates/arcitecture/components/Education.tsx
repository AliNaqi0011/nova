import { IEducationItem } from '@/stores/education.interface';
import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Education({
  education,
  awards,
}: {
  education: IEducationItem[];
  awards: IAwardItem[];
}) {
  return (
    <section>
      <SectionTitle icon={<GraduationCap size={16} />} title="EDUCATION" />
      {education.map((edu) => {
        const relatedAward = awards.find(
          (award) =>
            award.awarder.includes(edu.institution) || award.title.includes(edu.institution)
        );
        return (
          <div key={edu.id} className="mt-2 text-xs">
            <h3 className="font-bold text-sm">{edu.studyType}</h3>
            <p className="font-semibold text-gray-800 -mt-0.5">{edu.institution}</p>
            <p className="text-gray-500 text-[8pt]">
              {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
              {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
            </p>
            {relatedAward && (
              <p className="text-blue-600 font-semibold mt-1">({relatedAward.title})</p>
            )}
            <ul className="list-disc pl-5 mt-1 space-y-0.5 text-gray-600">
              {edu.courses.map((course, index) => (
                <li key={index}>
                  <HTMLRenderer htmlString={course} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
