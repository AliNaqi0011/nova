import { ReactNode } from 'react';
import {
  Briefcase,
  Cpu,
  Award,
  GraduationCap,
  Languages,
  FileText,
  Heart,
  UserSquare,
  ClipboardCheck,
  Star,
  Book,
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'GENERAL SKILLS': <ClipboardCheck size={20} />,
  'WORK EXPERIENCE': <Briefcase size={20} />,
  'PERSONAL PROJECTS': <Star size={20} />,
  CERTIFICATES: <Award size={20} />,
  EDUCATION: <GraduationCap size={20} />,
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 relative">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
        {iconMap[title.toUpperCase()] || <Briefcase size={20} />}
      </div>
      <h2 className="text-base font-bold tracking-wider text-gray-700">{title.toUpperCase()}</h2>
      <div
        className="absolute left-12 bottom-0 h-0.5 w-16"
        style={{ background: 'linear-gradient(to right, #4a00e0, #8e2de2)' }}
      ></div>
    </div>
  );
}
