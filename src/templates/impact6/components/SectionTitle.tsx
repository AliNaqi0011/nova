import { Briefcase, CheckSquare } from 'lucide-react';
import { ReactNode } from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  'GENERAL SKILLS': <CheckSquare size={18} />,
  'WORK EXPERIENCE': <Briefcase size={18} />,
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 text-[#38857b]">
      {iconMap[title]}
      <h2 className="text-base font-bold tracking-wider flex-grow border-b-2 border-gray-200 pb-1">
        {title}
      </h2>
    </div>
  );
}
