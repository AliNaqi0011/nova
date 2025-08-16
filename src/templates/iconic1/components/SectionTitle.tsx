import { CaseSensitive, Briefcase } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'GENERAL SKILLS': <CaseSensitive size={16} className="text-black" />,
  'WORK EXPERIENCE': <Briefcase size={16} className="text-black" />,
};

const DiamondIcon = () => (
  <div className="w-3 h-3 bg-gray-400 transform rotate-45 flex-shrink-0"></div>
);

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
        {iconMap[title]}
      </div>
      <h2 className="text-sm font-bold text-gray-600 tracking-wider">{title}</h2>
      <div className="flex-grow flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <DiamondIcon />
    </div>
  );
}
