import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

export default function HardSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle>HARD SKILLS</SectionTitle>
      <div className="grid grid-cols-4 gap-x-4 gap-y-1 mt-1 text-xs">
        {skills.map((skill) => (
          <p key={skill.name}>{skill.name}</p>
        ))}
      </div>
    </section>
  );
}
