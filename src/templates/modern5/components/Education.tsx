import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import { GraduationCap } from 'lucide-react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const EducationItem = ({ edu }: { edu: IEducationItem }) => (
  <div className="flex gap-4">
    <div className="bg-black text-white text-xs font-bold writing-vertical-rl transform rotate-180 flex items-center justify-center p-1">
      {dateParser(edu.startDate, 'YYYY')}
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-sm">{edu.studyType}</h3>
      <p className="text-xs text-gray-500 font-semibold">{edu.institution}</p>
      <div className="text-xs text-gray-600 mt-1">
        <HTMLRenderer htmlString={`${edu.area}. ${edu.score}`} />
      </div>
    </div>
  </div>
);

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <h2 className="flex items-center gap-3 text-lg font-bold border-b-2 pb-2 mb-4">
        <GraduationCap />
        EDUCATION
      </h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <EducationItem key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
}
