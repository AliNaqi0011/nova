import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

export default function Skills({ skills, title }: { skills: ISkillItem[]; title: string }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-300">
        {skills.map((skill) => (
          <p key={skill.name}>{skill.name}</p>
        ))}
      </div>
    </section>
  );
}
