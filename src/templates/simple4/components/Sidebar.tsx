import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ISkillItem } from '@/stores/skill.interface';

interface SidebarProps {
  basics: IBasicDetailsItem | null;
  skills: ISkillItem[];
}

export default function Sidebar({ basics, skills }: SidebarProps) {
  if (!basics) return null;

  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        {basics.name?.toUpperCase()}
      </h1>
      <p className="text-sm font-light text-gray-500 tracking-widest -mt-2">
        {basics.label?.toUpperCase()}
      </p>
      <div className="space-y-2">
        {skills?.map((skill, index) => (
          <div key={index} className="text-sm">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
