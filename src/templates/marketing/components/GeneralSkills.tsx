import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-gray-200 text-gray-700 px-3 py-1 text-center rounded-sm">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function GeneralSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="General Skills" />
      <div className="flex flex-wrap gap-2 mt-4 ml-12">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
