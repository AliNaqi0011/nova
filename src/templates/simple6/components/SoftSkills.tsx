import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-[#469587] bg-opacity-80 text-white px-3 py-1 text-center">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function SoftSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle>SOFT SKILLS</SectionTitle>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
