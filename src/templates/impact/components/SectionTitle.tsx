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
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'WORK EXPERIENCE': <Briefcase size={20} />,
  SKILLS: <Cpu size={20} />,
  AWARDS: <Award size={20} />,
  EDUCATION: <GraduationCap size={20} />,
  LANGUAGES: <Languages size={20} />,
  'LICENSURE / TRAINING': <FileText size={20} />,
  INTERESTS: <Heart size={20} />,
  SUMMARY: <UserSquare size={20} />,
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-[#4a8275]">
        {iconMap[title.toUpperCase()] || <Briefcase size={20} />}
      </div>
      <h2 className="text-sm font-bold tracking-wider text-gray-600">{title.toUpperCase()}</h2>
    </div>
  );
}
