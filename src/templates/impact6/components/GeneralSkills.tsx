import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

export default function GeneralSkills({ skills }: { skills: ISkillItem[] }) {
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <section className="mb-5">
      <SectionTitle title="GENERAL SKILLS" />
      <div className="grid grid-cols-2 gap-x-8 mt-2 text-xs">
        <div>
          {firstHalf.map((skill) => (
            <p key={skill.name}>{skill.name}</p>
          ))}
        </div>
        <div>
          {secondHalf.map((skill) => (
            <p key={skill.name}>{skill.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
