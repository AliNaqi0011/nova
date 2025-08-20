import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

export default function SoftSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>SOFT SKILLS</SectionTitle>
      <div className="grid grid-cols-4 gap-x-4 gap-y-1 text-xs text-gray-700 mt-2">
        {skills.map((skill) => (
          <p key={skill.name}>{skill.name}</p>
        ))}
      </div>
    </section>
  );
}
