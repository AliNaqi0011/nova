import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-[#4a8275] bg-opacity-80 text-white px-3 py-1 text-center rounded-sm">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="SKILLS" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
