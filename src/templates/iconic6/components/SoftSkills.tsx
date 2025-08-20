import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-[#435263] text-white px-2.5 py-1 text-center rounded-sm">
    <p className="text-[8.5pt] font-medium">{name}</p>
  </div>
);

export default function SoftSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="SOFT SKILLS" />
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
