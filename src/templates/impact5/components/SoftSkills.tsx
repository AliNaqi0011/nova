import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-gray-200 text-gray-700 px-3 py-1 text-center rounded-sm">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function SoftSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle>Soft Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
