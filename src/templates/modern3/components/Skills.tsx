import { ISkillItem } from '@/stores/skill.interface';
import { Check } from 'lucide-react';

export default function Skills({ skills, title }: { skills: ISkillItem[]; title: string }) {
  return (
    <section className="my-4">
      <h2 className="text-lg font-bold text-[#008080] border-b-2 border-[#008080] pb-1 mb-3">
        {title.toUpperCase()}
      </h2>
      <ul className="text-sm">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-2 mb-1">
            <Check size={16} className="text-[#008080]" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
