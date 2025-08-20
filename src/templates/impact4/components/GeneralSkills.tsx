import { ISkillItem } from '@/stores/skill.interface';
import SidebarSection from './SidebarSection';
import { Wrench } from 'lucide-react';

export default function GeneralSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <SidebarSection icon={<Wrench size={16} />} title="GENERAL SKILLS">
      <ul className="space-y-1 text-xs">
        {skills.slice(0, 10).map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </SidebarSection>
  );
}
