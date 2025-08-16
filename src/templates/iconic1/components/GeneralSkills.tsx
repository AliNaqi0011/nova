import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-gray-400 text-white px-3 py-1 text-center">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function GeneralSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle title="GENERAL SKILLS" />
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
