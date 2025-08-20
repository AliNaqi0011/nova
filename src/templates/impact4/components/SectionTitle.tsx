import { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e6f6f4] flex items-center justify-center text-[#00a99d]">
        {icon}
      </div>
      <h2 className="text-base font-bold text-gray-800 tracking-wider">{title}</h2>
    </div>
  );
}
