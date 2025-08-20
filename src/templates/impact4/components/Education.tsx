import { IEducationItem } from '@/stores/education.interface';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section>
      <SectionTitle icon={<GraduationCap size={16} />} title="EDUCATION" />
      <div className="relative pl-8">
        <div className="absolute top-1.5 -left-1 w-3 h-3 bg-white border-2 border-[#00a99d] rounded-full"></div>
        <div className="absolute top-1.5 left-0 h-full border-l-2 border-gray-200"></div>
        {education.map((edu) => (
          <div key={edu.id} className="-mt-1">
            <h3 className="font-bold text-sm text-gray-800">{edu.studyType}</h3>
            <p className="text-sm font-semibold text-gray-600">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
