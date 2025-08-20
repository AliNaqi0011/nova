import { ReactNode } from 'react';
import { Briefcase, User, GraduationCap, CheckCircle } from 'lucide-react';

const iconMap: { [key: string]: ReactNode } = {
  'WORK EXPERIENCE': <Briefcase size={16} />,
  'HARD SKILLS': <User size={16} />,
  'SOFT SKILLS': <CheckCircle size={16} />,
  EDUCATION: <GraduationCap size={16} />,
};

export default function SectionTitle({ children }: { children: ReactNode }) {
  const title = String(children).toUpperCase();
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
        {iconMap[title]}
      </div>
      <h2 className="text-sm font-bold tracking-wider text-gray-600">{title}</h2>
      <div className="flex-grow border-t-2 border-dotted border-gray-300"></div>
    </div>
  );
}
