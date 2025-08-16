import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="border border-gray-300 px-2 py-0.5 text-center">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  if (skills.length === 0) return null;
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
