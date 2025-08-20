import { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-sm font-bold tracking-wider">{title}</h2>
    </div>
  );
}
