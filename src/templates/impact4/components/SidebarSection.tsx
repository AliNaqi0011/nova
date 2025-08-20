import { ReactNode } from 'react';

interface SidebarSectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export default function SidebarSection({ icon, title, children }: SidebarSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-bold text-sm tracking-wider">{title}</h3>
      </div>
      <div className="pl-11">{children}</div>
    </section>
  );
}
