import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <p className="text-xs font-medium text-gray-700">{name}</p>
);

export default function HardSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle>Hard Skills</SectionTitle>
      <div className="grid grid-cols-4 gap-x-4 gap-y-1">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
