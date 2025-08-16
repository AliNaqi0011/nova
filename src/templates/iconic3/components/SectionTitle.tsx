import { ReactNode } from 'react';

export default function SectionTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1e3a4c]">
        {icon}
      </div>
      <h2 className="text-sm font-bold text-gray-800 tracking-wider">{title}</h2>
    </div>
  );
}
