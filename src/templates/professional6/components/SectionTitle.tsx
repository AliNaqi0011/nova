import { User, Briefcase, GraduationCap } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'PROFESSIONAL SUMMARY': <User size={18} />,
  'WORK EXPERIENCE': <Briefcase size={18} />,
  EDUCATION: <GraduationCap size={18} />,
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
        {iconMap[title]}
      </div>
      <h2 className="text-base font-bold text-gray-800 tracking-wider">{title}</h2>
    </div>
  );
}
