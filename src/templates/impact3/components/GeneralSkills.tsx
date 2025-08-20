import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';
import { Zap } from 'lucide-react';

export default function GeneralSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Zap size={20} />} title="GENERAL SKILLS" />
      <ul className="space-y-1 mt-2 text-xs">
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
}
